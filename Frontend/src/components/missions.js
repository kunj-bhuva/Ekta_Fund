import React, { useState } from 'react';
import imagePaths from './missionphoto.js';
import seem from '../images/seemore.png';
import seeless from '../images/seeless.png'; // Import the See Less image
import './missions.css';

const Missions = () => {
    const [showAll, setShowAll] = useState(false);

    // Limit the number of images shown initially to 6
    const imagesToDisplay = showAll ? imagePaths : imagePaths.slice(0, 6);

    const handleToggleClick = () => {
        setShowAll(prevShowAll => !prevShowAll); // Toggle between show all and show 6
    };

    return (
        <div className="mi">
            <div className='missions'>
                {imagesToDisplay.map((imagePath, index) => (
                    <img key={index} src={imagePath} alt={`Mission ${index + 1}`} className="mission-image" />
                ))}
            </div>
            <div className="seem" onClick={handleToggleClick}>
                <img src={showAll ? seeless : seem} alt={showAll ? "See less" : "See more"} className="see-more-image" />
            </div>
        </div>
    );
};

export default Missions;
