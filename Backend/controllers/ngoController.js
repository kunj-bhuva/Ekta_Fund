const NGO = require("../models/NGO");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register a new NGO with file upload for updated12A and updated80G
exports.registerNGO = async (req, res) => {
  try {
    const {
      name,
      location,
      causeArea,
      contactPerson,
      mobileNumber,
      email,
      address,
      password,
      vision,
      mission,
    } = req.body;

    // Strong password validation
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    if (!passwordPattern.test(password)) {
      return res.status(400).json({
        message:
          "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.",
      });
    }

    // Check if both files are provided
    if (!req.files || !req.files.updated12A || !req.files.updated80G) {
      return res
        .status(400)
        .json({ message: "Both updated12A and updated80G files are required" });
    }

    // Check if NGO already exists
    const existingNGO = await NGO.findOne({ email });
    if (existingNGO) {
      return res.status(400).json({ message: "NGO already registered" });
    }

    // Create and save the NGO
    const ngo = new NGO({
      name,
      location,
      vision,
      mission,
      causeArea,
      contactPerson,
      mobileNumber,
      email,
      address,
      password,
      updated12A: req.files.updated12A[0].path,
      updated80G: req.files.updated80G[0].path,
    });

    await ngo.save();
    res.status(201).json({ message: "NGO registered successfully", ngo });
  } catch (error) {
    console.error("Error occurred while registering NGO:", error.message);
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

exports.loginNGO = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const ngo = await NGO.findOne({ email });
    if (!ngo) {
      return res.status(400).json({ message: "Invalid email " });
    }

    const isMatch = await bcrypt.compare(password, ngo.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid  password" });
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not configured in environment variables.");
    }

    const token = jwt.sign(
      { id: ngo._id, role: ngo.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ token });
  } catch (error) {
    console.error("Login Error:", error.message);
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

exports.updateNGOProfile = async (req, res) => {
  try {
    const { email, password } = req.body;
    const {
      name,
      location,
      causeArea,
      contactPerson,
      mobileNumber,
      address,
      vision,
      mission,
    } = req.body;

    if (!email) {
      return res
        .status(400)
        .json({ message: "Email is required to identify the NGO" });
    }

    if (!password) {
      return res
        .status(400)
        .json({ message: "Password is required to update the NGO profile" });
    }

    const ngo = await NGO.findOne({ email });

    if (!ngo) {
      return res
        .status(404)
        .json({ message: "NGO with the specified email not found" });
    }


    const updateData = {
      name,
      location,
      causeArea,
      contactPerson,
      mobileNumber,
      address,
      vision,
      mission,
    };

    if (req.files) {
      if (req.files.updated12A) {
        updateData.updated12A = req.files.updated12A[0].path;
      }
      if (req.files.updated80G) {
        updateData.updated80G = req.files.updated80G[0].path;
      }
    }

    const updatedNGO = await NGO.findByIdAndUpdate(ngo._id, updateData, {
      new: true,
    });

    res
      .status(200)
      .json({ message: "NGO profile updated successfully", updatedNGO });
  } catch (error) {
    console.error("Error updating NGO profile:", error.message);
    res
      .status(500)
      .json({ message: "Error updating NGO profile", details: error.message });
  }
};

exports.viewPendingRequests = async (req, res) => {
  try {
    const pendingNGOs = await NGO.find({ verificationStatus: "pending" });

    if (pendingNGOs.length === 0) {
      return res
        .status(404)
        .json({ message: "No pending verification requests found" });
    }

    res.status(200).json({ pendingNGOs });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
