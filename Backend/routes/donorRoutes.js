const express = require('express');
const router = express.Router();
const { registerDonor, loginDonor, getFilteredNGOs } = require('../controllers/donorController');

// Donor registration and login routes
router.post('/register', registerDonor);
router.post('/login', loginDonor);

// Route to get filtered list of NGOs
router.post('/location', getFilteredNGOs);  

// Route to delete a donor by ID
router.delete('/:id', deleteDonor);

module.exports = router;
