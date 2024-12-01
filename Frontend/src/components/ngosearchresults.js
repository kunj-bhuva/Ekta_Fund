import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ngosearchresults.css";
import Footer from "./Footer";
import Header_white from "./Header_white";
import { FaMapMarkerAlt } from "react-icons/fa";
import logo from "../images/logo_small_new.png";

export default function NGOsearchResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const ngos = location.state?.ngos || [];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    if (!searchTerm) {
      alert("Please enter a search term.");
      return;
    }

    try {
      const response = await fetch("https://ektafund-backend.onrender.com/api/donors/location", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ location: searchTerm }),
      });

      const data = await response.json();
      if (response.ok) {
        navigate("/NGOsearchresults", { state: { ngos: data.ngos } });
      } else {
        alert("Error fetching NGO data.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to fetch data from the server.");
    }
  };

  const handleQuickSearch = (term) => {
    setSearchTerm(term);
    handleSearch();
  };

  const handleCardClick = (ngo) => {
    navigate("/ngopage", { state: { ngo } });
  };

  return (
    <div className="ngosr-container">
      <Header_white />
      <div className="ngosr-search-container">
        <div className="ngosr-search-bar">
          <input
            type="text"
            className="ngosr-search-input"
            placeholder="Search for non-profits"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="ngosr-search-button" onClick={handleSearch}>
            SEARCH
          </button>
        </div>
      </div>
      <div className="ngosr-results-content">
        {ngos.length > 0 ? (
          ngos.map((org, index) => (
            <div
              key={index}
              className="ngosr-card"
              onClick={() => handleCardClick(org)}
              style={{ cursor: "pointer" }}
            >
              <div className="ngosr-description">
                <h3 className="ngosr-title">{org.name}</h3>
                <p className="ngosr-location">
                  <span>
                    <FaMapMarkerAlt />
                  </span>{" "}
                  {org.location}
                </p>
                <p className="ngosr-about">{org.mission}</p>
              </div>
              <div className="ngosr-cta">
                <button className="ngosr-view-more-btn">View More</button>
              </div>
            </div>
          ))
        ) : (
          <p className="ngosr-no-results">No NGOs found for the given location.</p>
        )}
      </div>
      <Footer />
    </div>
  );
}
