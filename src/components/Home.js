import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Home.css';  // Import the CSS for the Home component
import 'bootstrap/dist/css/bootstrap.min.css';
import IndividualIntervalsExample from './slider.js';  // Import the slider component   
import TickerTape from './tickertape.js';
import MMM from './missions.js';
import Header_white from "./Header_white.js";
import FAA from './FAQs.js'
import Bands from './band.js';

export default function Home() {
    return (
        <div>
            <div className="Body">
                <Header_white/>
                <IndividualIntervalsExample />

                <h1 className='heads'>OUR IMPACT</h1>
                <div className="impact">
                    <div className="impact1">
                        <p>2.7M+</p>
                        <p className='achieve'>Donations</p>
                    </div>
                    <div className="impact2">
                        <p>15M+</p>
                        <p className='achieve'>Lives Impacted</p>
                    </div>
                    <div className="impact3">
                        <p>3000+</p>
                        <p className='achieve'>Verified Non Profits </p>
                    </div>
                    <div className="impact4">
                        <p>300+</p>
                        <p className='achieve'>Corporate Partner</p>
                    </div>
                </div> {/* Closing div for .impact */}


                <TickerTape />

                <h1 className='heads'>OUR MISSIONS</h1>

                <MMM/>

                <h1 className='heads'>OUR TRUSTED NGO PARTNERS</h1>

                <Bands/>

                <h1 className='heads'>FAQs</h1>
                

                <FAA/>
                

            </div>
            
        </div>
    );
}

