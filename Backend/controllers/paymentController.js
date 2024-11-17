const paymentService = require('../services/payment');

// Endpoint to create a "mock" payment and generate a transaction token
exports.createMockPayment = async (req, res) => {
    try {
        const { name, mobileNumber, ngoName, amount } = req.body;

        // Check if all fields are provided
        if (!name || !mobileNumber || !ngoName || !amount) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Generate a transaction token and save payment details
        const mockPaymentDetails = await paymentService.createMockTransaction({
            name,
            mobileNumber,
            ngoName,
            amount
        });

        // Respond with the mock transaction token and details
        res.status(200).json(mockPaymentDetails);
    } catch (error) {
        console.error('Error creating mock payment:', error);
        res.status(500).json({ error: 'Failed to initiate mock payment' });
    }
};
