const paymentService = require("../services/payment");

exports.createMockPayment = async (req, res) => {
  try {
    const { name, mobileNumber, ngoName, amount } = req.body;

    if (!name || !mobileNumber || !ngoName || !amount) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const mockPaymentDetails = await paymentService.createMockTransaction({
      name,
      mobileNumber,
      ngoName,
      amount,
    });

    res.status(200).json(mockPaymentDetails);
  } catch (error) {
    console.error("Error creating mock payment:", error);
    res.status(500).json({ error: "Failed to initiate mock payment" });
  }
};
