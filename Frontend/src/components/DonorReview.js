import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header_white from "./Header_white";
import "./DonorReview.css";

const DonorReview = () => {
  const location = useLocation();
  const { ngoName, donorName } = location.state || { ngoName: "", donorName: "" };

  const [formData, setFormData] = useState({
    donorName: donorName || "",
    message: "",
    ngoName: ngoName || "",
  });

  const [responseMessage, setResponseMessage] = useState(""); // To display server response

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
      const response = await fetch("http://localhost:5000/api/admin/reviews/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setResponseMessage("Review submitted successfully!");
        console.log("Response from server:", data);
        setFormData({
          donorName: donorName || "",
          message: "",
          ngoName: ngoName || "",
        });
      } else {
        const errorData = await response.json();
        setResponseMessage(`Failed to submit review: ${errorData.message}`);
        console.error("Error from server:", errorData);
      }
    } catch (error) {
      setResponseMessage("An error occurred while submitting the review.");
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Header_white />
      <div className="donorreview-container">
        <h2 className="donorreview-title">Donor Review</h2>
        <form className="donorreview-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="ngoName"
            value={formData.ngoName}
            onChange={handleChange}
            className="donorreview-input"
            disabled
          />
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
        {responseMessage && <p className="response-message">{responseMessage}</p>}
      </div>
    </>
  );
};

export default DonorReview;
