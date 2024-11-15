const NGO = require("../models/NGO");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



// Register a new NGO with file upload for updated12A and updated80G
exports.registerNGO = async (req, res) => {
  try {
    const { name, location, cause, causeArea, contactPerson, mobileNumber, email, address, password , vision , mission} = req.body;

    // Ensure both files are uploaded
    if (!req.files || !req.files.updated12A || !req.files.updated80G) {
      return res.status(400).json({ message: "Both updated12A and updated80G files are required" });
    }

    // Check if NGO already exists
    const existingNGO = await NGO.findOne({ email });
    if (existingNGO) {
      return res.status(400).json({ message: "NGO already registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the new NGO
    const ngo = new NGO({
      name,
      location,
      vision,
      mission,
      cause,
      causeArea,
      contactPerson,
      mobileNumber,
      email,
      address,
      password: hashedPassword,
      updated12A: req.files.updated12A[0].path,
      updated80G: req.files.updated80G[0].path,
    });

    await ngo.save();
    res.status(201).json({ message: "NGO registered successfully", ngo });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

// Authenticate NGO and generate token
exports.loginNGO = async (req, res) => {
  try {
    const { email, password } = req.body;
    const ngo = await NGO.findOne({ email });
    if (!ngo)
      return res.status(400).json({ message: "Invalid email or password" });

    // Check password
    const isMatch = await bcrypt.compare(password, ngo.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password" });

    // Generate JWT
    const token = jwt.sign(
      { id: ngo._id, role: ngo.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Update NGO profile
exports.updateNGOProfile = async (req, res) => {
  try {
    const { ngoId } = req.params;
    const updateData = req.body;

    const ngo = await NGO.findByIdAndUpdate(ngoId, updateData, { new: true });

    if (!ngo) {
      return res.status(404).json({ message: "NGO not found" });
    }

    res.status(200).json({ message: "NGO profile updated", ngo });
  } catch (error) {
    res.status(500).json({ message: "Error updating NGO profile", error });
  }
};

exports.viewPendingRequests = async (req, res) => {
  try {
    // Fetch all NGOs where verificationStatus is 'pending'
    const pendingNGOs = await NGO.find({ verificationStatus: 'pending' });
    
    if (pendingNGOs.length === 0) {
      return res.status(404).json({ message: 'No pending verification requests found' });
    }
    
    res.status(200).json({ pendingNGOs });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};