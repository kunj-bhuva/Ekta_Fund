import React from 'react';
import './Header.css';  // Import the CSS for the Header component
import logo from '../images/logo_big.png'; 

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <img src={logo} alt="EktaFund Logo" className="logo" />  
        
          <h4 className='h22'>About</h4>
          <h4 className='h22'>Services</h4>
          <h4 className='h22'>Contact</h4>
          <h4 className='h22'>Something</h4>

        
      </div>
      <button className="donate-button">Donate</button> {/* Donate button aligned to the right */}
    </div>
  );
}

export default Header;
