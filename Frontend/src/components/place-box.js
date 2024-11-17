import React, { useState } from "react";
import "./place-box.css";

const PlaceBox = () => {
  const [selectedState, setSelectedState] = useState("Gujarat");

  // Data for each state
  const stateStats = {
    "Andhra Pradesh": { certified: 92, fiveStar: 630 },
    "Arunachal Pradesh": { certified: 14, fiveStar: 80 },
    Assam: { certified: 34, fiveStar: 110 },
    Bihar: { certified: 64, fiveStar: 340 },
    Chhattisgarh: { certified: 28, fiveStar: 170 },
    Goa: { certified: 12, fiveStar: 50 },
    Gujarat: { certified: 84, fiveStar: 770 },
    Haryana: { certified: 52, fiveStar: 400 },
    "Himachal Pradesh": { certified: 20, fiveStar: 150 },
    Jharkhand: { certified: 36, fiveStar: 200 },
    Karnataka: { certified: 92, fiveStar: 800 },
    Kerala: { certified: 88, fiveStar: 670 },
    "Madhya Pradesh": { certified: 70, fiveStar: 600 },
    Maharashtra: { certified: 112, fiveStar: 950 },
    Manipur: { certified: 18, fiveStar: 90 },
    Meghalaya: { certified: 14, fiveStar: 70 },
    Mizoram: { certified: 10, fiveStar: 60 },
    Nagaland: { certified: 15, fiveStar: 50 },
    Odisha: { certified: 42, fiveStar: 230 },
    Punjab: { certified: 60, fiveStar: 400 },
    Rajasthan: { certified: 80, fiveStar: 690 },
    Sikkim: { certified: 8, fiveStar: 40 },
    "Tamil Nadu": { certified: 98, fiveStar: 820 },
    Telangana: { certified: 76, fiveStar: 620 },
    Tripura: { certified: 12, fiveStar: 50 },
    "Uttar Pradesh": { certified: 140, fiveStar: 900 },
    Uttarakhand: { certified: 32, fiveStar: 190 },
    "West Bengal": { certified: 100, fiveStar: 780 },
  };

  const selectedStats = stateStats[selectedState];

  return (
    <div className="place-box">
      <div className="state-dropdown">
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          {Object.keys(stateStats).map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
      <div className="stats">
        <div className="stat-item">
          <div className="icon certified-icon">✔</div>
          <span style={{ fontFamily: "Roboto" }}>Certified Nonprofits</span>
          <span className="count">{selectedStats.certified}</span>
        </div>
        <div className="stat-item">
          <div className="icon star-icon">★</div>
          <span style={{ fontFamily: "Roboto" }}>5 Star & 4 Star NGOs</span>
          <span className="count">{selectedStats.fiveStar}</span>
        </div>
      </div>
    </div>
  );
};

export default PlaceBox;
