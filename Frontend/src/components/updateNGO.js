import React, { useState, useEffect } from "react";
import "./updateNGO.css";

export default function UpdateNGO() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    causeArea: "",
    vision: "",
    mission: "",
    contactPerson: "",
    mobileNumber: "",
    email: "",
    address: "",
    updated12A: null, 
    updated80G: null,
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value, 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

   
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    const email = localStorage.getItem("loggedInEmail");
    const password = prompt("Enter your password to update your profile:");  // Ask for password

    if (!password) {
      setError("Password is required to update your profile.");
      setLoading(false);
      return;
    }

    // Add email and password to the form data
    formDataToSend.append("email", email);
    formDataToSend.append("password", password);

    try {
      const response = await fetch(`https://ektafund-backend.onrender.com/api/ngos/profile`, {
        method: "PUT",
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok) {
        alert("NGO profile updated successfully!");
      } else {
        setError(result.message || "Failed to update NGO profile.");
      }
    } catch (error) {
      setError("An error occurred while updating the profile.");
      console.error("Error updating NGO profile:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const email = localStorage.getItem("loggedInEmail");
  
    if (email) {
      setFormData((prevData) => ({
        ...prevData,
        email, // Explicitly set the email
      }));
    } else {
      setError("No email found in local storage.");
    }
  
    const fetchNGODetails = async () => {
      try {
        const response = await fetch(`https://ektafund-backend.onrender.com/api/ngos/profile/`);
        const data = await response.json();
        if (response.ok) {
          setFormData((prevData) => ({
            ...prevData,
            ...data,
            email, // Ensure email stays intact
          }));
        } else {
          setError(data.message || "Failed to fetch NGO details.");
        }
      } catch (error) {
        setError("Fill the below details to update your profile.");
        console.error("Error fetching NGO details:", error);
      }
    };
  
    fetchNGODetails();
  }, []);
  

  return (
    <div className="update-ngo">
      <div className="section about-one">
        <div className="box"></div>
        <h3 className="update-ngo-h3">Update NGO Profile</h3>
      </div>

      {error && <div className="error-message">{error}</div>}

      <form className="inputs" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter NGO Name"
          className="input"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Headquarters Location"
          className="input"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="causeArea"
          placeholder="Cause Area"
          className="input"
          value={formData.causeArea}
          onChange={handleChange}
          required
        />

        <textarea
          name="vision"
          placeholder="Vision of your Organization"
          className="input"
          value={formData.vision}
          onChange={handleChange}
          required
          maxLength="500"
        ></textarea>

        <textarea
          name="mission"
          placeholder="Mission of your Organization"
          className="input"
          value={formData.mission}
          onChange={handleChange}
          required
          maxLength="500"
        ></textarea>
        
        <input
          type="text"
          name="contactPerson"
          placeholder="Contact Person Name"
          className="input"
          value={formData.contactPerson}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="mobileNumber"
          placeholder="Contact Number"
          className="input"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
          pattern="[0-9]{10}"
        />

        <input
          type="email"
          name="email"
          className="input"
          value={formData.email}
          readOnly
        />

        <textarea
          name="address"
          placeholder="Address"
          className="input"
          value={formData.address}
          onChange={handleChange}
          required
          maxLength="500"
        ></textarea>

        {/* File input for updated12A */}
        <label>
          Upload Updated 12A:
          <input
            type="file"
            name="updated12A"
            className="input"
            onChange={handleChange}
          />
        </label>

        {/* File input for updated80G */}
        <label>
          Upload Updated 80G:
          <input
            type="file"
            name="updated80G"
            className="input"
            onChange={handleChange}
          />
        </label>

        <button type="submit" id="submit" disabled={loading}>
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
}
