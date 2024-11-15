import React, { useState } from "react";
import "./RegistrationForm.css";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    causeArea: "",
    vision: "",
    mission: "",
    contactPerson: "",
    mobileNumber: "",
    email: "",
    password: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/ngos/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("NGO registered successfully!");
      } else {
        alert(`Error: ${result.message || "Failed to register NGO"}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="registration-form">
      <div className="section about-one">
        <div className="box"></div>
        <h3 className="registration-form-h3">NGO Registration</h3>
      </div>

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
          placeholder="Email"
          className="input"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input"
          value={formData.password}
          onChange={handleChange}
          required
          minLength="6"
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

       

        <button type="submit" id="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
