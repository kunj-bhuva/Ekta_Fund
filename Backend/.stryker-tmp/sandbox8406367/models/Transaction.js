// @ts-nocheck
// models/Transaction.js
const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  ngoId: {
    type: String,
    required: true,
  },
  ngoName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Completed", "Failed"],
    default: "Completed",
  },
  transactionDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Transaction", transactionSchema);
