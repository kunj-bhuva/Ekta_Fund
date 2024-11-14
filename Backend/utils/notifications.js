const nodemailer = require('nodemailer');

// Create a reusable transporter object
const transporter = nodemailer.createTransport({
  service: 'Gmail', // or any other email service provider
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app-specific password
  },
});

// Function to send an email notification
const sendNotification = async (email, subject, message) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,       // Sender email address
      to: email,                          // Recipient email address
      subject: subject,                   // Subject of the email
      text: message,                      // Plain text body
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log(`Notification sent to ${email}: ${subject}`);
  } catch (error) {
    console.error(`Failed to send notification to ${email}: ${error}`);
  }
};

module.exports = { sendNotification };
