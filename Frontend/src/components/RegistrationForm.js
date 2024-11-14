import React, { useState } from 'react';
import './RegistrationForm.css';

export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        organizationName: '',
        headquartersLocation: '',
        activeSince: '',
        contactPersonName: '',
        contactPersonNumber: '',
        email: '',
        password: '',
        description: '',
        address: '',
        sectors: '',
        vision: '',
        mission: '',
    });
    
    const [file, setFile] = useState(null); // For storing the uploaded file

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]); // Save the selected file to state
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a FormData object to send both the form data and file
        const formDataToSubmit = new FormData();

        // Append all text input fields
        for (const key in formData) {
            formDataToSubmit.append(key, formData[key]);
        }

        // Append the file if it exists
        if (file) {
            formDataToSubmit.append("file", file);
        }

        // Here you would send `formDataToSubmit` to your server, e.g., using fetch or axios.
        console.log('Form data:', formData);
        console.log('File:', file);
        
        // Example with fetch:
        // fetch('/your-api-endpoint', {
        //     method: 'POST',
        //     body: formDataToSubmit,
        // })
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch(error => console.error(error));
    };

    return (
        <div className='registration-form'>
            <div className='section about-one'>
                <div className='box'></div>
                <h3 className='Registration-form-h3'>About</h3>
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
                    type="email"
                    name="email"
                    placeholder=" Email"
                    className='description'
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder=" Enter your Password"
                    className='description'
                    value={formData.password}
                    onChange={handleChange}
                    required
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
                    <h3 className='Registration-form-h3'>Cause Area</h3>
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
                    <h3 className='Registration-form-h3'>Vision & Mission</h3>
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
                    placeholder=" Mission of your Organization"
                    className='description'
                    value={formData.mission}
                    onChange={handleChange}
                />

                {/* File upload input */}

                <div className='section'>
                    <div className='box'></div>
                    <h3 className='Registration-form-h3'>Upload 12A file</h3>
                </div>
                <input
                    type="file"
                    name="file"
                    accept=".pdf,.jpeg,.jpg"  // Accept only PDF and JPEG files
                    className='file-input'
                    onChange={handleFileChange}
                />

                <div className='section'>
                    <div className='box'></div>
                    <h3 className='Registration-form-h3'>Upload 80G file</h3>
                </div>

                <input
                    type="file"
                    name="file"
                    accept=".pdf,.jpeg,.jpg"  // Accept only PDF and JPEG files
                    className='file-input'
                    onChange={handleFileChange}
                />
                
                <button type="submit" id='submit'>Submit</button>
            </form>
        </div>
    );
}
