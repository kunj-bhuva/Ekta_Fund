import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../images/white.png";
import "./Login.css";
import axios from "axios";
import log from '../images/Mobile-login-Cristina 1.png';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (!email || !oldPassword || !newPassword) {
      setError('All fields are required.');
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (newPassword.length < 6) {
      setError('New password must be at least 6 characters long.');
      return;
    }

    try {
      // Send request to backend to update the password
      const response = await axios.post('https://ektafund-backend.onrender.com/api/forget-password/reset', {
        email,
        oldPassword,
        newPassword,
      });

      if (response.status === 200) {
        setMessage('Password updated successfully.');
        setError('');
        // Redirect to the login page after success
        setTimeout(() => navigate('/login'), 3000);
      } else {
        setError('Failed to update password. Please try again.');
      }
    } catch (err) {
      setError('Invalid email or old password.');
      console.error(err);
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: '#73e1c6' }}>
      <div className="container py-4 h-104">
        <div className="row d-flex justify-content-center align-items-center h-99">
          <div className="col col-xl-9">
            <div className="card" style={{ borderRadius: '0.99rem' }}>
              <div className="row g-0">
                <div className="col-md-5 col-lg-4 d-none d-md-block" style={{ marginTop: '7rem', marginLeft:'2rem',width:'20rem' }} >
                  <img
                    src={log}
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: '1rem 0 0 1rem' }}
                  />
                </div>
                <div className="col-md-7 col-lg-6 d-flex align-items-center xxx">
                  <div className="card-body p-3 p-lg-4 text-black">
                    <form onSubmit={handleSubmit}>
                      <div className="d-flex align-items-center mb-2 pb-1">
                        <i
                          className="fas fa-cubes fa-1.98x me-2"
                          style={{ color: '#f0631e' }}
                        ></i>
                        <span className="h1 fw-bold mb-0">
                          <img src={logo} alt="Logo" />
                        </span>
                      </div>

                      <h5 className="fw-normal mb-2 pb-2" style={{ letterSpacing: '0.99px' }}>
                        Reset Password
                      </h5>

                      {error && <div className="alert alert-danger">{error}</div>}
                      {message && <div className="alert alert-success">{message}</div>}

                      {/* Email Field */}
                      <div className="form-outline mb-3">
                        <input
                          type="email"
                          id="emailInput"
                          className="form-control form-control-md"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <label className="form-label" htmlFor="emailInput">
                          Enter your email address
                        </label>
                      </div>

                      {/* Old Password Field */}
                      <div className="form-outline mb-3">
                        <input
                          type="password"
                          id="oldPasswordInput"
                          className="form-control form-control-md"
                          value={oldPassword}
                          onChange={(e) => setOldPassword(e.target.value)}
                          required
                        />
                        <label className="form-label" htmlFor="oldPasswordInput">
                          Enter your old password
                        </label>
                      </div>

                      {/* New Password Field */}
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="newPasswordInput"
                          className="form-control form-control-md"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          required
                        />
                        <label className="form-label" htmlFor="newPasswordInput">
                          Enter your new password
                        </label>
                      </div>

                      {/* Submit Button */}
                      <div className=" mb-2">
                        <button type="submit" className="btn btn-dark btn-md btn-block">
                          Reset Password
                        </button>
                      </div>

                      <p className="mb-5 pb-lg-2 remember" style={{ color: '#3d4960', fontSize: '1.32rem' }}>
                        Remember your password?{' '}
                        <a href="#!" style={{ color: '#3d4960' }} onClick={() => navigate('/login')}>
                          Login here
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
