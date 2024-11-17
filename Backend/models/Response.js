// models/Response.js
const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
  reviewId: { type: mongoose.Schema.Types.ObjectId, ref: 'Review', required: true },
  ngoName: String,
  message: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Response', responseSchema);
