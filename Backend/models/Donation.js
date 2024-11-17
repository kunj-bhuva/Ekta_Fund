// models/Donation.js
const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  donorId: {
    type: String,
    required: true,
  },
  transactionId: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    enum: ["Completed", "Failed"],
    default: "Completed",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  ngoName: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Donation", donationSchema);
