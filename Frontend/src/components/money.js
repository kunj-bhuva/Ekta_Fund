import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './money.css';

const DonationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    amount: '',
  });
  const [loading, setLoading] = useState(false); // State to handle loading
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Save data to localStorage
    localStorage.setItem('donationData', JSON.stringify(formData));

    // Send data to a dummy API
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('API Response:', data);

        alert(`Thank you, ${formData.name}, for donating ₹${formData.amount}!`);
        navigate('/'); // Redirect to home page
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to connect to the server. Please try again.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="donation-form-container">
      <h1 className="donation-form-title">Make a Donation</h1>
      <form className="donation-form-form" onSubmit={handleSubmit}>
        <label className="donation-form-label">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="donation-form-input"
            placeholder="Enter your full name"
            required
          />
        </label>
        <label className="donation-form-label">
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="donation-form-input"
            placeholder="Enter your phone number"
            pattern="[0-9]{10}"
            required
          />
        </label>
        <label className="donation-form-label">
          Donation Amount (₹):
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="donation-form-input"
            placeholder="Enter donation amount"
            min="1"
            required
          />
        </label>
        <button
          type="submit"
          className="donation-form-button"
          disabled={loading} // Disable button while loading
        >
          {loading ? 'Processing...' : 'Donate Now'}
        </button>
      </form>
    </div>
  );
};

export default DonationForm;
