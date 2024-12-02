// @ts-nocheck
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

describe('NGO Controller Tests', () => {
  let token;
  let ngo;

  beforeAll(async () => {
    // Establish a connection to a test database
    await mongoose.connect(process.env.MONGO_URI_TEST, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    // Clean up and close the connection after all tests
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    // Create a new NGO and generate a token for the tests
    ngo = new NGO({
      name: 'Test NGO',
      location: 'Test Location',
      causeArea: 'Test Cause',
      contactPerson: 'John Doe',
      mobileNumber: '1234567890',
      email: 'testngo@example.com',
      address: '123 Test St',
      password: await bcrypt.hash('password123', 10),
      vision: 'Test Vision',
      mission: 'Test Mission',
    });
    await ngo.save();

    // Generate token for authenticated requests
    token = jwt.sign({ id: ngo._id, role: ngo.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
  });

  afterEach(async () => {
    // Clean up database after each test
    await NGO.deleteMany({});
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
      const newNGO = {
        name: 'New NGO',
        location: 'New Location',
        causeArea: 'New Cause',
        contactPerson: 'Jane Doe',
        mobileNumber: '0987654321',
        email: 'testngo@example.com',
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

  describe('PUT /updateNGOProfile', () => {
    it('should successfully update the NGO profile', async () => {
      const updateData = {
        email: 'testngo@example.com',
        password: 'password123',
        name: 'Updated NGO',
        location: 'Updated Location',
        causeArea: 'Updated Cause',
        contactPerson: 'Updated Person',
        mobileNumber: '9876543210',
        address: '789 Updated St',
        vision: 'Updated Vision',
        mission: 'Updated Mission',
      };

      const res = await request(app)
        .put('/api/ngos/update')
        .set('Authorization', `Bearer ${token}`)
        .field('email', updateData.email)
        .field('password', updateData.password)
        .field('name', updateData.name)
        .field('location', updateData.location)
        .field('causeArea', updateData.causeArea)
        .field('contactPerson', updateData.contactPerson)
        .field('mobileNumber', updateData.mobileNumber)
        .field('address', updateData.address)
        .field('vision', updateData.vision)
        .field('mission', updateData.mission)
        .attach('updated12A', path.resolve(__dirname, 'test-files', 'updated12A.pdf'))
        .attach('updated80G', path.resolve(__dirname, 'test-files', 'updated80G.pdf'));

      expect(res.status).toBe(200);
      expect(res.body.message).toBe('NGO profile updated successfully');
    });

    it('should return 400 if email is missing for update', async () => {
      const updateData = {
        password: 'password123',
        name: 'Updated NGO',
        location: 'Updated Location',
        causeArea: 'Updated Cause',
      };

      const res = await request(app)
        .put('/api/ngos/update')
        .set('Authorization', `Bearer ${token}`)
        .send(updateData);

      expect(res.status).toBe(400);
      expect(res.body.message).toBe('Email is required to identify the NGO');
    });

    it('should return 404 if NGO not found for update', async () => {
      const updateData = {
        email: 'nonexistentngo@example.com',
        password: 'password123',
        name: 'Updated NGO',
      };

      const res = await request(app)
        .put('/api/ngos/update')
        .set('Authorization', `Bearer ${token}`)
        .send(updateData);

      expect(res.status).toBe(404);
      expect(res.body.message).toBe('NGO with the specified email not found');
    });
  });

  describe('GET /viewPendingRequests', () => {
    it('should return all pending requests', async () => {
      const res = await request(app)
        .get('/api/ngos/pending-requests')
        .set('Authorization', `Bearer ${token}`);

      expect(res.status).toBe(200);
      expect(res.body.pendingNGOs).toBeDefined();
    });

    it('should return 404 if no pending requests found', async () => {
      const res = await request(app)
        .get('/api/ngos/pending-requests')
        .set('Authorization', `Bearer ${token}`);

      expect(res.status).toBe(404);
      expect(res.body.message).toBe('No pending verification requests found');
    });
  });
});
