import React from "react";
import "./ngopage.css";

export default function EndPeriodPoverty() {
  return (
    <div className="ngo-page-container">
      <header className="ngo-header">
        <div className="ngo-title-container">
          <h1 className="ngo-title">End Period Poverty</h1>
          <p className="ngo-description">
            Works to provide menstrual hygiene products to those in need, ensuring every woman has access to proper care.
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
            <strong>Headquarters:</strong> Mumbai, Maharashtra
          </p>
          <p>
            <strong>Since:</strong> 2017
          </p>
        </div>
      </section>

      <section className="ngo-section">
        <h2 className="section-title">Contact Details</h2>
        <div className="section-content">
          <p>
            <strong>Phone Number:</strong> +91 7888 123456
          </p>
          <p>
            <strong>Email:</strong> info@endperiodpoverty.org
          </p>
          <p>
            <strong>Address:</strong> 9 Hygiene Lane, Mumbai, 400001
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
            <strong>12A:</strong> JJKFF12345KL10988
          </p>
          <p>
            <strong>80G:</strong> JJKFF54321OP20329
          </p>
        </div>
      </section>

      <section className="ngo-section">
        <h2 className="section-title">Cause Area</h2>
        <div className="section-content">
          <p>
            <strong>Sector:</strong> Health and Hygiene
          </p>
        </div>
      </section>
    </div>
  );
}
