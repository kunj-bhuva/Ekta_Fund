import React from "react";
import "./ngopage.css";

export default function StopAnimalCruelty() {
  return (
    <div className="ngo-page-container">
      <header className="ngo-header">
        <div className="ngo-title-container">
          <h1 className="ngo-title">Stop Animal Cruelty</h1>
          <p className="ngo-description">
            Fights for the welfare and rights of animals, ensuring they live a life free from cruelty and exploitation.
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
            <strong>Headquarters:</strong> Bangalore, Karnataka
          </p>
          <p>
            <strong>Since:</strong> 2010
          </p>
        </div>
      </section>

      <section className="ngo-section">
        <h2 className="section-title">Contact Details</h2>
        <div className="section-content">
          <p>
            <strong>Phone Number:</strong> +91 9123 765432
          </p>
          <p>
            <strong>Email:</strong> info@stopanimalcruelty.org
          </p>
          <p>
            <strong>Address:</strong> 20 Animal Care Road, Bangalore, 560001
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
            <strong>12A:</strong> GGFFF56789HH10132
          </p>
          <p>
            <strong>80G:</strong> GGFFF12345RR40567
          </p>
        </div>
      </section>

      <section className="ngo-section">
        <h2 className="section-title">Cause Area</h2>
        <div className="section-content">
          <p>
            <strong>Sector:</strong> Animal Welfare
          </p>
        </div>
      </section>
    </div>
  );
}
