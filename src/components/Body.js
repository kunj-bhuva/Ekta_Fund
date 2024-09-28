import React from 'react';
import './Body.css';  // Import the CSS for the Header component 
import loginImage from '../images/Mobile-login-Cristina 1.png';
import RegistrationForm from './RegistrationForm';


export default function Body() {
    return (
        <div className="Body">
            <div className="content">
                <h1 className="content-headline">Register Your <br/>Organization </h1>
                <p> Fill out the form below to register your <br/> Organization with EktaFund</p>
                <img src={loginImage} alt="loginImage" className="login-image" />
                <RegistrationForm/>
            </div>
        </div>
    );
}