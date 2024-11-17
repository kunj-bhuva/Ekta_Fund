// controllers/responseController.js
const Review = require('../models/Review');
const Response = require('../models/Response');

exports.createResponse = async (req, res) => {
  try {
    const { reviewId, ngoName, message } = req.body;
    const response = new Response({ reviewId, ngoName, message });
    await response.save();

    // Link response to the review
    await Review.findByIdAndUpdate(reviewId, { response: response._id });

    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
