import React from 'react';
import './registerpage.css';  // Import the CSS for the Header component 
import loginImage from '../images/Mobile-login-Cristina 1.png';
import RegistrationForm from './RegistrationForm';


export default function Body() {
    return (
        <div className="Bo" style={{ backgroundColor: 'white', important: 'true' }}>
            <div className="content">
            <div className="image_line" style={{ display: 'flex', alignItems: 'center' }}>
                <div className="lines" style={{ flex: '1' }}>
                    <h1 className="content-headline">Register Your <br />Organization</h1>
                    <p>Fill out the form below to register your <br /> Organization with EktaFund</p>
                </div>
                    <img src={loginImage} alt="loginImage" className="login-image" style={{ flex: '2', maxWidth: '100%' }} />
                </div>

                <RegistrationForm/>
            </div>
        </div>
    );
}


