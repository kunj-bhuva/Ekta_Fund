import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ngopage.css";
import Header_white from "./Header_white";
import Footer from "./Footer";

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
    navigate("/donation", { state: { ngoName: ngo.name } });
  };

  const handleDownloadDonationHistory = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/billing/NGOhistory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ngoName: ngo.name }),
      });

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
    <div>
      <Header_white />
      <div className="ngo-page-container">
        <header className="ngo-header">
          <div className="ngo-title-container">
            <h1 className="ngo-title">{ngo.name}</h1>
            <p className="ngo-description">{ngo.vision}</p>
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
      <Footer />
    </div>
  );
}
