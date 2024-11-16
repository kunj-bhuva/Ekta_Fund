const express = require("express");
const router = express.Router();
const { registerNGO, loginNGO, updateNGOProfile, viewPendingRequests } = require("../controllers/ngoController");
const upload = require("../fileUpload");

// Register a new NGO with file upload
router.post(
  "/register",
  upload.fields([
    { name: "updated12A", maxCount: 1 },
    { name: "updated80G", maxCount: 1 },
  ]),
  registerNGO
);

// Login route
router.post("/login", loginNGO);

// Update NGO profile with file upload
router.put(
  "/profile",
  upload.fields([
    { name: "updated12A", maxCount: 1 },
    { name: "updated80G", maxCount: 1 },
  ]),
  updateNGOProfile
);



module.exports = router;
