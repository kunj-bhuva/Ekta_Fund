import React from "react";
import "./ngopage.css";

export default function NGOPage() {
  return (
    <div className="ngo-page-container">
      <header className="ngo-header">
        
        <div className="ngo-title-container">
          <h1 className="ngo-title">Teach For India</h1>
          <p className="ngo-description">
            Runs fellowships facilitating individuals serving as full-time teachers who could later work towards
            bringing educational equity in the country.
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
            <strong>Since:</strong> 2004
          </p>
          
        </div>
      </section>

      <section className="ngo-section">
        <h2 className="section-title">Contact Details</h2>
        <div className="section-content">
          <p>
            <strong>Phone Number:</strong> +91 8828 40169
          </p>
          <p>
            <strong>Email:</strong> support@techforindia.in
          </p>
          <p>
            <strong>Address:</strong> 2nd Floor, Pirojshanagar, Vikhroli (East), Mumbai, 400079
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
            <strong>12A:</strong> AABTT6244EE10214
          </p>
          <p>
            <strong>80G:</strong> AABTT6548FF20114
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