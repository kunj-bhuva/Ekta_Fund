// controllers/billingController.js
const reportGenerator = require("../services/reportGenerator");
const Donation = require("../models/Donation")

exports.downloadDonationReport = async (req, res) => {
  try {
    const { ngoName } = req.body;

    // Validate ngoName
    if (!ngoName) {
      return res.status(400).json({ error: "NGO name is required" });
    }

    // Find the NGO ID based on the ngoName
    const ngo = await Donation.findOne({ ngoName });
 
    if (!ngo) {
      return res.status(404).json({ error: "NGO not found" });
    }

    
    // Generate the report
    const reportBuffer = await reportGenerator.generateDonationReport(ngoName);

    
    // Send downloadable PDF file
    res.setHeader("Content-Disposition", "attachment; filename=donation_report.pdf");
    res.contentType("application/pdf");
    res.send(reportBuffer);

  } catch (error) {
    console.error(error.message || error);
    res.status(500).json({ error: "Could not generate donation report" });
  }
};
