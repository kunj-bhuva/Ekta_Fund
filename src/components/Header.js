import React from 'react';
import './Header.css';  // Import the CSS for the Header component
import logo from '../images/logo_big.png'; 
import loginImage from '../images/Mobile-login-Cristina 1.png'; 


function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <div className='ekta-logo'><img src={logo} alt="EktaFund Logo" className="logo" /> </div> {/* Use the imported image */}
        <button className="header-navBar"> About</button>
        <button className="header-navBar">Services</button>
        <button className="header-navBar">Contact</button>
        <button className="donate-button">Donate</button> {/* Donate button aligned to the right */}
      </div>
     
    </div>
  );
}

export default Header;
