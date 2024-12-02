// @ts-nocheck
const paymentService = require("../services/payment");
const receiptGenerator = require("../services/receiptGenerator");
const Donation = require("../models/Donation");

exports.processDonation = async (req, res) => {
  try {
    const { amount, name, mobileNumber, ngoName } = req.body;

    if (!amount || !name || !mobileNumber || !ngoName) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const donorId = Math.floor(
      Math.random() * (10 ** 15 - 10 ** 10) + 10 ** 10
    ).toString();

    const paymentResult = await paymentService.createMockTransaction({
      name,
      mobileNumber,
      ngoName,
      amount,
    });

    if (!paymentResult.transactionToken) {
      return res.status(400).json({ error: "Payment processing failed." });
    }

    const donation = await Donation.create({
      amount,
      donorId,
      ngoName,
      transactionId: paymentResult.transactionToken,
      status: "Completed",
    });

    await receiptGenerator.generateReceipt(donation, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
