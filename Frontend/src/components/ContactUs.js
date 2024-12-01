import React, { useState } from 'react';
import Header_white from './Header_white';
import './WebsiteReview.css';

const WebsiteReview = () => {
  const [formData, setFormData] = useState({
    reviewerType: 'NGO', // Default value
    name: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://ektafund-backend.onrender.com/api/reviews/website-reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          reviewerName: formData.name,
          reviewerType: formData.reviewerType,
          message: formData.message,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setStatusMessage(data.message);
        setFormData({
          reviewerType: 'NGO', // Reset to default
          name: '',
          message: '',
        });
      } else {
        const errorData = await response.json();
        setStatusMessage(errorData.message || 'An error occurred.');
      }
    } catch (error) {
      setStatusMessage('Error submitting review. Please try again.');
    }
  };

  return (
    <>
      <Header_white />
      <div className="websitereview-container">
        <h2 className="websitereview-title">Contact Us</h2>
        <form className="websitereview-form" onSubmit={handleSubmit}>
          <select
            name="reviewerType"
            value={formData.reviewerType}
            onChange={handleChange}
            className="websitereview-select"
          >
            <option value="NGO">NGO</option>
            <option value="Donor">Donor</option>
          </select>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="websitereview-input"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="websitereview-textarea"
            rows="5"
            required
          />
          <button type="submit" className="websitereview-submit">
            Submit
          </button>
        </form>
        {statusMessage && <p className="websitereview-status">{statusMessage}</p>}
      </div>
    </>
  );
};

export default WebsiteReview;
