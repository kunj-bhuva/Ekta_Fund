// @ts-nocheck
const express = require('express');
const { addReview, addWebsiteReview } = require('../controllers/reviewController');
const router = express.Router();

router.post('/NGOreviews', addReview);
router.post('/website-reviews', addWebsiteReview);

module.exports = router;
