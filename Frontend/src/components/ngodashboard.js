import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ngopage.css";
import Header_white from "./Header_white";
import Footer from "./Footer";

export default function NGODash() {
  const navigate = useNavigate();
  const [ngoData, setNgoData] = useState(null);
  const [error, setError] = useState(null);
  const loggedInEmail = localStorage.getItem("loggedInEmail"); // Retrieve email from localStorage

  // Fetch NGO data using the email
  useEffect(() => {
    const fetchNgoData = async () => {
      try {
        const response = await fetch("https://ektafund-backend.onrender.com/api/ngos/getdetails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: loggedInEmail }),
        });

        if (response.ok) {
          const data = await response.json();
          setNgoData(data);
        } else {
          const errorData = await response.json();
          setError(errorData.message || "Failed to fetch NGO details.");
        }
      } catch (err) {
        console.error("Error fetching NGO data:", err);
        setError("An error occurred while fetching NGO details.");
      }
    };

    if (loggedInEmail) {
      fetchNgoData();
    } else {
      setError("No email found. Please log in.");
    }
  }, [loggedInEmail]);

  const handleUpdateProfileClick = () => {
    navigate("/NGOupdation", { state: { ngo: ngoData } });
  };

  const handleDownloadDonationHistory = async () => {
    try {
      const response = await fetch("https://ektafund-backend.onrender.com/api/billing/NGOhistory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ngoName: ngoData.name }),
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

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (!ngoData) {
    return <p>Loading NGO details...</p>;
  }

  return (
    <div className="ngo-pagexx">
      <Header_white />
      <div className="ngo-page-container">
        <header className="ngo-header">
          <div className="ngo-title-container">
            <h1 className="ngo-title">{ngoData.name}</h1>
            <p className="ngo-description">{ngoData.vision}</p>
            <div className="ngo-buttons">
              <button className="btn donate-btn" onClick={handleUpdateProfileClick}>
                UPDATE PROFILE
              </button>
              <button className="btn donation-history-btn" onClick={handleDownloadDonationHistory}>
                DONATION HISTORY
              </button>
            </div>
          </div>
        </header>

        <section className="ngo-section">
          <h2 className="section-title">About</h2>
          <div className="section-content">
            <p className="small-text">
              Mission: <strong className="large-text">{ngoData.mission}</strong>
            </p>
            <p className="small-text">
              Cause Area: <strong className="large-text">{ngoData.causeArea}</strong>
            </p>
          </div>
        </section>

        <section className="ngo-section">
          <h2 className="section-title">Contact Details</h2>
          <div className="section-content">
            <p className="small-text">
              Contact Person: <strong className="large-text">{ngoData.contactPerson}</strong>
            </p>
            <p className="small-text">
              Phone Number: <strong className="large-text">{ngoData.mobileNumber}</strong>
            </p>
            <p className="small-text">
              Email: <strong className="large-text">{ngoData.email}</strong>
            </p>
            <p className="small-text">
              Address: <strong className="large-text">{ngoData.address}</strong>
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
