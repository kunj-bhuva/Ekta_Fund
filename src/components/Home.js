<<<<<<< Updated upstream
import React from 'react';
import './Home.css';  // Import the CSS for the Home component
import Header from './Header.js';  // Import the Header component
=======
import React, { useState, useEffect } from 'react';
>>>>>>> Stashed changes

import 'bootstrap/dist/css/bootstrap.min.css';

<<<<<<< Updated upstream
export default function Home() {
=======
import './Home.css';
import IndividualIntervalsExample from './slider.js';
import Header from './Header_white';

export default function Body() {
    

>>>>>>> Stashed changes
    return (
        <div>
            <Header />
<<<<<<< Updated upstream
            <div className="Body">
                {/* Add your main content here */}
            </div>
=======
            <IndividualIntervalsExample />
>>>>>>> Stashed changes
        </div>
    );
}
