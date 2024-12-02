import React, { useState } from "react";
import "./land.css";
import logo from "../images/okk.png";
import product from "../images/Image group.png";
import signup from "../images/signup.png";
import logs from "../images/logg (2).png";
import getstarted from "../images/getstarted.png";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation

const Land = () => {
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();  // Initialize navigate function

  const handleGetStartedClick = () => {
    setShowOptions(true); // Show Login and Signup options
  };

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to /login
  };

  const handleSignUpClick = () => {
    navigate("/register"); // Navigate to /register
  };

  return (
    <div className="land-container">
      {/* Left Half: Logo and Text */}
      <div className="land-column land-left">
        <img src={logo} alt="Logo" className="land-logo" />
        <p
          data-aos="fade-right"
          data-aos-duration="1400"
          className="land-title"
        >
          EKTAFUND
        </p>
        <p
          data-aos="fade-left"
          data-aos-duration="1400"
          className="land-description"
        >
          Helping Made Simple!
        </p>

        {/* Button Section */}
        <div className="land-buttons">
          {!showOptions ? (
            <button
              className="land-getstarted"
              onClick={handleGetStartedClick}
              data-aos="flip-down"
              data-aos-duration="1400"
            >
              <img
                src={getstarted}
                alt="Get Started"
                style={{ width: "10rem" }}
              />
            </button>
          ) : (
            <div className="land-options"  data-aos-duration="1400">
              <button className="land-option-button">
                <img src={logs} alt="Login" className="land-option-image" onClick={handleLoginClick} data-aos="fade-right" style={{ width: "10rem" }} />

              </button>
              <button className="land-option-button">
                <img src={signup} alt="Signup" className="land-option-image" onClick={handleSignUpClick} data-aos="fade-left" style={{ width: "10rem" }} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Right Half: Product Image */}
      <div className="land-column land-right">
        <img
          src={product}
          alt="Product"
          className="land-product"
          data-aos="zoom-in"
          data-aos-duration="1400"
          style={{ width: "25rem" }}
        />
      </div>
    </div>
  );
};

export default Land;
