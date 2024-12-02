jest.setTimeout(50000); // Increase the timeout to 10 seconds for all tests
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const NGO = require("../NGO"); // Update path if necessary

describe("NGO Model Tests", () => {
  // Test case to ensure required fields validation
  it("should throw an error if required fields are missing", async () => {
    const ngo = new NGO();
    let error;
    try {
      await ngo.save();
    } catch (e) {
      error = e;
    }
    expect(error).toBeTruthy();
    expect(error.errors.name).toBeTruthy();
    expect(error.errors.location).toBeTruthy();
    expect(error.errors.causeArea).toBeTruthy();
    expect(error.errors.vision).toBeTruthy();
    expect(error.errors.mission).toBeTruthy();
    expect(error.errors.contactPerson).toBeTruthy();
    expect(error.errors.mobileNumber).toBeTruthy();
    expect(error.errors.email).toBeTruthy();
    expect(error.errors.address).toBeTruthy();
    expect(error.errors.password).toBeTruthy();
  });

  // Test case to check if email is in valid format
  it("should throw an error if the email format is invalid", async () => {
    const ngo = new NGO({
      name: "Test NGO",
      location: "Test Location",
      causeArea: "Test Cause",
      vision: "Test Vision",
      mission: "Test Mission",
      contactPerson: "John Doe",
      mobileNumber: "1234567890",
      email: "invalidemail",
      address: "123 Test St",
      password: "password123",
    });
    let error;
    try {
      await ngo.save();
    } catch (e) {
      error = e;
    }
    expect(error).toBeTruthy();
    expect(error.errors.email).toBeTruthy();
  });

  // Test case to check if the mobile number is valid
  it("should throw an error if mobile number is invalid", async () => {
    const ngo = new NGO({
      name: "Test NGO",
      location: "Test Location",
      causeArea: "Test Cause",
      vision: "Test Vision",
      mission: "Test Mission",
      contactPerson: "John Doe",
      mobileNumber: "12345", // Invalid mobile number
      email: "ngo@example.com",
      address: "123 Test St",
      password: "password123",
    });
    let error;
    try {
      await ngo.save();
    } catch (e) {
      error = e;
    }
    expect(error).toBeTruthy();
    expect(error.errors.mobileNumber).toBeTruthy();
  });

  // Test case to check the password hashing middleware
  it("should hash the password before saving", async () => {
    const ngo = new NGO({
      name: "Test NGO",
      location: "Test Location",
      causeArea: "Test Cause",
      vision: "Test Vision",
      mission: "Test Mission",
      contactPerson: "John Doe",
      mobileNumber: "1234567890",
      email: "ngo@example.com",
      address: "123 Test St",
      password: "password123", // Plain text password
    });

    const savedNgo = await ngo.save();
    expect(savedNgo.password).not.toBe("password123"); // The password should be hashed

    // Check if the password is correctly hashed
    const isPasswordValid = await bcrypt.compare("password123", savedNgo.password);
    expect(isPasswordValid).toBe(true);
  });

  // Test case to check role validation
  it("should throw an error if an invalid role is provided", async () => {
    const ngo = new NGO({
      name: "Test NGO",
      location: "Test Location",
      causeArea: "Test Cause",
      vision: "Test Vision",
      mission: "Test Mission",
      contactPerson: "John Doe",
      mobileNumber: "1234567890",
      email: "ngo@example.com",
      address: "123 Test St",
      password: "password123",
      role: "invalidRole", // Invalid role
    });
    let error;
    try {
      await ngo.save();
    } catch (e) {
      error = e;
    }
    expect(error).toBeTruthy();
    expect(error.errors.role).toBeTruthy();
  });

  // Test case to check verification status validation
  it("should throw an error if an invalid verification status is provided", async () => {
    const ngo = new NGO({
      name: "Test NGO",
      location: "Test Location",
      causeArea: "Test Cause",
      vision: "Test Vision",
      mission: "Test Mission",
      contactPerson: "John Doe",
      mobileNumber: "1234567890",
      email: "ngo@example.com",
      address: "123 Test St",
      password: "password123",
      verificationStatus: "invalidStatus", // Invalid status
    });
    let error;
    try {
      await ngo.save();
    } catch (e) {
      error = e;
    }
    expect(error).toBeTruthy();
    expect(error.errors.verificationStatus).toBeTruthy();
  });

  // Test case to check if the model is saved correctly
  it("should save the NGO with valid data", async () => {
    const ngo = new NGO({
      name: "Test NGO",
      location: "Test Location",
      causeArea: "Test Cause",
      vision: "Test Vision",
      mission: "Test Mission",
      contactPerson: "John Doe",
      mobileNumber: "1234567890",
      email: "ngo@example.com",
      address: "123 Test St",
      password: "password123",
      role: "ngo",
      verificationStatus: "pending",
    });

    const savedNgo = await ngo.save();
    expect(savedNgo.name).toBe("Test NGO");
    expect(savedNgo.email).toBe("ngo@example.com");
    expect(savedNgo.role).toBe("ngo");
    expect(savedNgo.verificationStatus).toBe("pending");
  });

  // Test case for comparing passwords
  it("should correctly compare the password with the stored hashed password", async () => {
    const ngo = new NGO({
      name: "Test NGO",
      location: "Test Location",
      causeArea: "Test Cause",
      vision: "Test Vision",
      mission: "Test Mission",
      contactPerson: "John Doe",
      mobileNumber: "1234567890",
      email: "ngo@example.com",
      address: "123 Test St",
      password: "password123",
    });

    const savedNgo = await ngo.save();
    const isPasswordValid = await savedNgo.comparePassword("password123");
    expect(isPasswordValid).toBe(true); // The password should match
  });

  // Test case for the pre-save hook (hashing password)
  it("should call the pre-save hook and hash the password correctly", async () => {
    const ngo = new NGO({
      name: "Test NGO",
      location: "Test Location",
      causeArea: "Test Cause",
      vision: "Test Vision",
      mission: "Test Mission",
      contactPerson: "John Doe",
      mobileNumber: "1234567890",
      email: "ngo@example.com",
      address: "123 Test St",
      password: "password123", // Plain password
    });

    const savedNgo = await ngo.save();
    expect(savedNgo.password).not.toBe("password123"); // Password should be hashed
    const isPasswordValid = await bcrypt.compare("password123", savedNgo.password);
    expect(isPasswordValid).toBe(true);
  });
});
