// services/receiptGenerator.js

exports.generateReceipt = async (donation) => {
    // Simulate receipt generation (you may replace with actual PDF generation if needed)
    return {
      receiptId: `RECEIPT_${donation.transactionId}`,
      date: new Date(),
      amount: donation.amount,
      donorId: donation.donorId,
      transactionId: donation.transactionId,
    };
  };
  