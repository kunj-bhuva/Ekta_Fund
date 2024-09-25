import React from 'react';
import './Header.css';  // Import the CSS for the Header component
import logo from '../images/logo_big.png'; 

function Header() {
  return (
    <div className="header">
      <div className="header-content">
      <img src={logo} alt="EktaFund Logo" className="logo" />  {/* Use the imported image */}
      <h2>About</h2>
      <h2>Donate</h2>
      <h2>Services</h2>
      <h2>Contact</h2>
      
      </div>
      <button className="donate-button">Donate</button> {/* Donate button aligned to the right */}
    </div>
  );
}

export default Header;
