// routes/responseRoutes.js
const express = require('express');
const { createResponse } = require('../controllers/responseController');
const router = express.Router();

router.post('/responses', createResponse);

module.exports = router;
