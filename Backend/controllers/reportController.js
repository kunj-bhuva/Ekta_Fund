const {
  generatePDF,
  generateCSV,
  cleanupCSV,
} = require("../reports/reportGenerator");
const User = require("../models/NGO");
const User1 = require("../models/Donor");
const fs = require("fs");
const path = require("path");

async function getDataForReport(req) {
  try {
    const filters = {};
    if (req.query.role) filters.role = req.query.role;
    if (req.query.status) filters.status = req.query.status;

    const users = await User.find(filters);

    return users.map((user) => ({
      name: user.name,
      email: user.email,
      phone: user.phone || "N/A",
      role: user.role || "User",
      status: user.status || "Active",
    }));
  } catch (error) {
    console.error("Error fetching data for report:", error);
    throw new Error("Failed to fetch data");
  }
}

// Controller to generate PDF report
exports.generatePDFReport = async (req, res) => {
  try {
    const data = await getDataForReport(req); // Fetch dynamic data for the report
    const doc = generatePDF(data);

    // Set headers for PDF response
    res.setHeader("Content-Disposition", 'attachment; filename="report.pdf"');
    res.setHeader("Content-Type", "application/pdf");

    // Handle errors on the document stream
    doc.on("error", (err) => {
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

// Controller to generate CSV report
exports.generateCSVReport = async (req, res) => {
  try {
    const data = await getDataForReport(req); // Fetch dynamic data for the report
    const csvPath = await generateCSV(data);

    // Download the CSV file and delete it afterwards
    res.download(csvPath, "report.csv", (err) => {
      if (err) {
        console.error("Error downloading CSV:", err);
        res.status(500).send({ message: "Failed to download CSV report." });
      }
      cleanupCSV(csvPath); // Cleanup temp CSV file after download
    });
  } catch (error) {
    console.error("Error generating CSV:", error);
    res.status(500).send({ message: "Failed to generate CSV report." });
  }
};
