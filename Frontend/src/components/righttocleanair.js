import React from "react";
import "./ngopage.css";

export default function RightToCleanAir() {
  return (
    <div className="ngo-page-container">
      <header className="ngo-header">
        <div className="ngo-title-container">
          <h1 className="ngo-title">Right To Clean Air</h1>
          <p className="ngo-description">
            Advocates for reducing air pollution and ensuring cleaner, breathable air for all.
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
            <strong>Headquarters:</strong> Kolkata, West Bengal
          </p>
          <p>
            <strong>Since:</strong> 2013
          </p>
        </div>
      </section>

      <section className="ngo-section">
        <h2 className="section-title">Contact Details</h2>
        <div className="section-content">
          <p>
            <strong>Phone Number:</strong> +91 9888 765432
          </p>
          <p>
            <strong>Email:</strong> cleanair@righttocleanair.org
          </p>
          <p>
            <strong>Address:</strong> 78 Green Avenue, Kolkata, 700001
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
            <strong>12A:</strong> DDBFF67890KJ10145
          </p>
          <p>
            <strong>80G:</strong> DDBFF98765QR30321
          </p>
        </div>
      </section>

      <section className="ngo-section">
        <h2 className="section-title">Cause Area</h2>
        <div className="section-content">
          <p>
            <strong>Sector:</strong> Environment
          </p>
        </div>
      </section>
    </div>
  );
}
