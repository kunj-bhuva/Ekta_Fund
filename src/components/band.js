import React from 'react';
import images from './bandphoto'; // Import images array from bandphoto.js
import './bands.css'; // Import CSS file for styling

function Bands() {
    return (
        <div className="band-container">
            {images.map((image, index) => (
                <img 
                    key={index} 
                    src={image} 
                    alt={`Band Image ${index + 1}`} 
                    className="band-image" 
                />
            ))}
        </div>
    );
}

export default Bands;
