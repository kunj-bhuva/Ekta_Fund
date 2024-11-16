import React from "react";
import "./ngopage.css";

export default function SafeWaterForAll() {
  return (
    <div className="ngo-page-container">
      <header className="ngo-header">
        <div className="ngo-title-container">
          <h1 className="ngo-title">Safe Water For All</h1>
          <p className="ngo-description">
            Focused on ensuring access to clean and safe drinking water for communities in need.
          </p>
          <div className="ngo-tags">
            <span className="tag">80G</span>
            <span className="tag">12A</span>
          </div>
          <div className="ngo-buttons">
            <button className="btn donate-btn">DONATE</button>
            <button className="btn feedback-btn">FEEDBACK</button>
          </div>
        </div>
      </header>

      <section className="ngo-section">
        <h2 className="section-title">About</h2>
        <div className="section-content">
          <p>
            <strong>Headquarters:</strong> Chennai, Tamil Nadu
          </p>
          <p>
            <strong>Since:</strong> 2005
          </p>
        </div>
      </section>

      <section className="ngo-section">
        <h2 className="section-title">Contact Details</h2>
        <div className="section-content">
          <p>
            <strong>Phone Number:</strong> +91 9098 765432
          </p>
          <p>
            <strong>Email:</strong> support@safewaterforall.org
          </p>
          <p>
            <strong>Address:</strong> 56 Aqua Lane, Chennai, 600002
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
            <strong>12A:</strong> CCAFF12345ZH10456
          </p>
          <p>
            <strong>80G:</strong> CCAFF54321QH20892
          </p>
        </div>
      </section>

      <section className="ngo-section">
        <h2 className="section-title">Cause Area</h2>
        <div className="section-content">
          <p>
            <strong>Sector:</strong> Water and Sanitation
          </p>
        </div>
      </section>
    </div>
  );
}
