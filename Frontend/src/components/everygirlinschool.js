import React from "react";
import { useNavigate } from "react-router-dom";
import "./ngopage.css";

export default function EveryGirlInSchool() {
  const navigate = useNavigate();
  const ngoName = "Every Girl In School"; // Static NGO name as given in the example
  const donorName = localStorage.getItem("loggedInEmail"); // Fetch donor name from logged-in user

  // Handle the "DONATE" button click
  const handleDonateClick = () => {
    navigate("/donation", {
      state: { ngoName: ngoName },
    });
  };

  // Handle the "FEEDBACK" button click
  const handleFeedbackClick = () => {
    navigate("/donorreview", {
      state: { ngoName: ngoName, donorName: donorName || "" },
    });
  };
  const handleDownloadDonationHistory = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/billing/NGOhistory",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ngoName: ngoName }),
        }
      );

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "donation_report.pdf";
        a.click();
        window.URL.revokeObjectURL(url);
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error downloading report:", error);
      alert("An error occurred while downloading the donation report.");
    }
  };

  return (
    <div className="ngo-page-container">
      <header className="ngo-header">
        <div className="ngo-title-container">
          <h1 className="ngo-title">{ngoName}</h1>
          <p className="ngo-description">
            Empowers girls by ensuring access to education and fighting gender-based barriers.
          </p>
          <div className="ngo-buttons">
            <button className="btn donate-btn" onClick={handleDonateClick}>
              DONATE
            </button>
            <button className="btn feedback-btn" onClick={handleFeedbackClick}>
              FEEDBACK
            </button>
            <button
              className="btn donation-history-btn"
              onClick={handleDownloadDonationHistory}
            >
              DONATION HISTORY
            </button>
          </div>
        </div>
      </header>

      <section className="ngo-section">
        <h2 className="section-title">About</h2>
        <div className="section-content">
          <p>
            <strong>Headquarters:</strong> Bengaluru, Karnataka
          </p>
          <p>
            <strong>Since:</strong> 2012
          </p>
        </div>
      </section>

      <section className="ngo-section">
        <h2 className="section-title">Contact Details</h2>
        <div className="section-content">
          <p>
            <strong>Phone Number:</strong> +91 9123 456789
          </p>
          <p>
            <strong>Email:</strong> contact@everygirlin.school
          </p>
          <p>
            <strong>Address:</strong> 45 Empowerment Road, Bengaluru, 560001
            <br />
            <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="link">
              Directions
            </a>
          </p>
        </div>
      </section>

      <section className="ngo-section">
        <h2 className="section-title">Registration Details</h2>
        <div className="section-content">
          <p>
            <strong>12A:</strong> BBDEF22345XJ30112
          </p>
          <p>
            <strong>80G:</strong> BBDEF54321AB40422
          </p>
        </div>
      </section>

      <section className="ngo-section">
        <h2 className="section-title">Cause Area</h2>
        <div className="section-content">
          <p>
            <strong>Sector:</strong> Education
          </p>
        </div>
      </section>
    </div>
  );
}
