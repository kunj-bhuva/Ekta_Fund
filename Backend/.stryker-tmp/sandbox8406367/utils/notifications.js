// @ts-nocheck
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendNotification = async (email, subject, message) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: subject,
      text: message,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log(`Notification sent to ${email}: ${subject}`);
  } catch (error) {
    console.error(`Failed to send notification to ${email}: ${error}`);
  }
};

module.exports = { sendNotification };
