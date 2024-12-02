const { createMockTransaction } = require('./payment.js'); // Adjust the import path
const crypto = require('crypto');

describe('createMockTransaction', () => {
  it('should generate a transaction token of type string with length 32', async () => {
    const mockData = {
      name: 'John Doe',
      mobileNumber: '1234567890',
      ngoName: 'Help NGO',
      amount: 1000,
    };

    const result = await createMockTransaction(mockData);

    // Check that the transaction token is a string of length 32
    expect(result.transactionToken).toBeDefined();
    expect(result.transactionToken).toMatch(/^[a-f0-9]{32}$/); // 32 hex characters
  });

  it('should include the correct details in the transaction object', async () => {
    const mockData = {
      name: 'John Doe',
      mobileNumber: '1234567890',
      ngoName: 'Help NGO',
      amount: 1000,
    };

    const result = await createMockTransaction(mockData);

    // Check that the fields in transactionDetails match the input values
    expect(result.name).toBe(mockData.name);
    expect(result.mobileNumber).toBe(mockData.mobileNumber);
    expect(result.ngoName).toBe(mockData.ngoName);
    expect(result.amount).toBe(mockData.amount);
  });

  it('should include the createdAt field with the current date', async () => {
    const mockData = {
      name: 'John Doe',
      mobileNumber: '1234567890',
      ngoName: 'Help NGO',
      amount: 1000,
    };

    const result = await createMockTransaction(mockData);

    // Check that the createdAt field is present and is a valid date
    expect(result.createdAt).toBeInstanceOf(Date);
    expect(result.createdAt.getTime()).toBeLessThanOrEqual(Date.now());
  });

  it('should throw an error if required fields are missing', async () => {
    const mockData = {
      name: 'John Doe',
      mobileNumber: '1234567890',
      ngoName: 'Help NGO',
      // amount is missing
    };

    await expect(createMockTransaction(mockData)).rejects.toThrow('amount is required');
  });
  it('should throw an error if name is missing', async () => {
    const mockData = {
      mobileNumber: '1234567890',
      ngoName: 'Help NGO',
      amount: 50,
    };
    await expect(createMockTransaction(mockData)).rejects.toThrow('name is required');
  });
  
  it('should throw an error if mobileNumber is missing', async () => {
    const mockData = {
      name: 'John Doe',
      ngoName: 'Help NGO',
      amount: 50,
    };
    await expect(createMockTransaction(mockData)).rejects.toThrow('mobileNumber is required');
  });
  
  it('should throw an error if ngoName is missing', async () => {
    const mockData = {
      name: 'John Doe',
      mobileNumber: '1234567890',
      amount: 50,
    };
    await expect(createMockTransaction(mockData)).rejects.toThrow('ngoName is required');
  });
  
  it('should throw an error if amount is not a number', async () => {
    const mockData = {
      name: 'John Doe',
      mobileNumber: '1234567890',
      ngoName: 'Help NGO',
      amount: 'invalid', // Invalid amount
    };
    await expect(createMockTransaction(mockData)).rejects.toThrow('Amount must be a number');
  });
  
  it('should generate a unique transaction token of correct length', async () => {
    const mockData = {
      name: 'John Doe',
      mobileNumber: '1234567890',
      ngoName: 'Help NGO',
      amount: 50,
    };
    const transaction = await createMockTransaction(mockData);
    expect(transaction.transactionToken).toHaveLength(32); // Check length of the token
  });
  
  it('should handle invalid data types gracefully', async () => {
    const mockData = {
      name: 'John Doe',
      mobileNumber: '1234567890',
      ngoName: 'Help NGO',
      amount: 'invalid', // Invalid amount type
    };

    await expect(createMockTransaction(mockData)).rejects.toThrow('Amount must be a number');
  });
});
