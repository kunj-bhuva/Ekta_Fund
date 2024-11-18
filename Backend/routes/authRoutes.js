const express = require('express');
const router = express.Router();
const { resetPassword } = require('../controllers/authController');

router.post('/reset', resetPassword);

module.exports = router;
