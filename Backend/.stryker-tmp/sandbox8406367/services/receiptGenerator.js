// @ts-nocheck
const PDFDocument = require("pdfkit");

exports.generateReceipt = async (donation, res) => {
  const doc = new PDFDocument({
    size: "A4",
    margin: 50,
  });

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    `attachment; filename=Donation_Receipt_${donation.transactionId}.pdf`
  );

  doc.pipe(res);

  doc
    .fontSize(24)
    .font("Helvetica-Bold")
    .text("Donation Receipt", { align: "center" });
  doc.moveDown(1);

  doc
    .fontSize(14)
    .font("Helvetica")
    .text(`Receipt ID: ${donation.transactionId}`, { align: "left" });
  doc.text(`Date: ${new Date().toLocaleString()}`, { align: "left" });
  doc.text(`Amount: ₹${donation.amount}`, { align: "left" });
  doc.text(`Donor ID: ${donation.donorId}`, { align: "left" });
  doc.text(`Transaction ID: ${donation.transactionId}`, { align: "left" });
  doc.moveDown(1);

  doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke();
  doc.moveDown(1);

  doc
    .fontSize(16)
    .font("Helvetica-Bold")
    .text("Thank you for your generous donation!", { align: "center" });
  doc.moveDown(1);

  doc.text("For more information, visit our website or contact us.", {
    align: "left",
  });

  doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke();
  doc.moveDown(2); // Add space for footer
  doc
    .fontSize(10)
    .font("Helvetica")
    .text(
      "This receipt is issued for tax purposes and confirms your donation.",
      {
        align: "center",
      }
    );

  doc.end();
};
