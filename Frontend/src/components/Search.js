import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css';
import { FaFacebook, FaTwitter, FaTelegram, FaInstagram } from 'react-icons/fa';

import logo from "../images/logo_small_new.png";
import Mapp from "./mapp.js";
import india from "../images/india.png";
import Header_white from './Header_white.js';   
import Footer from './Footer.js';

export default function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = async () => {
        if (!searchTerm) {
            alert("Please enter a search term.");
            return;
        }
        console.log('Searching for:', searchTerm);
        try {
            const response = await fetch("http://localhost:5000/api/donors/location", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ location: searchTerm }),
            });
            const data = await response.json();
            if (response.ok) {
                // Navigate to the results page with the data
                navigate("/NGOsearchresults", { state: { ngos: data.ngos } });
            } else {
                alert("Error fetching NGO data.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to fetch data from the server.");
        }
    };

    const handleQuickSearch = (term) => {
        setSearchTerm(term);
        handleSearch();
    };

    return (
        <div className="aller">
            <Header_white />
            <div className="cont">
                <div className="logo">
                    <img src={logo} alt="Helping Made Simple Logo" />
                </div>
                <div className="title">Helping Made Simple</div>
                <div className="Search-descri">Get insights on 57,000+ NGOs with new additions daily</div>
                <div className="search-bar">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search for non-profits"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="search-button" onClick={handleSearch}>SEARCH</button>
                </div>
                
            </div>
            <Mapp />
            <Footer />
            
        </div>
    );
}
