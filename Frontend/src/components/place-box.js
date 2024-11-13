import React, { useState } from "react";
import "./Place-box.css";

const PlaceBox = () => {
  const [selectedState, setSelectedState] = useState("Gujarat");

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
    "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  return (
    <div className="place-box">
      <div className="state-dropdown">
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
      <div className="stats">
        <div className="stat-item">
          <div className="icon certified-icon">g</div>
          <span style={{ fontFamily: 'Roboto' }}>Certified Nonprofits</span>
          <span className="count">84</span>
        </div>
        <div className="stat-item">
          <div className="icon star-icon">★</div>
          <span style={{ fontFamily: 'Roboto' }}>5 Star & 4 Star NGOs</span>
          <span className="count">770</span>
        </div>
      </div>
    </div>
  );
};

export default PlaceBox;
