const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Ensure 'uploads' directory exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure Multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir); // Save files in 'uploads' directory
    },
    filename: (req, file, cb) => {
        const ngoName = req.body.name || "unknown"; // Use NGO name or 'unknown'
        const timestamp = Date.now(); // Ensure unique filenames
        const ext = path.extname(file.originalname); // Preserve file extension
        cb(null, `${ngoName}_${timestamp}${ext}`);
    },
});

const upload = multer({ storage });
module.exports = upload;
