import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Home.css';  // Import the CSS for the Home component
import 'bootstrap/dist/css/bootstrap.min.css';
import IndividualIntervalsExample from './Slider.js';  // Import the slider component   
import TickerTape from './Tickertape.js';
import Footer from './Footer.js';
import Header_white from './Header_white.js';
<<<<<<< HEAD
import MMM from './Missions.js';

import FAA from './FAQs.js'
import Bands from './Band.js';
=======
import MMM from './missions.js';
import Bands from './band.js';
>>>>>>> b59d2411bed0d52544a9ce8f9701fb1fcc252995


export default function Home() {
    return (
        <div>
            <Header_white/>
            <div className="Home-Body">
                <IndividualIntervalsExample />

                <h1 className='heads'>OUR IMPACT</h1>
                <div className="impact">
                    <div className="impact1">
                        <p className='home-p'>2.7M+</p>
                        <p className='achieve'>Donations</p>
                    </div>
                    <div className="impact2">
                        <p className='home-p'>15M+</p>
                        <p className='achieve'>Lives Impacted</p>
                    </div>
                    <div className="impact3">
                        <p className='home-p'>3000+</p>
                        <p className='achieve'>Verified Non Profits </p>
                    </div>
                    <div className="impact4">
                        <p className='home-p'>300+</p>
                        <p className='achieve'>Corporate Partner</p>
                    </div>
                </div> {/* Closing div for .impact */}


                <TickerTape />

                <h1 className='heads'>OUR MISSIONS</h1>

                <MMM/>

                <h1 className='heads'>OUR TRUSTED NGO PARTNERS</h1>

                <Bands/>

                

            </div>
            <Footer/>
        </div>
    );
}

