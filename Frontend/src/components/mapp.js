import React from "react";
import "./Mapp.css"; // Import custom styles
import india from "../images/india.png"; // Import the India map image
import PlaceBox from "./Place-box"; 

const NGOMap = () => {
  return (
    <div className="ngo-map-container">
      <div className="map-section">
        <img src={india} alt="India Map" className="india-map" />
        <div className="map-points">
          {/* Example of dots, can be customized for real data points */}
          <span className="dot" style={{ top: "40%", left: "50%" }}></span>
          <span className="dot" style={{ top: "60%", left: "45%" }}></span>
          {/* Add more dots as needed */}
        </div>
      </div>
      <div className="map-legend">
      <p>Discover NGOs across <div class="inline special-style">states</div></p>

        <PlaceBox />
      </div>
    </div>
  );
};

export default NGOMap;
