// @ts-nocheck
const NGO = require("../models/NGO");
const { sendNotification } = require("../utils/notifications");
const jwt = require("jsonwebtoken");
const Review = require("../models/Review");

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

exports.verifyNGO = async (req, res) => {
  try {
    const { ngoName, status } = req.body;

    if (!ngoName || !status) {
      return res.status(400).json({
        message: "ngoName and status are required fields.",
      });
    }

    const ngo = await NGO.findOneAndUpdate(
      { name: ngoName },
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

    if (ngo.email) {
      await sendNotification(ngo.email, subject, message);
    } else {
    }

    res.status(200).json({
      message: "Verification status updated and notification sent",
      ngo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error verifying NGO",
      error: error.message || error,
    });
  }
};

exports.createReviewAndNotifyNGO = async (req, res) => {
  try {
    const review = new Review(req.body);

    await review.save();

    const ngo = await NGO.findOne({ name: review.ngoName });
    if (!ngo) {
      return res
        .status(404)
        .json({ message: "Associated NGO not found for this review." });
    }

    if (ngo.email) {
      console.log(`Sending notification email to: ${ngo.email}`);
      await sendNotification(
        ngo.email,
        "New Review Submitted for Your NGO",
        `Hello ${ngo.contactPerson},\n\nA new review has been submitted that mentions your NGO. Please review it and provide any necessary feedback.\n\nThank you!`
      );
      console.log(`Notification sent to NGO: ${ngo.name}, email: ${ngo.email}`);
      return res.json({
        message: `Review created and notification sent to ${ngo.name} at ${ngo.email}`,
      });
    } else {
      console.warn(
        `NGO found (${ngo.name}), but no email address is available.`
      );
      return res
        .status(404)
        .json({ message: "No email address available for the NGO." });
    }
  } catch (error) {
    console.error(
      "Error occurred while creating review and notifying NGO:",
      error
    );
    res
      .status(500)
      .json({ message: "Error creating review and notifying NGO", error });
  }
};
