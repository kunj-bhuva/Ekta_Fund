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

  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  // Input validation function
  const validateInputs = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "NGO name is required.";
    if (!formData.location.trim()) newErrors.location = "Location is required.";
    if (!formData.causeArea.trim()) newErrors.causeArea = "Cause area is required.";
    if (!formData.vision.trim()) newErrors.vision = "Vision is required.";
    if (!formData.mission.trim()) newErrors.mission = "Mission is required.";
    if (!formData.contactPerson.trim()) newErrors.contactPerson = "Contact person is required.";
    if (!/^\d{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = "Invalid mobile number. Must be 10 digits.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format.";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!formData.updated12A) newErrors.updated12A = "Updated 12A document is required.";
    if (!formData.updated80G) newErrors.updated80G = "Updated 80G document is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      return; // Exit if there are validation errors
    }

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
        navigate("/Login"); // Navigate only on successful registration
      } else {
        alert(`Error: ${result.message || "Failed to register NGO"}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      setIsProcessing(false);
    }
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
        {errors.name && <p className="error-text">{errors.name}</p>}

        <input
          type="text"
          name="location"
          placeholder="Headquarters Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        {errors.location && <p className="error-text">{errors.location}</p>}

        <input
          type="text"
          name="causeArea"
          placeholder="Cause Area"
          value={formData.causeArea}
          onChange={handleChange}
          required
        />
        {errors.causeArea && <p className="error-text">{errors.causeArea}</p>}

        <textarea
          name="vision"
          placeholder="Vision of your Organization"
          value={formData.vision}
          onChange={handleChange}
          required
        ></textarea>
        {errors.vision && <p className="error-text">{errors.vision}</p>}

        <textarea
          name="mission"
          placeholder="Mission of your Organization"
          value={formData.mission}
          onChange={handleChange}
          required
        ></textarea>
        {errors.mission && <p className="error-text">{errors.mission}</p>}

        <input
          type="text"
          name="contactPerson"
          placeholder="Contact Person Name"
          value={formData.contactPerson}
          onChange={handleChange}
          required
        />
        {errors.contactPerson && <p className="error-text">{errors.contactPerson}</p>}

        <input
          type="tel"
          name="mobileNumber"
          placeholder="Contact Number"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
          pattern="[0-9]{10}"
        />
        {errors.mobileNumber && <p className="error-text">{errors.mobileNumber}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="error-text">{errors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <p className="error-text">{errors.password}</p>}

        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        ></textarea>
        {errors.address && <p className="error-text">{errors.address}</p>}

        <label>
          Upload Updated 12A:
          <input
            type="file"
            name="updated12A"
            onChange={handleChange}
            required
          />
        </label>
        {errors.updated12A && <p className="error-text">{errors.updated12A}</p>}

        <label>
          Upload Updated 80G:
          <input
            type="file"
            name="updated80G"
            onChange={handleChange}
            required
          />
        </label>
        {errors.updated80G && <p className="error-text">{errors.updated80G}</p>}

        <button type="submit" disabled={isProcessing}>
          {isProcessing ? "Processing..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
