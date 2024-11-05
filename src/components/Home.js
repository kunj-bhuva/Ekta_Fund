import React from 'react';
import './Home.css';  // Import the CSS for the Home component
import Header from './Header.js';  // Import the Header component
import Footer from './Footer.js';  // Import the Footer component


export default function Home() {


export default function Body() {
    return (
        <div className="Home">
            <Header />
            <div className="Body">
                {/* Add your main content here */}
            </div>
            <Footer />
        </div>
    );
}
