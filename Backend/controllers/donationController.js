const paymentService = require("../services/payment"); // Use the mock payment service
const receiptGenerator = require("../services/receiptGenerator");
const Donation = require("../models/Donation");

exports.processDonation = async (req, res) => {
  try {
    // Destructure required fields from request body
    const { amount, donorId, name, mobileNumber, ngoName } = req.body;

    // Ensure all required fields are present
    if (
      !amount ||
      !donorId ||
      !name ||
      !mobileNumber ||
      !ngoName
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Generate a mock transaction token based on user-provided details
    const paymentResult = await paymentService.createMockTransaction({
      name,
      mobileNumber,
      ngoName,
      amount,
    });

    if (!paymentResult.transactionToken) {
      return res.status(400).json({ error: "Payment processing failed." });
    }

    // Save donation details, including transaction token, to the database
    const donation = await Donation.create({
      amount,
      donorId,
      transactionId: paymentResult.transactionToken,
      status: "Completed",
    });

    // Generate a receipt for the donation
    const receipt = await receiptGenerator.generateReceipt(donation);

    res
      .status(201)
      .json({ message: "Donation processed successfully", receipt });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
