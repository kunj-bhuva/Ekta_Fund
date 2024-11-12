import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import './Donation_page.css';
import logo from "../images/logo_big.png";
import Search from "./Search.js";
import Header_white from "./Header_white.js";
// import ContactUs from './ContactUs.js';
// import AboutUs from './about.js';   
// import PrivacyPolicy from './Privacypolicy.js';
// import Legal from './Legal.js'; 
// import Terms from './termsofuse.js';

export default function Donation_page(){
    return (
        <div>
            <Search/>
            {/* <ContactUs/>
            <AboutUs/>
            <PrivacyPolicy/>
            <Legal/>
            <Terms/> */}
        </div>
        
    );
}