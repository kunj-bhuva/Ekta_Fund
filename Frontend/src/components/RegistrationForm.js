import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegistrationForm.css";

export default function RegistrationForm() {
  const navigate = useNavigate();
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
    updated12A: null,
    updated80G: null,
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await fetch("http://localhost:5000/api/ngos/register", {
        method: "POST",
        body: formDataToSend,
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

    setTimeout(() => {
      setIsProcessing(false);
      navigate("/Login_NGO");
    }, 2000);
  };

  return (
    <div className="registration-form-unique">
      <div className="form-header-unique">
        <h3>NGO Registration</h3>
      </div>

      <form className="form-body-unique" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter NGO Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Headquarters Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="causeArea"
          placeholder="Cause Area"
          value={formData.causeArea}
          onChange={handleChange}
          required
        />
        <textarea
          name="vision"
          placeholder="Vision of your Organization"
          value={formData.vision}
          onChange={handleChange}
          required
        ></textarea>
        <textarea
          name="mission"
          placeholder="Mission of your Organization"
          value={formData.mission}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="text"
          name="contactPerson"
          placeholder="Contact Person Name"
          value={formData.contactPerson}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="mobileNumber"
          placeholder="Contact Number"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
          pattern="[0-9]{10}"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        ></textarea>
        <label>
          Upload Updated 12A:
          <input
            type="file"
            name="updated12A"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Upload Updated 80G:
          <input
            type="file"
            name="updated80G"
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" disabled={isProcessing}>
          {isProcessing ? "Processing..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
