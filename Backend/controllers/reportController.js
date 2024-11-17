const { generatePDF, generateCSV, cleanupCSV } = require('../reports/reportGenerator');
const User = require('../models/NGO'); // Import the User model or your data source
const User1 = require('../models/Donor'); // Import the User model or your data source
const fs = require('fs');
const path = require('path');