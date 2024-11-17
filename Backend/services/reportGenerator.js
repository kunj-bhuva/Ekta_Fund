const PDFDocument = require("pdfkit");
const Donation = require("../models/Donation");
const Ngo = require("../models/NGO"); 

exports.generateDonationReport = async (ngoName) => {

  try {
    // Fetch NGO details based on NGO name
    const ngo = await Ngo.findOne({ name: ngoName });  // Assuming the NGO name is stored as 'name'
    
    if (!ngo) {
      throw new Error("NGO not found");
    }

    const ngoId = ngo._id; // Get the NGO's MongoDB ID

    // Fetch donation transactions for the NGO
    const transactions = await Donation.find({ ngoName });
    
    return new Promise((resolve, reject) => {
      const doc = new PDFDocument();
      let buffers = [];

      // Collect the generated PDF chunks
      doc.on("data", buffers.push.bind(buffers));
      doc.on("end", () => {
        const pdfData = Buffer.concat(buffers);
        resolve(pdfData); // Resolve with the complete PDF data
      });

      doc.on("error", (err) => {
        reject(err); // Reject if there's an error
      });

      // Add Title and Date
      doc
      .fontSize(16)
      .font("Helvetica-Bold")
      .text("NGO Details", { underline: true });
    doc
      .fontSize(12)
      .font("Helvetica")
      .text(`NGO ID: ${ngoId}`, { continued: true })
      .text(`\nNGO Name: ${ngoName}`, { indent: 20 });
    doc.moveDown(2);
    
    // Add Table Header
    doc
      .fontSize(14)
      .font("Helvetica-Bold")
      .text("Transaction Details", { underline: true });
    doc.moveDown(1);
    
    // Header Row for table
    doc
      .fontSize(12)
      .font("Helvetica-Bold")
      .text("Transaction ID", 50, doc.y)
      .moveUp()
      .text("Amount", 150, doc.y, { align: "center" })
      .moveUp()
      .text("Status", 270, doc.y, { align: "center" })
      .moveUp()
      .text("Date", 400, doc.y, { align: "center" });
    doc.moveDown(0.5);
    
    // Add Border Line
    doc.lineWidth(0.5).moveTo(50, doc.y).lineTo(500, doc.y).stroke();
    doc.moveDown(0.5);
    
    // Add each transaction in a structured way
    transactions.forEach((transaction) => {
      const formattedDate = transaction.createdAt
        ? new Date(transaction.createdAt).toLocaleDateString()
        : "N/A"; // Use "N/A" or a default message if the date is invalid or undefined
    
      doc
        .fontSize(12)
        .font("Helvetica")
        .text(transaction._id, 50, doc.y)
        .moveUp()
        .text(transaction.amount.toFixed(2), 150, doc.y, { align: "center" })
        .moveUp()
        .text(transaction.status, 270, doc.y, { align: "center" })
        .moveUp()
        .text(formattedDate, 400, doc.y, { align: "center" });
    
      doc.moveDown(1);
    });      // Finalize the PDF file
      doc.end();
    });

  } catch (error) {
    console.error("Error generating donation report:", error);
    throw error;  // Propagate error
  }
};
