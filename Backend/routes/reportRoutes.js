const express = require('express');
const { generatePDFReport, generateCSVReport } = require('../controllers/reportController');
const router = express.Router();

router.get('/pdf', async (req, res) => {
    try {
        await generatePDFReport(req, res);  // Call the controller function to generate the PDF
    } catch (error) {
        console.error("Error generating PDF:", error);
        res.status(500).send({ message: "Failed to generate PDF report." });
    }
});


router.get('/csv', async (req, res) => {
    try {
        await generateCSVReport(req, res);  // Call the controller function to generate the CSV
    } catch (error) {
        console.error("Error generating CSV:", error);
        res.status(500).send({ message: "Failed to generate CSV report." });
    }
});