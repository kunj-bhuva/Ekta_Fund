import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
<<<<<<< HEAD
// import logo from "../images/logo_big.png";
import Search from "./Search.js";
import Header_white from "./Header_white.js";
// import ContactUs from './ContactUs.js';
// import AboutUs from './About.js';   
// import PrivacyPolicy from './Privacypolicy.js';
// import Legal from './Legal.js'; 
// import Terms from './Termsofuse.js';
// import Admin from './Admin.js';
// import Home from './Home.js';  
import Mapp from './Mapp.js';
import Footer from './Footer.js';

=======
import Search from "./Search.js";
import Header_white from "./Header_white.js";
 
>>>>>>> b59d2411bed0d52544a9ce8f9701fb1fcc252995
export default function Donation_page(){
    return (
        <div>
            {/* <Home/> */}
            <Header_white/>
            <Search/>
            <Footer/>
                       
        </div>
        
    );
}