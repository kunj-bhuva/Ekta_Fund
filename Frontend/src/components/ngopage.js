import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ngopage.css";

export default function NGOPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const ngo = location.state?.ngo;
  const donorName = localStorage.getItem("loggedInEmail"); // Fetch donor name from logged-in user

  if (!ngo) {
    return <p>No NGO data available.</p>;
  }

  const handleFeedbackClick = () => {
    navigate("/donorreview", {
      state: { ngoName: ngo.name, donorName: donorName || "" },
    });
  };

  const handleDonateClick = () => {
    // Navigate to the donation page and pass the NGO name
    navigate("/donation", { state: { ngoName: ngo.name } });
  };

  return (
    <div className="ngo-page-container">
      <header className="ngo-header">
        <div className="ngo-title-container">
          <h1 className="ngo-title">{ngo.name}</h1>
          <p className="ngo-description">{ngo.vision}</p>
          <div className="ngo-tags">
            <span className={`tag ${ngo.verificationStatus}`}>
              {ngo.verificationStatus.toUpperCase()}
            </span>
          </div>
          <div className="ngo-buttons">
            <button className="btn donate-btn" onClick={handleDonateClick}>
              DONATE
            </button>
            <button className="btn feedback-btn" onClick={handleFeedbackClick}>
              FEEDBACK
            </button>
          </div>
        </div>
      </header>

      <section className="ngo-section">
        <h2 className="section-title">About</h2>
        <div className="section-content">
          <p>
            <strong>Mission:</strong> {ngo.mission}
          </p>
          <p>
            <strong>Cause Area:</strong> {ngo.causeArea}
          </p>
        </div>
      </section>

      <section className="ngo-section">
        <h2 className="section-title">Contact Details</h2>
        <div className="section-content">
          <p>
            <strong>Contact Person:</strong> {ngo.contactPerson}
          </p>
          <p>
            <strong>Phone Number:</strong> {ngo.mobileNumber}
          </p>
          <p>
            <strong>Email:</strong> {ngo.email}
          </p>
          <p>
            <strong>Address:</strong> {ngo.address}
          </p>
        </div>
      </section>
    </div>
  );
}
