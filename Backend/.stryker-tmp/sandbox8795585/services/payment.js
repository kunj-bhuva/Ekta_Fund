// @ts-nocheck
const crypto = require("crypto");

exports.createMockTransaction = async ({
  name,
  mobileNumber,
  ngoName,
  amount,
}) => {
  const transactionToken = crypto.randomBytes(16).toString("hex");

  const transactionDetails = {
    transactionToken,
    name,
    mobileNumber,
    ngoName,
    amount,
    createdAt: new Date(),
  };

  return transactionDetails;
};
