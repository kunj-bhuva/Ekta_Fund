const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../../app'); // Your Express app
const Review = require('../models/Review');
const Response = require('../models/Response');

// Variables for in-memory MongoDB
let mongoServer;
let review;

beforeAll(async () => {
  // Set up in-memory MongoDB server
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  // Clean up after tests and disconnect
  await mongoose.disconnect();
  await mongoServer.stop();
});

beforeEach(async () => {
  // Create a mock review before each test
  review = new Review({
    title: 'Test Review',
    content: 'This is a test review.',
    rating: 5,
  });
  await review.save();
});

afterEach(async () => {
  // Clean up collections after each test
  await Review.deleteMany();
  await Response.deleteMany();
});

describe('Response Controller', () => {
  it('should create a response and link it to the review', async () => {
    const responseData = {
      reviewId: review._id, 
      ngoName: 'Test NGO', 
      message: 'Thank you for your feedback!',
    };

    // Simulate sending POST request to create response
    const res = await request(app)
      .post('/api/responses')  // Replace with your actual endpoint
      .send(responseData)
      .expect(201);

    // Assertions
    expect(res.body.ngoName).toBe('Test NGO');
    expect(res.body.message).toBe('Thank you for your feedback!');

    // Verify that the response is linked to the review
    const updatedReview = await Review.findById(review._id);
    expect(updatedReview.response.toString()).toBe(res.body._id);
  });

  it('should handle errors when creating a response', async () => {
    const res = await request(app)
      .post('/api/responses')
      .send({
        reviewId: 'invalidReviewId',  // Invalid review ID
        ngoName: 'Test NGO',
        message: 'Test message',
      })
      .expect(500);

    // Error handling
    expect(res.body.error).toBeTruthy();
  });
});
