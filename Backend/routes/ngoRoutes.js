const express = require("express");
const router = express.Router();
const {
  registerNGO,
  loginNGO,
  updateNGOProfile,
  viewPendingRequests,
  getngobyemail
} = require("../controllers/ngoController");
const upload = require("../fileUpload");

router.post(
  "/register",
  upload.fields([
    { name: "updated12A", maxCount: 1 },
    { name: "updated80G", maxCount: 1 },
  ]),
  registerNGO
);

router.post("/login", loginNGO);

router.put(
  "/profile",
  upload.fields([
    { name: "updated12A", maxCount: 1 },
    { name: "updated80G", maxCount: 1 },
  ]),
  updateNGOProfile
);

router.post('/getdetails', getngobyemail);

module.exports = router;
