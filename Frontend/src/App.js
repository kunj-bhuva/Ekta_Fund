import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login.js';
import ForgotPassword from './components/Forgotpassword.js';
import Register from './components/Registerhere.js';
import Home from './components/Home.js';
import Donation_page from './components/Donation_page.js';
// import NGOregistration from './components/NGOregistration.js';
import ContactUs from './components/ContactUs.js';  // Import ContactUs component
import About from './components/about.js';  // Import About component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/donate" element={<Donation_page />} />
        <Route path="/contact-us" element={<ContactUs />} />  {/* Route for Contact Us */}
        <Route path="/about" element={<About />} />  {/* Route for About */}
      </Routes>
    </Router>
  );
}

export default App;
