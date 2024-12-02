const { recordTransaction } = require('./billing'); // Adjust the import path

describe('recordTransaction', () => {
  it('should return a transaction object with correct fields', async () => {
    const amount = 100;
    const ngoId = 1;

    const result = await recordTransaction(amount, ngoId);

    // Assert the result contains the expected properties
    expect(result).toHaveProperty('transactionId');
    expect(result).toHaveProperty('amount', amount);
    expect(result).toHaveProperty('ngoId', ngoId);
    expect(result).toHaveProperty('status', 'Completed');
  });

  it('should generate a unique transactionId based on the current timestamp', async () => {
    const amount = 200;
    const ngoId = 2;

    const result = await recordTransaction(amount, ngoId);

    // Check if transactionId starts with 'TRANS_' followed by a number
    expect(result.transactionId).toMatch(/^TRANS_\d+$/);
  });

  it('should throw an error if amount is invalid (negative or zero)', async () => {
    const invalidAmount = -10;
    const ngoId = 3;

    // Expect the promise to be rejected with an error
    await expect(recordTransaction(invalidAmount, ngoId)).rejects.toThrow('Amount must be greater than zero');
  });

  it('should throw an error if ngoId is invalid (non-positive)', async () => {
    const amount = 50;
    const invalidNgoId = 0;

    // Expect the promise to be rejected with an error
    await expect(recordTransaction(amount, invalidNgoId)).rejects.toThrow('NGO ID must be a positive integer');
  });

  it('should return the correct status "Completed"', async () => {
    const amount = 500;
    const ngoId = 4;

    const result = await recordTransaction(amount, ngoId);

    // Check if the status is "Completed"
    expect(result.status).toBe('Completed');
  });
});
