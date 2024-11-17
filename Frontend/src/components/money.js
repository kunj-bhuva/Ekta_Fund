import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation to get passed state
import "./money.css";

const DonationForm = () => {
  const [formData, setFormData] = useState({
    name: "", // Donor name
    mobileNumber: "", // Donor's phone number
    amount: "", // Donation amount
    ngoName: "", // NGO name
  });
  const [loading, setLoading] = useState(false); // State to handle loading
  const navigate = useNavigate(); // Initialize useNavigate
  const location = useLocation(); // Use location to access passed state

  useEffect(() => {
    // Get NGO name from state or localStorage
    const ngoName = location.state?.ngoName || localStorage.getItem("selectedNGO") || "";
    setFormData((prevData) => ({ ...prevData, ngoName }));

    // Save NGO name to localStorage for fallback
    if (ngoName) {
      localStorage.setItem("selectedNGO", ngoName);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response = await fetch("http://localhost:5000/api/donations/donate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send the formData with correct naming
      });
  
      if (response.ok) {
        const blob = await response.blob(); // Get the PDF as a Blob
        const url = window.URL.createObjectURL(blob); // Create a URL for the Blob
        const a = document.createElement("a"); // Create an anchor element
        a.href = url;
        a.download = `Donation_Receipt_${formData.name}.pdf`; // Set the filename
        a.click(); // Trigger the download
        window.URL.revokeObjectURL(url); // Cleanup the URL
  
        alert(
          `Thank you, ${formData.name}, for donating ₹${formData.amount} to ${formData.ngoName}!`
        );
        navigate("/"); // Redirect to the home page
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to connect to the server. Please try again.");
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
          Mobile Number:
          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
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
        <label className="donation-form-label">
          NGO Name:
          <input
            type="text"
            name="ngoName"
            value={formData.ngoName}
            className="donation-form-input"
            readOnly // Make this field read-only
          />
        </label>
        <button
          type="submit"
          className="donation-form-button"
          disabled={loading} // Disable button while loading
        >
          {loading ? "Processing..." : "Donate Now"}
        </button>
      </form>
    </div>
  );
};

export default DonationForm;
