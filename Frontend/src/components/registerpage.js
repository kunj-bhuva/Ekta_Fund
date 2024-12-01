import React from 'react';
import './registerpage.css';  // Import the CSS for Body component
import loginImage from '../images/Mobile-login-Cristina 1.png';
import RegistrationForm from './RegistrationForm';

export default function Body() {
    return (
        <div className="body-container-unique">
            <div className="content-unique">
                <div className="image-line-unique">
                    <div className="text-section-unique">
                        <h1 className="content-headline-unique">Register Your <br /> Organization</h1>
                        <p className="content-description-unique">
                            Fill out the form below to register your <br /> organization with EktaFund
                        </p>
                    </div>
                    <img src={loginImage} alt="Illustration" className="login-image-unique" />
                </div>
                <RegistrationForm />
            </div>
        </div>
    );
}
