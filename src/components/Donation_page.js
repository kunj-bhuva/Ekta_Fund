import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Search from "./Search.js";
import Header_white from "./Header_white.js";
 
export default function Donation_page(){
    return (
        <div>
            {/* <Home/> */}
            <Header_white/>
            <Search/>
            
                       
        </div>
        
    );
}