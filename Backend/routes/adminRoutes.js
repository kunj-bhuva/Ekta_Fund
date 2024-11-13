// routes/adminRoutes.js
const express = require("express");
const {
  getUnapprovedReviews,
  approveReview,
  rejectReview,
  findAndEmailNGO,
  respondToReview,
} = require("../controllers/adminController");

const router = express.Router();

// Route to get all unapproved reviews
router.get("/reviews/unapproved", getUnapprovedReviews);

// Route to approve a review by its ID
router.patch("/reviews/:id/approve", approveReview);

// Route to reject (delete) a review by its ID
router.delete("/reviews/:id/reject", rejectReview);

// Route to find NGO by name and send an email
router.get("/ngo/:name/email", findAndEmailNGO);

// Route to allow NGO to respond to a review
router.post("/review/respond", respondToReview);

module.exports = router;
