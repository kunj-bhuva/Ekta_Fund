import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css';
// import { FaFacebook, FaTwitter, FaTelegram, FaInstagram } from 'react-icons/fa';
import Header_white from "./Header_white.js"
import Footer from "./Footer.js"
import logo from "../images/logo_small_new.png";
<<<<<<< Updated upstream
import Map from "./Mapp.js";
import india from "../images/india.png";


=======
// import Map from "./Mapp.js";
// import india from "../images/india.png";


import Map from "./mapp.js";
import Foot from './Footer.js';
import White from './Header_white.js';
>>>>>>> Stashed changes
export default function Search() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        if (searchTerm) {
            console.log(`Searching for: ${searchTerm}`);
            // Add search logic here, like calling an API or navigating to a results page
        } else {
            alert("Please enter a search term.");
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
                <div className="Search-description">Get insights on 57,000+ NGOs with new additions daily</div>
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
                <div className="top-searches">
                    <div className="top-search-item" onClick={() => handleQuickSearch('Mumbai')}>Mumbai</div>
                    <div className="top-search-item" onClick={() => handleQuickSearch('Livelihoods')}>Livelihoods</div>
                    <div className="top-search-item" onClick={() => handleQuickSearch('Climate Change')}>Climate Change</div>
                </div>

            </div>
            <Map/>
            <div className="heads">Organisations by Sectors</div>
            <Footer   />
        </div>
    );
}
