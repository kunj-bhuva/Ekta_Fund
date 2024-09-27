import React from 'react';
import './Body.css';  // Import the CSS for the Header component 
import loginImage from '../images/Mobile-login-Cristina 1.png';


export default function Body() {
    return (
        <div className="Body">
            <div className="content">
                <h1>Register Your <br/>Organization </h1>
                <img src={loginImage} alt="loginImage" className="login-image" />
            </div>
        </div>
    );
}