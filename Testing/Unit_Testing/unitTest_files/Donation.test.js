const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const Donation = require("../Donation");

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri(), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("Donation Model", () => {
  it("should save a valid donation", async () => {
    const donation = new Donation({
      amount: 100,
      donorId: "123",
      transactionId: "tx_001",
    });

    const savedDonation = await donation.save();
    expect(savedDonation._id).toBeDefined();
    expect(savedDonation.status).toBe("Completed");
    expect(savedDonation.createdAt).toBeDefined();
  });

  it("should enforce required fields", async () => {
    const donation = new Donation({});
    let error;
    try {
      await donation.save();
    } catch (err) {
      error = err;
    }
    expect(error).toBeDefined();
    expect(error.errors.amount).toBeDefined();
    expect(error.errors.donorId).toBeDefined();
    expect(error.errors.transactionId).toBeDefined();
  });

  it("should validate unique transactionId", async () => {
    const donation1 = new Donation({
      amount: 100,
      donorId: "123",
      transactionId: "tx_001",
    });
  
    const donation2 = new Donation({
      amount: 200,
      donorId: "456",
      transactionId: "tx_001", // Duplicate
    });
  
    // Save the first donation
    await donation1.save();
  
    // Attempt to save the second and catch the error
    let error;
    try {
      await donation2.save();
    } catch (err) {
      error = err;
    }
  
    // Check that the error is a MongoServerError with code 11000 (duplicate key error)
    expect(error).toBeDefined();
    expect(error.name).toBe("MongoServerError");
    expect(error.code).toBe(11000); // Duplicate key error code
  });
  
});
