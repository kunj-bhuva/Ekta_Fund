import React, { useState } from 'react';
import Header_white from './Header_white';
import './DonorReview.css';

const DonorReview = () => {
  const [formData, setFormData] = useState({
    donorName: '',
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
    console.log('Donor Review Submitted:', formData);
    // Add submission logic here
  };

  return (
    <>
      <Header_white />
      <div className="donorreview-container">
        <h2 className="donorreview-title">Donor Review</h2>
        <form className="donorreview-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="donorName"
            placeholder="Donor Name"
            value={formData.donorName}
            onChange={handleChange}
            className="donorreview-input"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="donorreview-textarea"
            rows="5"
            required
          />
          <button type="submit" className="donorreview-submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default DonorReview;
