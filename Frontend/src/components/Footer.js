import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebook, FaTwitter, FaTelegram, FaInstagram } from 'react-icons/fa';

const Footer = ({ scrollToMissions, scrollToNgos, scrollToCauses }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li><Link to="/about">About EktaFund</Link></li>
            <li>
              <Link to="/" onClick={(e) => { e.preventDefault(); scrollToMissions(); }}>
                Missions
              </Link>
            </li>
            <li>
              <Link to="/" onClick={(e) => { e.preventDefault(); scrollToNgos(); }}>
                NGOs
              </Link>
            </li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Donate To</h3>
          <ul>
            <li>
              <Link to="/" onClick={(e) => { e.preventDefault(); scrollToNgos(); }}>
                NGOs
              </Link>
            </li>
            <li>
              <Link to="/" onClick={(e) => { e.preventDefault(); scrollToCauses(); }}>
                Social Causes
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><a href="#start">Start Fundraiser</a></li>
            <li><Link to="/NGOregistration">Register Your Organization</Link></li>
            <li><Link to="/NGOupdation">Update Your Organization</Link></li>
          </ul>
        </div>
        

        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li><span>DAIICT Gandhinagar</span></li>
            <li><span>support@ektafund.com</span></li>
          </ul>
          <h4>Follow us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaTelegram /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <Link to="/Privacypolicy">Privacy Policy</Link>
          <Link to="/Termsofuse">Terms of Use</Link>
          <Link to="/Legal">Legal</Link>
        </div>
        <p className='smallcenter'>© 2024 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
