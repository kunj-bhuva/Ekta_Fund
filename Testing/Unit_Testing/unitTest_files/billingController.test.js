const billingController = require("../../controllers/billingController.js");
const reportGenerator = require("../../services/reportGenerator.js");
const Transaction = require("../../models/Transaction.js");

// Mock dependencies
jest.mock("../../models/Transaction.js");
jest.mock("../../services/reportGenerator");

describe("Billing Controller", () => {

  // Test for generateBill
  describe("generateBill", () => {
    it("should successfully create a transaction and return status 201", async () => {
      // Mock the successful creation of a transaction
      const mockTransaction = {
        amount: 100,
        ngoId: "ngo123",
        ngoName: "Test NGO",
        status: "Completed",
        transactionDate: new Date(),
      };
      
      Transaction.create.mockResolvedValue(mockTransaction);
      
      const req = {
        body: {
          amount: 100,
          ngoId: "ngo123",
          ngoName: "Test NGO",
        }
      };
      
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      
      await billingController.generateBill(req, res);
      
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        message: "Transaction recorded successfully",
        transaction: mockTransaction
      });
    });

    it("should return status 500 when transaction creation fails", async () => {
      // Mock a failure in creating the transaction
      Transaction.create.mockRejectedValue(new Error("Database error"));
      
      const req = {
        body: {
          amount: 100,
          ngoId: "ngo123",
          ngoName: "Test NGO",
        }
      };
      
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      
      await billingController.generateBill(req, res);
      
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error: "Failed to generate bill"
      });
    });
  });

  // Test for downloadDonationReport
  describe("downloadDonationReport", () => {
    it("should generate a donation report and return a PDF", async () => {
      // Mock the report generation function
      const mockTransactions = [
        {
          _id: "trans123",
          amount: 100,
          status: "Completed",
          transactionDate: new Date(),
        },
        {
          _id: "trans124",
          amount: 200,
          status: "Completed",
          transactionDate: new Date(),
        },
      ];
      
      reportGenerator.generateDonationReport.mockResolvedValue(Buffer.from("mock-pdf-data"));
      
      const req = { params: { ngoId: "ngo123" } };
      const res = {
        setHeader: jest.fn(),
        contentType: jest.fn(),
        send: jest.fn()
      };
      
      await billingController.downloadDonationReport(req, res);
      
      expect(res.setHeader).toHaveBeenCalledWith("Content-Disposition", "attachment; filename=donation_report.pdf");
      expect(res.contentType).toHaveBeenCalledWith("application/pdf");
      expect(res.send).toHaveBeenCalledWith(Buffer.from("mock-pdf-data"));
    });

    it("should return status 500 if report generation fails", async () => {
      // Mock a failure in report generation
      reportGenerator.generateDonationReport.mockRejectedValue(new Error("Report generation error"));
      
      const req = { params: { ngoId: "ngo123" } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      
      await billingController.downloadDonationReport(req, res);
      
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error: "Could not generate donation report"
      });
    });
  });
});
