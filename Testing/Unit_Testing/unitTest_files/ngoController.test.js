const { registerNGO, loginNGO, updateNGOProfile, viewPendingRequests } = require("../ngoController");
const NGO = require("../../models/NGO");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

jest.mock("../../models/NGO");
jest.mock("bcrypt");
jest.mock("jsonwebtoken");

describe("NGO Controller Tests", () => {
  let res;
  let req;

  beforeEach(() => {
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    req = {
      body: {},
      files: {},
    };
    jest.clearAllMocks();
  });

  describe("registerNGO", () => {
    it("should register a new NGO if details are valid", async () => {
      req.body = {
        name: "Test NGO",
        location: "Test Location",
        causeArea: "Education",
        contactPerson: "John Doe",
        mobileNumber: "1234567890",
        email: "test@ngo.com",
        password: "password123",
        vision: "Vision Statement",
        mission: "Mission Statement",
      };

      NGO.findOne.mockResolvedValue(null); // No existing NGO
      NGO.prototype.save.mockResolvedValue(req.body); // Simulate successful save

      await registerNGO(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        message: "NGO registered successfully",
        ngo: req.body,
      });
    });

    it("should return 400 if NGO already exists", async () => {
      req.body = { email: "test@ngo.com" };
      NGO.findOne.mockResolvedValue({}); // Simulate existing NGO

      await registerNGO(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: "NGO already registered",
      });
    });

    it("should handle server errors", async () => {
      req.body = { name: "Test NGO" };
      NGO.findOne.mockRejectedValue(new Error("DB Error"));

      await registerNGO(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error: "Server error",
        details: "DB Error",
      });
    });
  });

  describe("loginNGO", () => {
    it("should log in and return a token if credentials are correct", async () => {
      req.body = { email: "test@ngo.com", password: "password123" };

      const ngo = { email: "test@ngo.com", password: "hashedpassword123" };
      NGO.findOne.mockResolvedValue(ngo);
      bcrypt.compare.mockResolvedValue(true);
      jwt.sign.mockReturnValue("mockedToken");

      await loginNGO(req, res);

      expect(jwt.sign).toHaveBeenCalledWith(
        { id: ngo._id, role: ngo.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ token: "mockedToken" });
    });

    it("should return 400 if email or password is missing", async () => {
      req.body = { email: "test@ngo.com" }; // Missing password
      await loginNGO(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: "Email and password are required",
      });
    });

    it("should return 400 if password is invalid", async () => {
      req.body = { email: "test@ngo.com", password: "wrongpassword" };
      const ngo = { email: "test@ngo.com", password: "hashedpassword123" };
      NGO.findOne.mockResolvedValue(ngo);
      bcrypt.compare.mockResolvedValue(false);

      await loginNGO(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: "Invalid  password",
      });
    });

    it("should return 400 if NGO is not found", async () => {
      req.body = { email: "unknown@ngo.com", password: "password123" };
      NGO.findOne.mockResolvedValue(null);

      await loginNGO(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: "Invalid email ",
      });
    });

    it("should handle server errors", async () => {
      req.body = { email: "test@ngo.com", password: "password123" };
      NGO.findOne.mockRejectedValue(new Error("DB Error"));

      await loginNGO(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error: "Server error",
        details: "DB Error",
      });
    });
  });

  describe("updateNGOProfile", () => {
    it("should update NGO profile successfully", async () => {
      req.body = {
        email: "test@ngo.com",
        password: "password123",
        name: "Updated NGO",
        location: "New Location",
        causeArea: "Health",
        contactPerson: "Jane Doe",
        mobileNumber: "9876543210",
        address: "New Address",
        vision: "Updated Vision",
        mission: "Updated Mission",
      };

      const ngo = { _id: "1", email: "test@ngo.com", password: "hashedpassword123" };
      NGO.findOne.mockResolvedValue(ngo);
      bcrypt.compare.mockResolvedValue(true);
      NGO.findByIdAndUpdate.mockResolvedValue({ ...ngo, ...req.body });

      await updateNGOProfile(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: "NGO profile updated successfully",
        updatedNGO: { ...ngo, ...req.body },
      });
    });

    it("should return 400 if email or password is missing", async () => {
      req.body = { email: "test@ngo.com" }; // Missing password
      await updateNGOProfile(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: "Password is required to update the NGO profile",
      });
    });

    it("should return 404 if NGO is not found", async () => {
      req.body = { email: "unknown@ngo.com", password: "password123" };
      NGO.findOne.mockResolvedValue(null);

      await updateNGOProfile(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({
        message: "NGO with the specified email not found",
      });
    });

    it("should handle server errors", async () => {
      req.body = { email: "test@ngo.com", password: "password123" };
      NGO.findOne.mockRejectedValue(new Error("DB Error"));

      await updateNGOProfile(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        message: "Error updating NGO profile",
        details: "DB Error",
      });
    });
  });

  describe("viewPendingRequests", () => {
    it("should return a list of pending verification requests", async () => {
      const pendingNGOs = [{ name: "Test NGO", verificationStatus: "pending" }];
      NGO.find.mockResolvedValue(pendingNGOs);

      await viewPendingRequests(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ pendingNGOs });
    });

    it("should return 404 if no pending verification requests are found", async () => {
      NGO.find.mockResolvedValue([]);

      await viewPendingRequests(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({
        message: "No pending verification requests found",
      });
    });

    it("should handle server errors", async () => {
      NGO.find.mockRejectedValue(new Error("DB Error"));

      await viewPendingRequests(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        message: "Server error",
      });
    });
  });
});
