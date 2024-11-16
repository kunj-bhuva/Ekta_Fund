import React from "react";
import "./ngopage.css";

export default function EveryGirlInSchool() {
  return (
    <div className="ngo-page-container">
      <header className="ngo-header">
        <div className="ngo-title-container">
          <h1 className="ngo-title">Every Girl In School</h1>
          <p className="ngo-description">
            Empowers girls by ensuring access to education and fighting gender-based barriers.
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
            <strong>Headquarters:</strong> Bengaluru, Karnataka
          </p>
          <p>
            <strong>Since:</strong> 2012
          </p>
        </div>
      </section>

      <section className="ngo-section">
        <h2 className="section-title">Contact Details</h2>
        <div className="section-content">
          <p>
            <strong>Phone Number:</strong> +91 9123 456789
          </p>
          <p>
            <strong>Email:</strong> contact@everygirlin.school
          </p>
          <p>
            <strong>Address:</strong> 45 Empowerment Road, Bengaluru, 560001
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
            <strong>12A:</strong> BBDEF22345XJ30112
          </p>
          <p>
            <strong>80G:</strong> BBDEF54321AB40422
          </p>
        </div>
      </section>

      <section className="ngo-section">
        <h2 className="section-title">Cause Area</h2>
        <div className="section-content">
          <p>
            <strong>Sector:</strong> Education
          </p>
        </div>
      </section>
    </div>
  );
}
