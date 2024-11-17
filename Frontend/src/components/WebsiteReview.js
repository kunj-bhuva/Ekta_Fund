import React, { useState } from 'react';
import Header_white from './Header_white';
import './WebsiteReview.css';

const WebsiteReview = () => {
  const [formData, setFormData] = useState({
    reviewerType: 'NGO', // Default value
    name: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Website Review Submitted:', formData);
    // Add submission logic here
  };

  return (
    <>
      <Header_white />
      <div className="websitereview-container">
        <h2 className="websitereview-title">Website Review</h2>
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
      </div>
    </>
  );
};

export default WebsiteReview;
