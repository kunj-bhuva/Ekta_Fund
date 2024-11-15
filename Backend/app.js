const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors"); // Import CORS middleware
const connectDB = require("./db/connectDB");
const donorRoutes = require("./routes/donorRoutes");
const ngoRoutes = require("./routes/ngoRoutes");
const adminRoutes = require("./routes/adminRoutes");  


dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Enable CORS to allow requests from the frontend (port 3001)
app.use(cors({
  origin: "http://localhost:3000", // frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// const cors = require("cors");
// app.use(cors({ origin: "http://localhost:3001" })); // Allow frontend requests


// API routes
app.use("/api/donors", donorRoutes);
app.use("/api/ngos", ngoRoutes);
app.use("/api/admin", adminRoutes);

// Catch-all route to serve the front-end index.html for any other request

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
