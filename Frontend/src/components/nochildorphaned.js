import React from "react";
import { useNavigate } from "react-router-dom";
import "./ngopage.css";

export default function NoChildOrphaned() {
  const navigate = useNavigate();
  const ngoName = "No Child Orphaned"; // Static NGO name as given in the example
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
            Works to provide care and support for orphaned children, ensuring they receive a loving environment.
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
            <strong>Headquarters:</strong> Jaipur, Rajasthan
          </p>
          <p>
            <strong>Since:</strong> 2011
          </p>
        </div>
      </section>

      <section className="ngo-section">
        <h2 className="section-title">Contact Details</h2>
        <div className="section-content">
          <p>
            <strong>Phone Number:</strong> +91 8000 123456
          </p>
          <p>
            <strong>Email:</strong> care@nochildorphaned.org
          </p>
          <p>
            <strong>Address:</strong> 12 Orphan Care Street, Jaipur, 302001
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
            <strong>12A:</strong> HHGGF12345XM10987
          </p>
          <p>
            <strong>80G:</strong> HHGGF54321PL20856
          </p>
        </div>
      </section>

      <section className="ngo-section">
        <h2 className="section-title">Cause Area</h2>
        <div className="section-content">
          <p>
            <strong>Sector:</strong> Child Welfare
          </p>
        </div>
      </section>
    </div>
  );
}
