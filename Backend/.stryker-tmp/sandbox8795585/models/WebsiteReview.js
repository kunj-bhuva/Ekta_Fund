// @ts-nocheck
const mongoose = require('mongoose');

const websiteReviewSchema = new mongoose.Schema({
  reviewerName: { type: String, required: true },
  reviewerType: { type: String, enum: ['Donor', 'NGO'], required: true },
  message: { type: String, required: true },
  approved: { type: Boolean, default: true },  // New field for moderation
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('WebsiteReview', websiteReviewSchema);
