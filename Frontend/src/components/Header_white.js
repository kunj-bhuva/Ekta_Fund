import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import './Header_white.css'; 
import logo from '../images/white.png'; 

function Header_white() {
    const navigate = useNavigate();  // Initialize navigate function

    const handleDonateClick = () => {
        navigate('/donate');  // Navigate to the donate page
    };

    const handleHomeClick = () => {
        navigate('/home');  // Navigate to the home page
    };

    const handleAboutClick = () => {
        navigate('/about');  // Navigate to the about page
    };

    const handleContactUsClick = () => {
        navigate('/contact-us');  // Navigate to the contact us page
    };

    const handleSignOutClick = () => {
        // Add sign-out logic here
        navigate('/land');  // Navigate to the login page
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" style={{ backgroundColor: " #ffffff " }}>
            <div className="container">
                <a className="navbar-brand" href="#" onClick={handleHomeClick}>
                    <img className="somee" src={logo} alt="Logo" style={{ height: '4rem' }} />
                </a>
                
                {/* Hamburger button for collapsing menu on small screens */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                {/* Collapsible menu */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="ms-auto flexbox">
                        <ul className="navbar-nav">
                            <li className="nav-item write">
                                <a className="nav-link" onClick={handleHomeClick}>Home</a>
                            </li>
                            <li className="nav-item write">
                                <a className="nav-link" onClick={handleAboutClick}>About</a>
                            </li>
                            <li className="nav-item write">
                                <a className="nav-link" onClick={handleContactUsClick}>Contact Us</a>
                            </li>
                            <li className="nav-item">
                                <button className="button" onClick={handleDonateClick}>
                                    <span className="nav-link text-white">DONATE</span>
                                </button>
                            </li>
                            {/* Sign Out Button */}
                            <li className="nav-item">
                                <button className=" signout-btn" onClick={handleSignOutClick}>
                                    <span className="nav-link text-white">SIGN OUT</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header_white;
