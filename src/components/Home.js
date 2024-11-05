import React from 'react';
import './Home.css';  // Import the CSS for the Home component
import Header from './Header.js';  // Import the Header component


export default function Home() {
    return (
        <div className="Home">
            <Header />
            <div className="Body">
                {/* Add your main content here */}
            </div>
        </div>
    );
}
