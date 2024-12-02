require('dotenv').config({ path: '../../.env' });

const request = require('supertest');
const app = require('../../app.js'); // Assuming your express app is exported here
const mongoose = require('mongoose');
const NGO = require('../../models/NGO');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

jest.mock('jsonwebtoken');
jest.mock('mongoose');  // Mock mongoose

describe('NGO Controller Tests', () => {
  let token;
  let ngo;

  beforeAll(() => {
    // Mock the JWT generation
    jwt.sign = jest.fn().mockReturnValue('mockedtoken');
  });

  beforeEach(() => {
    // Mock NGO model methods
    NGO.prototype.save = jest.fn().mockResolvedValue(true);
    NGO.deleteMany = jest.fn().mockResolvedValue(true);
    NGO.findOne = jest.fn().mockResolvedValue(null);  // Mock NGO not found
    NGO.find = jest.fn().mockResolvedValue([]);  // Mock an empty list for pending requests

    // Create a mock NGO instance
    ngo = {
      name: 'Test NGO',
      location: 'Test Location',
      causeArea: 'Test Cause',
      contactPerson: 'John Doe',
      mobileNumber: '1234567890',
      email: 'testngo@example.com',
      address: '123 Test St',
      password: bcrypt.hashSync('password123', 10),
      vision: 'Test Vision',
      mission: 'Test Mission',
    };
  });

  afterEach(() => {
    jest.clearAllMocks();  // Clear mocks after each test
  });

  describe('POST /registerNGO', () => {
    it('should successfully register a new NGO', async () => {
      const newNGO = {
        name: 'New NGO',
        location: 'New Location',
        causeArea: 'New Cause',
        contactPerson: 'Jane Doe',
        mobileNumber: '0987654321',
        email: 'newngo@example.com',
        address: '456 New St',
        password: 'password123',
        vision: 'New Vision',
        mission: 'New Mission',
      };

      const res = await request(app)
        .post('/api/ngos/register')
        .field('name', newNGO.name)
        .field('location', newNGO.location)
        .field('causeArea', newNGO.causeArea)
        .field('contactPerson', newNGO.contactPerson)
        .field('mobileNumber', newNGO.mobileNumber)
        .field('email', newNGO.email)
        .field('address', newNGO.address)
        .field('vision', newNGO.vision)
        .field('mission', newNGO.mission)
        .attach('updated12A', path.resolve(__dirname, 'test-files', 'updated12A.pdf'))
        .attach('updated80G', path.resolve(__dirname, 'test-files', 'updated80G.pdf'));

      expect(res.status).toBe(201);
      expect(res.body.message).toBe('NGO registered successfully');
    });

    it('should return 400 if updated12A or updated80G files are missing', async () => {
      const newNGO = {
        name: 'New NGO',
        location: 'New Location',
        causeArea: 'New Cause',
        contactPerson: 'Jane Doe',
        mobileNumber: '0987654321',
        email: 'newngo@example.com',
        address: '456 New St',
        password: 'password123',
        vision: 'New Vision',
        mission: 'New Mission',
      };

      const res = await request(app)
        .post('/api/ngos/register')
        .send(newNGO);

      expect(res.status).toBe(400);
      expect(res.body.message).toBe('Both updated12A and updated80G files are required');
    });

    it('should return 400 if NGO already exists', async () => {
      NGO.findOne = jest.fn().mockResolvedValue(ngo);  // Mock NGO exists

      const newNGO = {
        name: 'New NGO',
        location: 'New Location',
        causeArea: 'New Cause',
        contactPerson: 'Jane Doe',
        mobileNumber: '0987654321',
        email: 'testngo@example.com',  // Existing email
        address: '456 New St',
        password: 'password123',
        vision: 'New Vision',
        mission: 'New Mission',
      };

      const res = await request(app)
        .post('/api/ngos/register')
        .field('name', newNGO.name)
        .field('location', newNGO.location)
        .field('causeArea', newNGO.causeArea)
        .field('contactPerson', newNGO.contactPerson)
        .field('mobileNumber', newNGO.mobileNumber)
        .field('email', newNGO.email)
        .field('address', newNGO.address)
        .field('vision', newNGO.vision)
        .field('mission', newNGO.mission)
        .attach('updated12A', path.resolve(__dirname, 'test-files', 'updated12A.pdf'))
        .attach('updated80G', path.resolve(__dirname, 'test-files', 'updated80G.pdf'));

      expect(res.status).toBe(400);
      expect(res.body.message).toBe('NGO already registered');
    });
  });

  describe('POST /loginNGO', () => {
    it('should successfully login and return a token', async () => {
      const loginData = {
        email: 'testngo@example.com',
        password: 'password123',
      };

      const res = await request(app).post('/api/ngos/login').send(loginData);
      expect(res.status).toBe(200);
      expect(res.body.token).toBeDefined();
    });

    it('should return 400 if email or password is missing', async () => {
      const loginData = { email: 'testngo@example.com' };
      const res = await request(app).post('/api/ngos/login').send(loginData);

      expect(res.status).toBe(400);
      expect(res.body.message).toBe('Email and password are required');
    });

    it('should return 400 if email is invalid', async () => {
      const loginData = {
        email: 'invalidemail@example.com',
        password: 'password123',
      };

      const res = await request(app).post('/api/ngos/login').send(loginData);

      expect(res.status).toBe(400);
      expect(res.body.message).toBe('Invalid email ');
    });

    it('should return 400 if password is invalid', async () => {
      const loginData = {
        email: 'testngo@example.com',
        password: 'wrongpassword',
      };

      const res = await request(app).post('/api/ngos/login').send(loginData);

      expect(res.status).toBe(400);
      expect(res.body.message).toBe('Invalid  password');
    });
  });

  // Similar tests for PUT /updateNGOProfile and GET /viewPendingRequests...
});
