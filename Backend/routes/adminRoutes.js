const express = require('express');
const router = express.Router();
const { adminLogin, verifyNGO , createReviewAndNotifyNGO } = require('../controllers/adminController');
const { viewPendingRequests } = require('../controllers/ngoController.js');


router.get('/pending-verifications',  viewPendingRequests);
router.post('/login', adminLogin);
router.post('/verify-ngo',  verifyNGO); 
router.post("/reviews/create", createReviewAndNotifyNGO);

module.exports = router;
