// routes/billingRoutes.js
const express = require("express");
const router = express.Router();
const billingController = require("../controllers/billingController");

router.post("/generate", billingController.generateBill);
router.get("/:ngoId", billingController.downloadDonationReport);

module.exports = router;
