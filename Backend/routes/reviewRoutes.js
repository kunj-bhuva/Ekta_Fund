const express = require('express');
const { addReview, addWebsiteReview } = require('../controllers/reviewController');
const router = express.Router();

// Route for donor reviews with NGO name
router.post('/NGOreviews', addReview);

// Route for website reviews
router.post('/website-reviews', addWebsiteReview);

module.exports = router;
