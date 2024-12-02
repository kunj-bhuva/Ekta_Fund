// @ts-nocheck
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
const authRoutes = require("./routes/authRoutes");

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// Initialize Express app
const app = express();

// Middleware setup
app.use(express.json());
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(morgan("dev")); 
app.use(express.static(path.join(__dirname, "public"))); 

// Routes
app.use("/api/reviews", reviewRoutes); 
app.use("/api/responses", responseRoutes);
app.use("/api/admin", adminRoutes); 
app.use("/api/donations", donationRoutes); 
app.use("/api/billing", billingRoutes); 
app.use("/api/donors", donorRoutes); 
app.use("/api/ngos", ngoRoutes); 
app.use("/api/forget-password", authRoutes); 

// Start the server
const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
