// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const path = require("path");

// Import database connection
const connectDB = require("./db/connectDB"); 

// Import routes
const reviewRoutes = require("./routes/reviewRoutes");
const responseRoutes = require("./routes/responseRoutes");
const adminRoutes = require("./routes/adminRoutes");
const donationRoutes = require("./routes/donationRoutes");
const billingRoutes = require("./routes/billingRoutes");
const donorRoutes = require("./routes/donorRoutes");
const ngoRoutes = require("./routes/ngoRoutes");

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
app.use(express.static(path.join(__dirname, "public"))); // Serve static files from "public" folder

// Routes
app.use("/api/reviews", reviewRoutes); // Prefix '/api/reviews' for review routes
app.use("/api/responses", responseRoutes); // Prefix '/api/responses' for response routes
app.use("/api/admin", adminRoutes); // Common admin routes
app.use("/api/donations", donationRoutes); // Donation routes
app.use("/api/billing", billingRoutes); // Billing routes
app.use("/api/donors", donorRoutes); // Donor routes
app.use("/api/ngos", ngoRoutes); // NGO routes

// Start the server
const PORT = process.env.PORT || 5000; // Default to port 5000 if not specified
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
