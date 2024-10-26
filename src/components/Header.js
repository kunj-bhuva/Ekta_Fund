import React from 'react';
import './Header.css';  // Import the CSS for the Header component
import logo from '../images/logo_big.png'; 
import loginImage from '../images/Mobile-login-Cristina 1.png'; 

function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img className="somee" src={logo} alt="Logo" style={{ height: '6rem' }} />
                </a>
                {/* Hamburger button for collapsing menu on small screens */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* Collapsible menu */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <button className='button'>
                            <a className="nav-link text-white" aria-disabled="true" >DONATE</a>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
