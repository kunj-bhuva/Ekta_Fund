import React from 'react';
import './Header.css';  // Import the CSS for the Header component
import logo from '../images/logo_big.png'; 

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <img src={logo} alt="EktaFund Logo" className="logo" />  
        
          <h2 className='h22'>About</h2>
          <h2 className='h22'>Services</h2>
          <h2 className='h22'>Contact</h2>
          <h2 className='h22'>Something</h2>

        
      </div>
      <button className="donate-button">Donate</button> {/* Donate button aligned to the right */}
    </div>
  );
}

export default Header;
