// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");

// Import database connection
const connectDB = require("./db/connectDB");

// Import routes
const donationRoutes = require("./routes/donationRoutes");
const billingRoutes = require("./routes/billingRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const donorRoutes = require("./routes/donorRoutes");
const ngoRoutes = require("./routes/ngoRoutes");
const adminRoutes = require("./routes/adminRoutes");

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// Initialize Express app
const app = express();

// Middleware setup
app.use(express.json()); // Parse JSON bodies
app.use(bodyParser.json()); // Parse JSON for body-parser compatibility
app.use(cors({ 
  origin: "http://localhost:3000", // Replace with your frontend's URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true 
}));
app.use(morgan("dev")); // Logging
app.use(express.static("public")); // Serve static files from "public" folder

// Routes
app.use("/api/donations", donationRoutes);
app.use("/api/billing", billingRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/donors", donorRoutes);
app.use("/api/ngos", ngoRoutes);
app.use("/api/admin", adminRoutes);

// Start server
const PORT = process.env.PORT || 5000; // Default to port 5000 if not specified
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
