// @ts-nocheck
// routes/billingRoutes.js
const express = require("express");
const router = express.Router();
const billingController = require("../controllers/billingController");

router.post("/NGOhistory", billingController.downloadDonationReport);

module.exports = router;
