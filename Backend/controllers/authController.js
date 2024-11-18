const NGO = require("../models/NGO");
const Donor = require("../models/Donor");
const bcrypt = require("bcrypt");

// Controller for resetting the password
exports.resetPassword = async (req, res) => {
  try {
    const { email, oldPassword, newPassword } = req.body;

    // Check if the email exists in the NGO or Donor collection
    let user = await NGO.findOne({ email });
    let userType = "NGO";
    if (!user) {
      user = await Donor.findOne({ email });
      userType = "Donor";
    }

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Verify old password
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Old password is incorrect" });
    }

    // Update the password
    user.password = newPassword;
    await user.save();

    res
      .status(200)
      .json({ message: `${userType} password updated successfully` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error resetting password", error });
  }
};
