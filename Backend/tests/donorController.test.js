const donorController = require('../../controllers/donorController');
const Donor = require('../../models/Donor');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const NGO = require('../../models/NGO');

// Mock dependencies
jest.mock('../../models/Donor');
jest.mock('../../models/NGO');
jest.mock('bcrypt');
jest.mock('jsonwebtoken');

describe('Donor Controller', () => {

  // Test for registerDonor
  describe('registerDonor', () => {
    it('should successfully register a donor', async () => {
      const newDonor = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'password123',
        contactNumber: '1234567890',
      };

      Donor.findOne.mockResolvedValue(null); // No donor found
      Donor.prototype.save.mockResolvedValue(newDonor);

      const req = { body: newDonor };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await donorController.registerDonor(req, res);

      expect(Donor.findOne).toHaveBeenCalledWith({ email: newDonor.email });
      expect(Donor.prototype.save).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Donor registered successfully',
      });
    });

    it('should return 400 if donor already exists', async () => {
      const existingDonor = { email: 'john.doe@example.com' };

      Donor.findOne.mockResolvedValue(existingDonor);

      const req = { body: existingDonor };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await donorController.registerDonor(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Donor already registered',
      });
    });

    it('should return 500 if there is a server error', async () => {
      Donor.findOne.mockRejectedValue(new Error('Database error'));

      const req = { body: { name: 'John Doe', email: 'john.doe@example.com' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await donorController.registerDonor(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error: 'Server error',
      });
    });
  });

  // Test for loginDonor
  describe('loginDonor', () => {
    it('should successfully login and return a token', async () => {
      const donor = {
        _id: 'donor123',
        email: 'john.doe@example.com',
        password: 'password123',
      };

      bcrypt.compare.mockResolvedValue(true);
      jwt.sign.mockReturnValue('jwt_token');

      Donor.findOne.mockResolvedValue(donor);

      const req = {
        body: {
          email: 'john.doe@example.com',
          password: 'password123',
        },
      };

      const res = {
        json: jest.fn(),
      };

      await donorController.loginDonor(req, res);

      expect(Donor.findOne).toHaveBeenCalledWith({ email: req.body.email });
      expect(bcrypt.compare).toHaveBeenCalledWith(req.body.password, donor.password);
      expect(jwt.sign).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith({ token: 'jwt_token' });
    });

    it('should return 400 if email or password is incorrect', async () => {
      Donor.findOne.mockResolvedValue(null); // Donor not found

      const req = {
        body: {
          email: 'nonexistent@example.com',
          password: 'password123',
        },
      };

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await donorController.loginDonor(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Invalid email or password',
      });
    });

    it('should return 500 if there is a server error', async () => {
      Donor.findOne.mockRejectedValue(new Error('Database error'));

      const req = { body: { email: 'john.doe@example.com', password: 'password123' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await donorController.loginDonor(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error: 'Server error',
      });
    });
  });

  // Test for getFilteredNGOs
  describe('getFilteredNGOs', () => {
    it('should return filtered NGOs based on location', async () => {
      const ngos = [{ name: 'NGO1', location: 'New York' }];
      NGO.find.mockResolvedValue(ngos);

      const req = { body: { location: 'New York' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await donorController.getFilteredNGOs(req, res);

      expect(NGO.find).toHaveBeenCalledWith({ location: 'New York' });
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        ngos: ngos,
        message: 'Filtered NGO list retrieved successfully',
      });
    });

    it('should return 500 if there is a server error', async () => {
      NGO.find.mockRejectedValue(new Error('Database error'));

      const req = { body: { location: 'New York' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await donorController.getFilteredNGOs(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Error retrieving NGOs',
        error: expect.any(Error),
      });
    });
  });

  // Test for deleteDonor
  describe('deleteDonor', () => {
    it('should successfully delete a donor', async () => {
      Donor.findByIdAndDelete.mockResolvedValue(true);

      const req = { params: { id: 'donor123' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };

      await donorController.deleteDonor(req, res);

      expect(Donor.findByIdAndDelete).toHaveBeenCalledWith('donor123');
      expect(res.status).toHaveBeenCalledWith(204);
      expect(res.send).toHaveBeenCalled();
    });

    it('should return 400 if there is an error while deleting donor', async () => {
      Donor.findByIdAndDelete.mockRejectedValue(new Error('Deletion error'));

      const req = { params: { id: 'donor123' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await donorController.deleteDonor(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        error: 'Deletion error',
      });
    });
  });
});

