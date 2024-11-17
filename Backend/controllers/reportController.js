const { generatePDF, generateCSV, cleanupCSV } = require('../reports/reportGenerator');
const User = require('../models/NGO'); // Import the User model or your data source
const User1 = require('../models/Donor'); // Import the User model or your data source
const fs = require('fs');
const path = require('path');

// Placeholder function to fetch data for reports
async function getDataForReport(req) {
    try {
        // Set up filters based on query parameters
        const filters = {};
        if (req.query.role) filters.role = req.query.role;
        if (req.query.status) filters.status = req.query.status;

        // Fetch users from the database using the filters
        const users = await User.find(filters); // Assuming you have a User model

        // Map and return the relevant data
        return users.map(user => ({
            name: user.name,
            email: user.email,
            phone: user.phone || 'N/A',
            role: user.role || 'User',
            status: user.status || 'Active',
        }));
    } catch (error) {
        console.error("Error fetching data for report:", error);
        throw new Error('Failed to fetch data');
    }
}

// Controller to generate PDF report
exports.generatePDFReport = async (req, res) => {
    try {
        const data = await getDataForReport(req);  // Fetch dynamic data for the report
        const doc = generatePDF(data);

        // Set headers for PDF response
        res.setHeader('Content-Disposition', 'attachment; filename="report.pdf"');
        res.setHeader('Content-Type', 'application/pdf');

        // Handle errors on the document stream
        doc.on('error', (err) => {
            console.error("Error in PDF generation:", err);
            res.status(500).send({ message: "Failed to generate PDF report." });
        });

        // Pipe the document to the response, then end it after content is added
        doc.pipe(res);
        doc.end();
    } catch (error) {
        console.error("Error generating PDF:", error);
        res.status(500).send({ message: "Failed to generate PDF report." });
    }
};
