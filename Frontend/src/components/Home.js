import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import IndividualIntervalsExample from './Slider.js';
import TickerTape from './tickertape.js';
import Footer from './Footer.js';
import Header_white from './Header_white.js';
import MMM from './missions.js';
import FAQs from './FAQs.js';
import Bands from './band.js';

export default function Home() {
    // Define refs for the sections to scroll to
    const missionsRef = useRef(null);
    const ngosRef = useRef(null);
    const causesRef = useRef(null);

    // Function to scroll to a specific section
    const scrollToSection = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <Header_white />
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
                        <p className='achieve'>Verified Non Profits</p>
                    </div>
                    <div className="impact4">
                        <p className='home-p'>300+</p>
                        <p className='achieve'>Corporate Partners</p>
                    </div>
                </div>

                <TickerTape />

                <h1 className='heads'>OUR MISSIONS</h1>
                <div ref={missionsRef}>
                    <MMM />
                </div>

                <h1 className='heads' ref={ngosRef}>OUR TRUSTED NGO PARTNERS</h1>
                <div >
                    <Bands />
                </div>

                <h1 className='heads'>FAQs</h1>
                <div >
                    <FAQs/>
                </div>
            </div>

            

            {/* Pass the scrollToSection function and refs to the Footer */}
            <Footer
                scrollToMissions={() => scrollToSection(missionsRef)}
                scrollToNgos={() => scrollToSection(ngosRef)}
                scrollToCauses={() => scrollToSection(causesRef)}
            />
        </div>
    );
}
