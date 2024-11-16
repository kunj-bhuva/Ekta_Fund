import React from "react";
import "./ngopage.css";

export default function ManageIndiasWaste() {
  return (
    <div className="ngo-page-container">
      <header className="ngo-header">
        <div className="ngo-title-container">
          <h1 className="ngo-title">Manage India's Waste</h1>
          <p className="ngo-description">
            Focuses on promoting waste management practices and creating awareness around recycling.
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
            <strong>Headquarters:</strong> Delhi, India
          </p>
          <p>
            <strong>Since:</strong> 2015
          </p>
        </div>
      </section>

      <section className="ngo-section">
        <h2 className="section-title">Contact Details</h2>
        <div className="section-content">
          <p>
            <strong>Phone Number:</strong> +91 7676 123456
          </p>
          <p>
            <strong>Email:</strong> waste@manageindiaswaste.org
          </p>
          <p>
            <strong>Address:</strong> 21 Eco Park, New Delhi, 110001
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
            <strong>12A:</strong> IIJFF78900XH20310
          </p>
          <p>
            <strong>80G:</strong> IIJFF23451GL40520
          </p>
        </div>
      </section>

      <section className="ngo-section">
        <h2 className="section-title">Cause Area</h2>
        <div className="section-content">
          <p>
            <strong>Sector:</strong> Environmental Sustainability
          </p>
        </div>
      </section>
    </div>
  );
}
