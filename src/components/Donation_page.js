import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import logo from "../images/logo_big.png";
import Search from "./Search.js";
import Header_white from "./Header_white.js";
import ContactUs from './ContactUs.js';
import AboutUs from './about.js';   
import PrivacyPolicy from './Privacypolicy.js';
import Legal from './Legal.js'; 
import Terms from './termsofuse.js';
import Admin from './admin.js';
import Home from './Home.js';   
export default function Donation_page(){
    return (
        <div>
            {/* <Home/> */}
            <Header_white/>
            <Search/>
            
                       
        </div>
        
    );
}