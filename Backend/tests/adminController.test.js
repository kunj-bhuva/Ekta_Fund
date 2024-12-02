const { adminLogin, verifyNGO, createReviewAndNotifyNGO } = require('../../controllers/adminController.js');
const jwt = require('jsonwebtoken');
const NGO = require('../../models/NGO.js');
const Review = require('../../models/Review.js');
const { sendNotification } = require('../../utils/notifications');

// Mock environment variables
process.env.ADMIN_EMAIL = 'admin@example.com';
process.env.ADMIN_PASSWORD = 'securepassword';
process.env.JWT_SECRET = 'testsecret';

// Mock dependencies
jest.mock('jsonwebtoken', () => ({
  sign: jest.fn(() => 'mocked-token'),
}));
jest.mock('../../models/NGO.js', () => ({
  findByIdAndUpdate: jest.fn(),
  findOne: jest.fn(),
}));
jest.mock('../../models/Review.js', () => {
    return jest.fn().mockImplementation((reviewData) => ({
      ...reviewData,
      save: jest.fn().mockResolvedValue(),
    }));
  });
  
  
jest.mock('../../utils/notifications.js', () => ({
  sendNotification: jest.fn(),
}));

describe('Admin Controller Tests', () => {
  // Utility for mock responses
  const mockRes = () => ({
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  });

  describe('adminLogin', () => {
    it('should return a token for valid credentials', async () => {
      const req = {
        body: { email: 'admin@example.com', password: 'securepassword' },
      };
      const res = mockRes();

      await adminLogin(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Admin login successful',
        token: 'mocked-token',
      });
      expect(jwt.sign).toHaveBeenCalledWith({ role: 'admin' }, 'testsecret', { expiresIn: '5h' });
    });

    it('should return an error for invalid credentials', async () => {
      const req = {
        body: { email: 'wrong@example.com', password: 'wrongpassword' },
      };
      const res = mockRes();

      await adminLogin(req, res);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ message: 'Invalid admin credentials' });
    });
  });

  describe('verifyNGO', () => {
    it('should update the NGO status and send a notification', async () => {
      NGO.findByIdAndUpdate.mockResolvedValue({ name: 'Test NGO', email: 'test@ngo.com' });
      sendNotification.mockResolvedValue();

      const req = { body: { ngoId: '12345', status: 'verified' } };
      const res = mockRes();

      await verifyNGO(req, res);

      expect(NGO.findByIdAndUpdate).toHaveBeenCalledWith('12345', { verificationStatus: 'verified' }, { new: true });
      expect(sendNotification).toHaveBeenCalledWith(
        'test@ngo.com',
        'NGO Verification Approved',
        expect.any(String)
      );
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ message: 'Verification status updated and notification sent' }));
    });

    it('should return 404 if the NGO is not found', async () => {
      NGO.findByIdAndUpdate.mockResolvedValue(null);

      const req = { body: { ngoId: '12345', status: 'verified' } };
      const res = mockRes();

      await verifyNGO(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'NGO not found' });
    });
  });

  describe('createReviewAndNotifyNGO', () => {
    it('should return 404 if the NGO is not found', async () => {
        NGO.findOne.mockResolvedValue(null);  // Simulate no NGO found
      
        const req = { body: { ngoName: 'Test NGO', reviewText: 'Great work!' } };
        const res = mockRes();
      
        await createReviewAndNotifyNGO(req, res);
      
        expect(res.status).toHaveBeenCalledWith(404);  // Check for 404
        expect(res.json).toHaveBeenCalledWith({ message: 'Associated NGO not found for this review.' });
    });
      
  
    it('should return 404 if the NGO is not found', async () => {
      NGO.findOne.mockResolvedValue(null);
  
      const req = { body: { ngoName: 'Test NGO', reviewText: 'Great work!' } };
      const res = mockRes();
  
      await createReviewAndNotifyNGO(req, res);
  
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'Associated NGO not found for this review.' });
    });
  
    it('should return 404 if the NGO email is not found', async () => {
      NGO.findOne.mockResolvedValue({ name: 'Test NGO', contactPerson: 'John Doe' });
  
      const req = { body: { ngoName: 'Test NGO', reviewText: 'Great work!' } };
      const res = mockRes();
  
      await createReviewAndNotifyNGO(req, res);
  
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'No email address available for the NGO.' });
    });
  });  
});
