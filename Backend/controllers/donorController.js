const Donor = require("../models/Donor");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const NGO = require("../models/NGO");

exports.registerDonor = async (req, res) => {
  try {
    const { name, email, password, contactNumber } = req.body;

    // Strong password validation
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    if (!passwordPattern.test(password)) {
      return res.status(400).json({
        message:
          "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.",
      });
    }

    // Check if donor already exists
    let donor = await Donor.findOne({ email });
    if (donor) {
      console.log("Donor already exists:", email);
      return res.status(400).json({ message: "Donor already registered" });
    }

 

    // Create new donor
    donor = new Donor({ name, email, password, contactNumber });

    await donor.save();

    res.status(201).json({ message: "Donor registered successfully" });
  } catch (error) {
    console.error("Error occurred while registering donor:", error);
    res.status(500).json({ error: "Server error" });
  }
};

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
    const id = req.body;
    await Donor.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
