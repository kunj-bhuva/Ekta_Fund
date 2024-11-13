import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="Footer-container">
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        
                        {/* First Column */}
                        <div className="col-md-3 footer-block">
                            <ul className="listnone">
                                <li><a href="https://ngodarpan.gov.in/index.php/home" title="Home">Home</a></li>
                                <li><a href="https://ngodarpan.gov.in/index.php/home/sitemap" title="Site Map">Site Map</a></li>
                                <li><a href="https://ngodarpan.gov.in/index.php/home/policy" title="Privacy Policy">Privacy Policy</a></li>
                            </ul>
                        </div>
                        
                        {/* Second Column */}
                        <div className="col-md-3 footer-block">
                            <ul className="listnone">
                                <li><a href="https://ngodarpan.gov.in/index.php/home/link" title="Link to us">Link to us</a></li>
                                <li><a href="https://ngodarpan.gov.in/index.php/home/faq" title="FAQs">FAQs</a></li>
                                <li><a href="https://ngodarpan.gov.in/index.php/home/policy" title="Linking Policy">Linking Policy</a></li>
                            </ul>
                        </div>
                        
                        {/* Third Column */}
                        <div className="col-md-3 footer-block">
                            <ul className="listnone">
                                <li><a href="https://ngodarpan.gov.in/index.php/home/terms" title="Terms">Terms of Use</a></li>
                                <li><a href="https://ngodarpan.gov.in/index.php/home/contact" title="Contact us">Contact Us</a></li>
                                <li><a href="https://ngodarpan.gov.in/index.php/home/policy" title="Copyright Policy">Copyright Policy</a></li>
                            </ul>
                        </div>
                        
                        {/* Fourth Column */}
                        <div className="col-md-3 footer-block footer-contact">
                            <img src="https://ngodarpan.gov.in/assets/images/QRcode.jpg" alt="QR Code" style={{ width: '80%' }} />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
