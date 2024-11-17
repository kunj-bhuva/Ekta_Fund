const express = require('express');
const { generatePDFReport, generateCSVReport } = require('../controllers/reportController');
const router = express.Router();