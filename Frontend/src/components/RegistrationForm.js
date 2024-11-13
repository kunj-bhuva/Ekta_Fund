

import React, { useState } from 'react';
import './RegistrationForm.css';

export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        organizationName: '',
        headquartersLocation: '',
        activeSince: '',
        option: '',
        description: '',
        sectors: '',
        otherSectors: '',
        vision: '',
        mission: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log('Form data:', formData);
    };

    return (
        <div className='registration-form'>
            <div className='section about-one'>
                <div className='box'></div>
                <h3 classname='Registration-form-h3'>About</h3>
            </div>

            <form className="inputs" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="organizationName"
                    placeholder=" Enter Organization Name"
                    className='input'
                    value={formData.organizationName}
                    onChange={handleChange}
                    required
                />

                

                <input
                    type="text"
                    name="activeSince"
                    placeholder=" Active Since (Year)"
                    className='input'
                    value={formData.activeSince}
                    onChange={handleChange}
                    required
                />


                <input
                    type="text"
                    name="contactPersonName"
                    placeholder=" Enter Contact Person Name"
                    className='input'
                    value={formData.contactPersonName}
                    onChange={handleChange}
                    required
                />



                <input
                    type="tel"
                    name="contactPersonNumber"
                    placeholder=" Enter Contact Number"
                    className='input'
                    value={formData.contactPersonNumber}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="email"
                    placeholder=" Email"
                    className='description'
                    value={formData.email}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="password"
                    placeholder=" Enter your Password"
                    className='description'
                    value={formData.password}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="headquartersLocation"
                    placeholder=" Headquarters Location"
                    className='description'
                    value={formData.headquartersLocation}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="description"
                    placeholder=" Description"
                    className='description'
                    value={formData.description}
                    onChange={handleChange}
                />


                <input
                    type="text"
                    name="address"
                    placeholder=" Address"
                    className='description'
                    value={formData.address}
                    onChange={handleChange}
                />
                
                <div className='section'>
                <div className='box'></div>
                <h3 Registration-form-h3> Cause Area</h3>
            </div>

                <input
                    type="text"
                    name="sectors"
                    placeholder=" Sectors"
                    className='description'
                    value={formData.sectors}
                    onChange={handleChange}
                />
                

                <div className='section'>
                    <div className='box'></div>
                    <h3 Registration-form-h3>Vision & Missions</h3>
                </div>

                <input
                    type="text"
                    name="vision"
                    placeholder=" Vision of your Organization"
                    className='description'
                    value={formData.vision}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="mission"
                    placeholder=" Missions of your Organization"
                    className='description'
                    value={formData.mission}
                    onChange={handleChange}
                />
                
                <br/>
                
                <button type="submit" id='submit'>Submit</button>
            </form>
        </div>
    );
}

