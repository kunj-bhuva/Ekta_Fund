const { addReview, addWebsiteReview } = require('../reviewController');
const Review = require('../../models/Review');
const WebsiteReview = require('../../models/WebsiteReview');

// Mock the required models
jest.mock('../../models/Review');
jest.mock('../../models/WebsiteReview');

describe('Review Controller', () => {
  let req, res;

  beforeEach(() => {
    // Mock the req and res objects
    req = {
      body: {
        donorName: 'John Doe',
        message: 'Great service!',
        ngoName: 'NGO Example',
      },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
  });

  describe('addReview', () => {
    it('should successfully add a review', async () => {
      // Mock the save function
      const mockReview = {
        save: jest.fn().mockResolvedValue({ donorName: req.body.donorName, message: req.body.message, ngoName: req.body.ngoName }),
      };

      // Mock the Review constructor
      Review.mockImplementationOnce(() => mockReview);

      // Call the controller function
      await addReview(req, res);

      // Check if save was called
      expect(Review).toHaveBeenCalledWith({
        donorName: req.body.donorName,
        message: req.body.message,
        ngoName: req.body.ngoName,
      });
      expect(mockReview.save).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ message: 'Review submitted successfully' });
    });

    it('should return an error if review submission fails', async () => {
      // Mock the save function to throw an error
      const errorMessage = 'Database error';
      const mockReview = {
        save: jest.fn().mockRejectedValue(new Error(errorMessage)),
      };

      Review.mockImplementationOnce(() => mockReview);

      // Call the controller function
      await addReview(req, res);

      // Check if error handling works
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error submitting review', error: expect.any(Error) });
    });
  });

  describe('addWebsiteReview', () => {
    it('should successfully add a website review', async () => {
      // Mock the save function
      const mockWebsiteReview = {
        save: jest.fn().mockResolvedValue({
          reviewerName: req.body.reviewerName,
          reviewerType: req.body.reviewerType,
          message: req.body.message,
        }),
      };

      // Mock the WebsiteReview constructor
      WebsiteReview.mockImplementationOnce(() => mockWebsiteReview);

      // Modify req for website review
      req.body.reviewerName = 'Jane Doe';
      req.body.reviewerType = 'User';
      req.body.message = 'Great website experience!';

      // Call the controller function
      await addWebsiteReview(req, res);

      // Check if save was called
      expect(WebsiteReview).toHaveBeenCalledWith({
        reviewerName: req.body.reviewerName,
        reviewerType: req.body.reviewerType,
        message: req.body.message,
      });
      expect(mockWebsiteReview.save).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ message: 'Website review submitted successfully' });
    });

    it('should return an error if website review submission fails', async () => {
      // Mock the save function to throw an error
      const errorMessage = 'Database error';
      const mockWebsiteReview = {
        save: jest.fn().mockRejectedValue(new Error(errorMessage)),
      };

      WebsiteReview.mockImplementationOnce(() => mockWebsiteReview);

      // Modify req for website review
      req.body.reviewerName = 'Jane Doe';
      req.body.reviewerType = 'User';
      req.body.message = 'Great website experience!';

      // Call the controller function
      await addWebsiteReview(req, res);

      // Check if error handling works
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error submitting website review', error: expect.any(Error) });
    });
  });
});
