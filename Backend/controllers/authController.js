const NGO = require("../models/NGO");
const Donor = require("../models/Donor");
const bcrypt = require("bcrypt");

exports.resetPassword = async (req, res) => {
  try {
    const { email, oldPassword, newPassword } = req.body;

    // Strong password regex pattern
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

    // Validate new password strength
    if (!passwordPattern.test(newPassword)) {
      return res.status(400).json({
        message:
          "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.",
      });
    }

    // Find user by email (NGO or Donor)
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

    user.password = newPassword;
    await user.save();

    res
      .status(200)
      .json({ message: `${userType} password updated successfully` });
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).json({ message: "Error resetting password", error });
  }
};
