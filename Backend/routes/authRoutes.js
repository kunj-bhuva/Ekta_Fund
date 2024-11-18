const express = require('express');
const router = express.Router();
const { resetPassword } = require('../controllers/authController');

// Route for resetting the password
router.post('/reset', resetPassword);

module.exports = router;
