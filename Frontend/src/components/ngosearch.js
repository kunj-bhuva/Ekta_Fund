import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ngosearch.css";
import Header_white from "./Header_white";

export default function NGOsearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!searchTerm) {
      alert("Please enter a search term.");
      return;
    }
    console.log('searchTerm:', searchTerm);
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
        // Pass the retrieved data to the results page
        navigate("/NGOsearchresults", { state: { ngos: data.ngos } });
      } else {
        alert("Error fetching NGO data");
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

  return (
    <div className="aller">
      <Header_white />
      <div className="contt">
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search for non-profits"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            SEARCH
          </button>
        </div>
        <div className="top-searches">
          <div className="top-search-item" onClick={() => handleQuickSearch("Mumbai")}>
            Mumbai
          </div>
          <div className="top-search-item" onClick={() => handleQuickSearch("Livelihoods")}>
            Livelihoods
          </div>
          <div className="top-search-item" onClick={() => handleQuickSearch("Climate Change")}>
            Climate Change
          </div>
        </div>
      </div>
    </div>
  );
}
