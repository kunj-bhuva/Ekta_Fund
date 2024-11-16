import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ngosearchresults.css";
import Footer from "./Footer";

export default function NGOsearchResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const ngos = location.state?.ngos || [];

  const handleCardClick = (ngo) => {
    navigate("/ngopage", { state: { ngo } }); // Pass the selected NGO details via state
  };

  return (
    <div className="ngosearch-results-container">
      {ngos.length > 0 ? (
        ngos.map((org, index) => (
          <div
            key={index}
            className="ngosearch-card"
            onClick={() => handleCardClick(org)} // Attach click handler
            style={{ cursor: "pointer" }} // Add pointer cursor for better UX
          >
            <div className="ngosearch-header">
              <h3 className="ngosearch-title">{org.organization}</h3>
              <p className="ngosearch-location">{org.location}</p>
            </div>
            <p className="ngosearch-description">{org.description}</p>
            <div className="ngosearch-financials">
              <p>
                <strong>NGO Name:</strong> {org.name}
              </p>
              <p>
                <strong>NGO location:</strong> {org.location}
              </p>
            </div>
            <div className="ngosearch-details">
              <div className="ngosearch-compliance">
                {org.compliance?.map((item, i) => (
                  <span key={i} className="compliance-badge">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No NGOs found for the given location.</p>
      )}
      <Footer />
    </div>
  );
}
