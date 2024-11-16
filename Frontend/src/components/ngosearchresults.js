import React from 'react';
import './ngosearchresults.css';

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
        <div key={index} className="ngosearch-organization">
          <h3 className="ngosearch-title">{org.organization}</h3>
          <p className="ngosearch-location"><strong>Location:</strong> {org.location}</p>
          <p className="ngosearch-description">{org.description}</p>
          <p className="ngosearch-certification"><strong>Certification:</strong> {org.certification}</p>
          <p className="ngosearch-compliance"><strong>Compliance:</strong> {org.compliance.join(", ")}</p>
          <p className="ngosearch-rating"><strong>Transparency Rating:</strong> {"⭐".repeat(Math.round(org.transparencyRating))}</p>
          <p className="ngosearch-financial-year"><strong>Financial Year:</strong> {org.financialYear}</p>
          <p className="ngosearch-revenue"><strong>Total Revenue:</strong> {org.revenue}</p>
          <p className="ngosearch-expenses"><strong>Total Expenses:</strong> {org.expenses}</p>
        </div>
      ))}
    </div>
  );
}
