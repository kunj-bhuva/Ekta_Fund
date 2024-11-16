import React from "react";
import "./ngosearchresults.css";
import Footer from "./Footer";

const dummyData = [
  {
    organization: "Bright Future Foundation",
    location: "Bengaluru, Karnataka",
    description: "Runs programs empowering youth with education and career skills to achieve a sustainable livelihood.",
    certification: "Gold Certified 2023",
    compliance: ["FCRA", "80G", "12A", "CSR-1"],
    transparencyRating: 5,
    revenue: "₹56,23,12,000",
    expenses: "₹52,14,78,000",
    financialYear: "FY 22-23",
  },
  {
    organization: "Global Learning Initiative",
    location: "Chennai, Tamil Nadu",
    description: "Focuses on providing scholarships to underprivileged students for higher education worldwide.",
    certification: "Silver Certified 2023",
    compliance: ["FCRA", "80G", "12A"],
    transparencyRating: 4.5,
    revenue: "₹88,67,34,000",
    expenses: "₹85,45,67,000",
    financialYear: "FY 21-22",
  },
  {
    organization: "Child Empowerment Society",
    location: "Delhi, India",
    description: "Promotes the welfare of children through education, healthcare, and social protection programs.",
    certification: "Gold Certified 2023",
    compliance: ["FCRA", "80G", "12A", "CSR-1"],
    transparencyRating: 4.8,
    revenue: "₹42,13,78,000",
    expenses: "₹40,05,89,000",
    financialYear: "FY 22-23",
  },
];

export default function NgosearchResults() {
  return (
    <div className="ngosearch-results-container">
      {dummyData.map((org, index) => (
        <div key={index} className="ngosearch-card">
          <div className="ngosearch-header">
            <h3 className="ngosearch-title">{org.organization}</h3>
            <p className="ngosearch-location">{org.location}</p>
          </div>
          <p className="ngosearch-description">{org.description}</p>
          
          <div className="ngosearch-financials">
            <p>
              <strong>{org.financialYear}</strong>
            </p>
            <p>
              <strong>Total Revenue:</strong> {org.revenue}
            </p>
            <p>
              <strong>Total Expenses:</strong> {org.expenses}
            </p>
          </div>
          <div className="ngosearch-details">
            <div className="ngosearch-certification">
              <span className={`badge ${org.certification.includes("Gold") ? "gold-badge" : "silver-badge"}`}>
                {org.certification}
              </span>
            </div>
            <div className="ngosearch-compliance">
              {org.compliance.map((item, i) => (
                <span key={i} className="compliance-badge">
                  {item}
                </span>
              ))}
            </div>
            <div className="ngosearch-rating">
              <strong>Transparency Rating: </strong>
              {"⭐".repeat(Math.round(org.transparencyRating))}
            </div>
          </div>
        </div>
      ))}

      
    </div>
  );
}
