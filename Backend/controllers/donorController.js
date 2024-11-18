const Donor = require("../models/Donor");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const NGO = require("../models/NGO");

// Register a new donor
exports.registerDonor = async (req, res) => {
  try {
    const { name, email, password, contactNumber } = req.body;

    // Check if donor already exists
    let donor = await Donor.findOne({ email });
    if (donor)
      return res.status(400).json({ message: "Donor already registered" });

    // Create and save new donor

    donor = new Donor({ name, email, password, contactNumber });
    await donor.save();

    res.status(201).json({ message: "Donor registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Authenticate donor and generate token
exports.loginDonor = async (req, res) => {
  try {
    const { email, password } = req.body;

    const donor = await Donor.findOne({ email });
    console.log(donor);
    if (!donor) return res.status(400).json({ message: "Invalid email " });

    const isMatch = await bcrypt.compare(password, donor.password);

    if (!isMatch) return res.status(400).json({ message: "Invalid  password" });

    const token = jwt.sign(
      { id: donor._id, role: donor.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getFilteredNGOs = async (req, res) => {
  try {
    const { location } = req.body;

    let filterCriteria = {};
    if (location) filterCriteria.location = location;

    const ngos = await NGO.find(filterCriteria);

    res
      .status(200)
      .json({ ngos, message: "Filtered NGO list retrieved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving NGOs", error });
  }
};

exports.deleteDonor = async (req, res) => {
  try {
    await Donor.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
