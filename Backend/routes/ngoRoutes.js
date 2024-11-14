const express = require("express");
const router = express.Router();
const { registerNGO, loginNGO } = require("../controllers/ngoController");
const { updateNGOProfile } = require("../controllers/ngoController");
const { viewPendingRequests } = require("../controllers/ngoController");

// Register route
router.post("/register", registerNGO);

// Login route
router.post("/login", loginNGO);

// Update NGO profile
router.put("/profile/:ngoId", updateNGOProfile);

// Route to view pending verification requests
router.get("/pending-verifications", viewPendingRequests);

module.exports = router;
