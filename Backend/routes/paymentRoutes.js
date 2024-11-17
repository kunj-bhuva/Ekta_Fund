const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// Route for creating a mock payment
router.post('/mock-create', paymentController.createMockPayment);

module.exports = router;
