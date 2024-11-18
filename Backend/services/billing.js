// services/billing.js

exports.recordTransaction = async (amount, ngoId) => {
  return {
    transactionId: `TRANS_${Date.now()}`,
    amount,
    ngoId,
    status: "Completed",
  };
};
