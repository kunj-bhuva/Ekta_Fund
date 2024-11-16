import React from "react";
import "./ngopage.css";

export default function NoChildOrphaned() {
  return (
    <div className="ngo-page-container">
      <header className="ngo-header">
        <div className="ngo-title-container">
          <h1 className="ngo-title">No Child Orphaned</h1>
          <p className="ngo-description">
            Works to provide care and support for orphaned children, ensuring they receive a loving environment.
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
            <strong>Headquarters:</strong> Jaipur, Rajasthan
          </p>
          <p>
            <strong>Since:</strong> 2011
          </p>
        </div>
      </section>

      <section className="ngo-section">
        <h2 className="section-title">Contact Details</h2>
        <div className="section-content">
          <p>
            <strong>Phone Number:</strong> +91 8000 123456
          </p>
          <p>
            <strong>Email:</strong> care@nochildorphaned.org
          </p>
          <p>
            <strong>Address:</strong> 12 Orphan Care Street, Jaipur, 302001
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
            <strong>12A:</strong> HHGGF12345XM10987
          </p>
          <p>
            <strong>80G:</strong> HHGGF54321PL20856
          </p>
        </div>
      </section>

      <section className="ngo-section">
        <h2 className="section-title">Cause Area</h2>
        <div className="section-content">
          <p>
            <strong>Sector:</strong> Child Welfare
          </p>
        </div>
      </section>
    </div>
  );
}
