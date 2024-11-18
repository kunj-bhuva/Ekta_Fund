const express = require('express');
const router = express.Router();
const { registerDonor, loginDonor, getFilteredNGOs, deleteDonor } = require('../controllers/donorController');


router.post('/register', registerDonor);
router.post('/login', loginDonor);
router.post('/location', getFilteredNGOs);  
router.delete('/:id', deleteDonor);

module.exports = router;
