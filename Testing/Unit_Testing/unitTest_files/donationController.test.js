const donationController = require("../../controllers/donationController");
const paymentService = require("../../services/payment");
const receiptGenerator = require("../../services/receiptGenerator");
const Donation = require("../../models/Donation");

// Mock dependencies
jest.mock("../../models/Donation");
jest.mock("../../services/payment");
jest.mock("../../services/receiptGenerator");

describe("Donation Controller", () => {

  // Test for processDonation
  describe("processDonation", () => {
    it("should successfully process donation and return receipt", async () => {
      const mockDonation = {
        amount: 100,
        donorId: "donor123",
        transactionId: "txn_abc123",
        status: "Completed",
      };

      const mockReceipt = {
        receiptId: "RECEIPT_txn_abc123",
        date: new Date(),
        amount: 100,
        donorId: "donor123",
        transactionId: "txn_abc123",
      };

      // Mock the services
      paymentService.createMockTransaction.mockResolvedValue({
        transactionToken: "txn_abc123",
      });
      Donation.create.mockResolvedValue(mockDonation);
      receiptGenerator.generateReceipt.mockResolvedValue(mockReceipt);

      const req = {
        body: {
          amount: 100,
          donorId: "donor123",
          name: "John Doe",
          mobileNumber: "1234567890",
          ngoName: "Test NGO",
        },
      };

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await donationController.processDonation(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        message: "Donation processed successfully",
        receipt: mockReceipt,
      });
    });

    it("should return 400 if any required field is missing", async () => {
      const req = {
        body: {
          amount: 100,
          donorId: "donor123",
          name: "John Doe",
          // mobileNumber and ngoName are missing
        },
      };

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await donationController.processDonation(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        error: "All fields are required",
      });
    });

    it("should return 400 if payment processing fails", async () => {
      // Mock payment service failure (no transactionToken)
      paymentService.createMockTransaction.mockResolvedValue({});

      const req = {
        body: {
          amount: 100,
          donorId: "donor123",
          name: "John Doe",
          mobileNumber: "1234567890",
          ngoName: "Test NGO",
        },
      };

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await donationController.processDonation(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        error: "Payment processing failed.",
      });
    });

    it("should handle unexpected errors and return 500", async () => {
      // Simulate an unexpected error during donation creation
      paymentService.createMockTransaction.mockResolvedValue({
        transactionToken: "txn_abc123",
      });
      Donation.create.mockRejectedValue(new Error("Database error"));

      const req = {
        body: {
          amount: 100,
          donorId: "donor123",
          name: "John Doe",
          mobileNumber: "1234567890",
          ngoName: "Test NGO",
        },
      };

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await donationController.processDonation(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error: "Internal Server Error",
      });
    });
  });
});
