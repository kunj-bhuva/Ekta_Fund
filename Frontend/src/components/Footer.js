import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaTelegram, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li><a href="#about">About EktaFund</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#mission">Mission</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Donate To</h3>
          <ul>
            <li><a href="#ngos">NGOs</a></li>
            <li><a href="#causes">Social Causes</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><a href="#start">Start Fundraiser</a></li>
            <li><a href="#register">Register your Organization</a></li>
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
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Use</a>
          <a href="#legal">Legal</a>
          <a href="#sitemap">Site Map</a>
        </div>
        <p className='smallcenter'>© 2024 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
