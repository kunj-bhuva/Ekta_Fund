import React from "react";
import "./ngopage.css";

export default function FeedTheHungry() {
  return (
    <div className="ngo-page-container">
      <header className="ngo-header">
        <div className="ngo-title-container">
          <h1 className="ngo-title">Feed The Hungry</h1>
          <p className="ngo-description">
            Works to provide meals to underprivileged communities, ensuring no one goes to bed hungry.
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
            <strong>Since:</strong> 2010
          </p>
        </div>
      </section>

      <section className="ngo-section">
        <h2 className="section-title">Contact Details</h2>
        <div className="section-content">
          <p>
            <strong>Phone Number:</strong> +91 9876 543210
          </p>
          <p>
            <strong>Email:</strong> info@feedthehungry.org
          </p>
          <p>
            <strong>Address:</strong> 123 Community Lane, New Delhi, 110001
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
            <strong>12A:</strong> AABFF12345XH10112
          </p>
          <p>
            <strong>80G:</strong> AABFF54321KJ20222
          </p>
        </div>
      </section>

      <section className="ngo-section">
        <h2 className="section-title">Cause Area</h2>
        <div className="section-content">
          <p>
            <strong>Sector:</strong> Food Security
          </p>
        </div>
      </section>
    </div>
  );
}
