const bcrypt = require('bcryptjs'); // or 'bcrypt', depending on your setup
const { adminLogin, verifyNGO } = require("../adminController");
const NGO = require("../../models/NGO");
const { sendNotification } = require("../../utils/notifications");
const jwt = require("jsonwebtoken");

jest.mock("../../models/NGO");
jest.mock("../../utils/notifications");
jest.mock("jsonwebtoken");

describe("Admin and NGO Controller Tests", () => {
  let res;
  let req;

  beforeEach(() => {
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    req = {
      body: {},
    };
    jest.clearAllMocks();
  });

  describe("adminLogin", () => {
    it("should return 400 if no email is provided", async () => {
      req.body = { password: "admin123" };

      await adminLogin(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: "Email is required",
      });
    });

    it("should return 400 if NGO ID is in an invalid format", async () => {
      req.body = { ngoId: "invalid_id", status: "verified" };
  
      await verifyNGO(req, res);
  
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: "NGO ID must be a valid format",
      });
    });
  
    it("should handle an empty request body for adminLogin gracefully", async () => {
      req.body = {};
  
      await adminLogin(req, res);
  
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: "Email is required",
      });
    });
  
    it("should handle JWT sign errors gracefully during adminLogin", async () => {
      req.body = { email: "admin@admin.com", password: "admin123" };
      process.env.ADMIN_EMAIL = "admin@admin.com";
      process.env.ADMIN_PASSWORD = "admin123";
      process.env.JWT_SECRET = "secretkey";
  
      jwt.sign.mockImplementation(() => {
        throw new Error("JWT signing error");
      });
  
      await adminLogin(req, res);
  
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        message: "Error during admin login",
        error: expect.any(Error),
      });
    });
  
    it("should handle a large NGO ID gracefully without crashing", async () => {
      req.body = { ngoId: "a".repeat(100), status: "verified" };
  
      await verifyNGO(req, res);
  
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: "NGO ID must be a valid format",
      });
    });
  
    it("should verify the NGO successfully when a valid status and NGO ID are provided", async () => {
      req.body = { ngoId: "5f2b6e6b8a8d6e1a5c5b9e6b", status: "verified" };
      const ngo = { name: "Test NGO", email: "ngo@example.com" };
      NGO.findByIdAndUpdate.mockResolvedValue(ngo);
      sendNotification.mockResolvedValue();
  
      await verifyNGO(req, res);
  
      expect(NGO.findByIdAndUpdate).toHaveBeenCalledWith(
        "5f2b6e6b8a8d6e1a5c5b9e6b",
        { verificationStatus: "verified" },
        { new: true }
      );
      expect(sendNotification).toHaveBeenCalledWith(
        ngo.email,
        "NGO Verification Approved",
        expect.stringContaining("Your NGO verification status has been updated to: verified.")
      );
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: "Verification status updated and notification sent",
        ngo,
      });
    });

    it("should return 400 if no password is provided", async () => {
      req.body = { email: "admin@admin.com" };

      await adminLogin(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: "Password is required",
      });
    });

    it("should return 401 if email or password is incorrect", async () => {
      req.body = { email: "wrong@admin.com", password: "wrongpass" };
      process.env.ADMIN_EMAIL = "admin@admin.com";
      process.env.ADMIN_PASSWORD = "admin123";

      await adminLogin(req, res);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({
        message: "Invalid admin credentials",
      });
    });

    it("should return a token if credentials are correct", async () => {
      req.body = { email: "admin@admin.com", password: "admin123" };
      process.env.ADMIN_EMAIL = "admin@admin.com";
      process.env.ADMIN_PASSWORD = "admin123";
      process.env.JWT_SECRET = "secretkey";
      jwt.sign.mockReturnValue("mockedToken");

      await adminLogin(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: "Admin login successful",
        token: "mockedToken",
      });
    });
  });

  describe("verifyNGO", () => {
    it("should update NGO verification status to 'rejected' and send notification", async () => {
      req.body = { ngoId: "5f2b6e6b8a8d6e1a5c5b9e6b", status: "rejected" };
      const ngo = { name: "Test NGO", email: "ngo@example.com" };
      NGO.findByIdAndUpdate.mockResolvedValue(ngo);
      sendNotification.mockResolvedValue();

      await verifyNGO(req, res);

      expect(NGO.findByIdAndUpdate).toHaveBeenCalledWith(
        "5f2b6e6b8a8d6e1a5c5b9e6b",
        { verificationStatus: "rejected" },
        { new: true }
      );
      expect(sendNotification).toHaveBeenCalledWith(
        ngo.email,
        "NGO Verification Rejected",
        expect.stringContaining("Your NGO verification status has been updated to: rejected.")
      );
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: "Verification status updated and notification sent",
        ngo,
      });
    });

    it("should return 400 if NGO ID is not provided", async () => {
      req.body = { status: "verified" };

      await verifyNGO(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: "NGO ID is required",
      });
    });

    it("should return 400 if status is not provided", async () => {
      req.body = { ngoId: "5f2b6e6b8a8d6e1a5c5b9e6b" };

      await verifyNGO(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: "Verification status is required",
      });
    });

    it("should return 400 if status is invalid", async () => {
      req.body = { ngoId: "5f2b6e6b8a8d6e1a5c5b9e6b", status: "invalid_status" };

      await verifyNGO(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: "Invalid verification status",
      });
    });

    it("should return 404 if NGO is not found", async () => {
      req.body = { ngoId: "5f2b6e6b8a8d6e1a5c5b9e6b", status: "verified" };
      NGO.findByIdAndUpdate.mockResolvedValue(null);

      await verifyNGO(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: "NGO not found" });
    });

    it("should return 500 if notification sending fails", async () => {
      req.body = { ngoId: "5f2b6e6b8a8d6e1a5c5b9e6b", status: "verified" };
      const ngo = { name: "Test NGO", email: "ngo@example.com" };
      NGO.findByIdAndUpdate.mockResolvedValue(ngo);
      sendNotification.mockRejectedValue(new Error("Notification error"));

      await verifyNGO(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        message: "Error verifying NGO",
        error: "Notification error",
      });
    });
  });
});

