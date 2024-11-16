// controllers/billingController.js
const billingService = require("../services/billing");
const reportGenerator = require("../services/reportGenerator");
const Transaction = require("../models/Transaction");

exports.generateBill = async (req, res) => {
  try {
    const { amount, ngoId, ngoName } = req.body;
    
    // Create and store a new transaction record with ngoName
    const transaction = await Transaction.create({
      amount,
      ngoId,
      ngoName,
      status: "Completed",
      transactionDate: new Date(),
    });

    res.status(201).json({ message: "Transaction recorded successfully", transaction });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate bill" });
  }
};

exports.downloadDonationReport = async (req, res) => {
  try {
    const { ngoId } = req.params;

    // Generate report
    const reportBuffer = await reportGenerator.generateDonationReport(ngoId);

    // Send downloadable PDF file
    res.setHeader("Content-Disposition", "attachment; filename=donation_report.pdf");
    res.contentType("application/pdf");
    res.send(reportBuffer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not generate donation report" });
  }
};
