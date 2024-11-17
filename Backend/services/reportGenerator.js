const PDFDocument = require("pdfkit");
const Transaction = require("../models/Transaction");

exports.generateDonationReport = async (ngoId) => {
  const transactions = await Transaction.find({ ngoId });

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
      .fontSize(24)
      .font("Helvetica-Bold")
      .text("Donation Report", { align: "center" });
    doc.moveDown();
    doc
      .fontSize(12)
      .font("Helvetica")
      .text(`Date Generated: ${new Date().toLocaleDateString()}`, {
        align: "center",
      });
    doc.moveDown(2);

    // Add NGO Info
    doc
      .fontSize(16)
      .font("Helvetica-Bold")
      .text("NGO Details", { underline: true });
    doc.fontSize(12).font("Helvetica").text(`NGO ID: ${ngoId}`);
    doc.text(`NGO Name: EktaFund`);
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
      .text("Transaction ID", 50, doc.y, { width: 120, align: "left" })
      .text("Amount", 180, doc.y, { width: 80, align: "right" })
      .text("Status", 270, doc.y, { width: 100, align: "left" })
      .text("Date", 380, doc.y, { width: 120, align: "left" });
    doc.moveDown(1);

    // Add Border Line
    doc.lineWidth(0.5).moveTo(50, doc.y).lineTo(500, doc.y).stroke();
    doc.moveDown(0.5);

    // Add each transaction in a structured way
    transactions.forEach((transaction) => {
      doc
        .fontSize(12)
        .font("Helvetica")
        .text(transaction._id, 50, doc.y, { width: 120, align: "left" })
        .text(transaction.amount.toFixed(2), 180, doc.y, {
          width: 80,
          align: "right",
        })
        .text(transaction.status, 270, doc.y, { width: 100, align: "left" })
        .text(
          new Date(transaction.transactionDate).toLocaleDateString(),
          380,
          doc.y,
          { width: 120, align: "left" }
        );

      doc.moveDown(1);
    });

    // Finalize the PDF file
    doc.end();
  });
};
