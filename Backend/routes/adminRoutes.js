const express = require('express');
const router = express.Router();
const { adminLogin, verifyNGO } = require('../controllers/adminController');
const { adminAuth } = require('../middleware/authMiddleware');
const { viewPendingRequests } = require('../controllers/ngoController');

// Route to view pending verification requests
router.get('/pending-verifications',  viewPendingRequests);

// Admin login route
router.post('/login', adminLogin);

// Protected routes for NGO verification
router.post('/verify-ngo',  verifyNGO);  // Only accessible to logged-in admin

module.exports = router;
