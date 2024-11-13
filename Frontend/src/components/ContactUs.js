import React, { useState } from 'react';
import Header_white from './Header_white';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
    console.log('Form submitted:', formData);
    // Here you can add form submission logic
  };

  return (
    <>
    <Header_white/>
    <div style={{ fontFamily: 'Outfit, sans-serif', padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>Contact Us</h2>
      <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#555' }}>
        We’d love to hear from you! Please fill out the form below to reach out.
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ padding: '1rem', fontSize: '1rem', borderRadius: '5px', border: '1px solid #ccc' }}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ padding: '1rem', fontSize: '1rem', borderRadius: '5px', border: '1px solid #ccc' }}
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          style={{ padding: '1rem', fontSize: '1rem', borderRadius: '5px', border: '1px solid #ccc' }}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          style={{ padding: '1rem', fontSize: '1rem', borderRadius: '5px', border: '1px solid #ccc' }}
          required
        />

        <button
          type="submit"
          style={{
            padding: '1rem',
            fontSize: '1.2rem',
            color: '#fff',
            backgroundColor: '#D9534F',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    </div>
    </>
  );
};

export default ContactUs;
