
import React, { useState } from 'react';
import './Footer.css';
import insta from "../images/insta.png";
import github from "../images/github.png";
import telegram from "../images/telegram.png";
import fb from "../images/fb.png";
import mailbox from "../images/mailbox.png";
import location from "../images/location.png";
import logo from "../images/footer_logo.png";


export default function Footer() {
  return (
    <footer className="footer bg-custom text-center text-lg-start text-black">
      <div className="container p-4">
        {/* Grid row */}
        <div className="row mt-4">
          {/* Grid column */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">About Us</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#!" className="text-black">About EktaFund</a></li>
              <li><a href="#!" className="text-black">Careers</a></li>
              <li><a href="#!" className="text-black">Mission</a></li>
              <li><a href="#!" className="text-black">Contact Us</a></li>
              <li>
              <img  id='logo' src={logo}/>
              </li>
            </ul>
          </div>
          {/* Another Grid column */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Donate To</h5>
            <ul className="list-unstyled">
              <li><a href="#!" className="text-black">NGOs</a></li>
              <li><a href="#!" className="text-black">Social Causes</a></li>
            </ul>
          </div>
          {/* Additional Grid columns */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Resources</h5>
            <ul className="list-unstyled">
              <li><a href="#!" className="text-black">Start Fundraiser</a></li>
              <li><a href="#!" className="text-black">Register Your Organization</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact Us</h5>
            <ul className="list-unstyled">
              <li><a href="#!" className="text-black" id='1'> <img src={location}/>DA-IICT Gandhinagar</a></li>
              <li><a href="#!" className="text-black" id='2'> <img src={mailbox}/>support@ektafund.com</a></li>
            </ul>
            <h5 className="text-uppercase">Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="#!" className="text-black">
                <img src={fb}/>
                <img src={github}/>
                <img src={telegram}/>
                <img src={insta}/>
                </a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center p-3 footer-bottom">
        © 2024 All Rights Reserved
      </div>
    </footer>
  );
}
