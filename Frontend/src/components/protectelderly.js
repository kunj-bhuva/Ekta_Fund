import React from "react";
import "./ngopage.css";

export default function ProtectTheElderly() {
  return (
    <div className="ngo-page-container">
      <header className="ngo-header">
        <div className="ngo-title-container">
          <h1 className="ngo-title">Protect The Elderly</h1>
          <p className="ngo-description">
            Provides support and care for senior citizens, ensuring dignity and safety in their golden years.
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
            <strong>Headquarters:</strong> Pune, Maharashtra
          </p>
          <p>
            <strong>Since:</strong> 2008
          </p>
        </div>
      </section>

      <section className="ngo-section">
        <h2 className="section-title">Contact Details</h2>
        <div className="section-content">
          <p>
            <strong>Phone Number:</strong> +91 7878 654321
          </p>
          <p>
            <strong>Email:</strong> elderly@protecttheelderly.org
          </p>
          <p>
            <strong>Address:</strong> 34 Care Home Lane, Pune, 411001
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
            <strong>12A:</strong> EEBFF45678GH20345
          </p>
          <p>
            <strong>80G:</strong> EEBFF87654KL50321
          </p>
        </div>
      </section>

      <section className="ngo-section">
        <h2 className="section-title">Cause Area</h2>
        <div className="section-content">
          <p>
            <strong>Sector:</strong> Senior Citizen Welfare
          </p>
        </div>
      </section>
    </div>
  );
}
