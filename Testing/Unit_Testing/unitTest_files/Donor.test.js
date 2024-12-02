const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Donor = require("../Donor"); // Adjust the path to your model
const { MongoMemoryServer } = require("mongodb-memory-server");

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("Donor Model", () => {
  // Generate a unique email for each test
  const generateUniqueEmail = () => `test-${Date.now()}@example.com`;

  it("should be valid with valid fields", async () => {
    const donor = new Donor({
      name: "John Doe",
      email: generateUniqueEmail(),
      password: "password123",
      contactNumber: "1234567890",
    });

    await expect(donor.validate()).resolves.toBeUndefined(); // Should pass validation
  });

  it("should throw validation error if name is missing", async () => {
    const donor = new Donor({
      email: generateUniqueEmail(),
      password: "password123",
      contactNumber: "1234567890",
    });

    await expect(donor.validate()).rejects.toThrow("name: Path `name` is required.");
  });

  it("should throw validation error if email is missing or invalid", async () => {
    const donor = new Donor({
      name: "John Doe",
      password: "password123",
      contactNumber: "1234567890",
    });

    await expect(donor.validate()).rejects.toThrow("Please provide email");

    donor.email = "invalid-email";
    await expect(donor.validate()).rejects.toThrow("Please provide a valid email");
  });

  it("should throw validation error if password is missing", async () => {
    const donor = new Donor({
      name: "John Doe",
      email: generateUniqueEmail(),
      contactNumber: "1234567890",
    });

    await expect(donor.validate()).rejects.toThrow("password: Path `password` is required.");
  });

  it("should throw validation error if contactNumber is invalid", async () => {
    const donor = new Donor({
      name: "John Doe",
      email: generateUniqueEmail(),
      password: "password123",
      contactNumber: "invalid-number",
    });

    await expect(donor.validate()).rejects.toThrow("Please provide a valid 10-digit mobile number");
  });

  it("should throw validation error if contactNumber is missing", async () => {
    const donor = new Donor({
      name: "John Doe",
      email: generateUniqueEmail(),
      password: "password123",
    });

    await expect(donor.validate()).rejects.toThrow("Please provide mobile number");
  });

  it("should set the default role to 'user' if role is not provided", async () => {
    const donor = new Donor({
      name: "John Doe",
      email: generateUniqueEmail(),
      password: "password123",
      contactNumber: "1234567890",
    });

    await donor.save();
    expect(donor.role).toBe("user");
  });

  it("should hash the password before saving", async () => {
    const email = generateUniqueEmail();
    const donor = new Donor({
      name: "John Doe",
      email: email,
      password: "password123",
      contactNumber: "1234567890",
    });

    await donor.save();
    const savedDonor = await Donor.findOne({ email });

    const isPasswordValid = await bcrypt.compare("password123", savedDonor.password);
    expect(isPasswordValid).toBe(true); // Password should be hashed
  });

  it("should not hash the password if it's not modified", async () => {
    const email = generateUniqueEmail();
    const donor = new Donor({
      name: "John Doe",
      email: email,
      password: "password123",
      contactNumber: "1234567890",
    });

    const savedDonor = await donor.save();
    const initialPasswordHash = savedDonor.password;

    // Update a field other than the password
    savedDonor.name = "Jane Doe";
    await savedDonor.save();

    const updatedDonor = await Donor.findOne({ email });
    expect(updatedDonor.password).toBe(initialPasswordHash); // Password should not change
  });
});
