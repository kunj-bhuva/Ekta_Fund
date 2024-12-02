// @ts-nocheck
const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  donorName: { type: String, required: true },
  message: { type: String, required: true },
  ngoName: { type: String, required: true },
  approved: { type: Boolean, default: false }, 
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Review", reviewSchema);
