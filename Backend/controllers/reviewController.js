const Review = require("../models/Review");
const WebsiteReview = require("../models/WebsiteReview");

exports.addReview = async (req, res) => {
  try {
    const { donorName, message, ngoName } = req.body;
    const review = new Review({ donorName, message, ngoName });
    await review.save();
    res.status(201).json({ message: "Review submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error submitting review", error });
  }
};

exports.addWebsiteReview = async (req, res) => {
  try {
    const { reviewerName, reviewerType, message } = req.body;
    const websiteReview = new WebsiteReview({
      reviewerName,
      reviewerType,
      message,
    });
    await websiteReview.save();
    res.status(201).json({ message: "Website review submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error submitting website review", error });
  }
};
