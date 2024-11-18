const NGO = require("../models/NGO");
const { sendNotification } = require("../utils/notifications");
const jwt = require("jsonwebtoken");

// Admin login function
exports.adminLogin = async (req, res) => {
  const { email, password } = req.body;

  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET, {
      expiresIn: "5h",
    });

    res.status(200).json({ message: "Admin login successful", token });
  } else {
    res.status(401).json({ message: "Invalid admin credentials" });
  }
};

// Verify NGO documents
exports.verifyNGO = async (req, res) => {
  try {
    const { ngoId, status } = req.body;
    const ngo = await NGO.findByIdAndUpdate(
      ngoId,
      { verificationStatus: status },
      { new: true }
    );

    if (!ngo) {
      return res.status(404).json({ message: "NGO not found" });
    }

    const subject =
      status === "verified"
        ? "NGO Verification Approved"
        : "NGO Verification Rejected";
    const message = `Dear ${ngo.name},\n\nYour NGO verification status has been updated to: ${status}. 
      \nPlease contact support if you have any questions.\n\nBest Regards,\nYour Organization Team`;

    await sendNotification(ngo.email, subject, message);

    res.status(200).json({
      message: "Verification status updated and notification sent",
      ngo,
    });
  } catch (error) {
    res.status(500).json({ message: "Error verifying NGO", error });
  }
};

// This function will be used to handle new reviews and directly notify the NGO
exports.createReviewAndNotifyNGO = async (req, res) => {
  try {
    const review = new Review(req.body);

    await review.save();

    const ngo = await NGO.findOne({ name: review.ngoName });
    if (!ngo) {
      console.warn("No NGO found with the specified name in the review.");
      return res
        .status(404)
        .json({ message: "Associated NGO not found for this review." });
    }

    if (ngo.email) {
      await sendNotification(
        ngo.email,
        "New Review Submitted for Your NGO",
        `Hello ${ngo.contactPerson},\n\nA new review has been submitted that mentions your NGO. Please review it and provide any necessary feedback.\n\nThank you!`
      );
      res.json({
        message: `Review created and notification sent to ${ngo.name} at ${ngo.email}`,
      });
    } else {
      console.warn("No email address found for the associated NGO.");
      res
        .status(404)
        .json({ message: "No email address available for the NGO." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating review and notifying NGO", error });
  }
};
