import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // Importing the same CSS as the Login page
import logo from "../images/logo_big.png"; // Same logo

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
      const response = await axios.post('http://localhost:5000/api/forget-password/reset', {
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
    <section className="vh-100" style={{ backgroundColor: '#73e0cc' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '1rem' }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: '1rem 0 0 1rem' }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleSubmit}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: '#ff6219' }}
                        ></i>
                        <span className="h1 fw-bold mb-0">
                          <img src={logo} alt="Logo" />
                        </span>
                      </div>

                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                        Reset Password
                      </h5>

                      {error && <div className="alert alert-danger">{error}</div>}
                      {message && <div className="alert alert-success">{message}</div>}

                      {/* Email Field */}
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="emailInput"
                          className="form-control form-control-lg"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <label className="form-label" htmlFor="emailInput">
                          Enter your email address
                        </label>
                      </div>

                      {/* Old Password Field */}
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="oldPasswordInput"
                          className="form-control form-control-lg"
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
                          className="form-control form-control-lg"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          required
                        />
                        <label className="form-label" htmlFor="newPasswordInput">
                          Enter your new password
                        </label>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-1 mb-4">
                        <button type="submit" className="btn btn-dark btn-lg btn-block">
                          Reset Password
                        </button>
                      </div>

                      <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                        Remember your password?{' '}
                        <a href="#!" style={{ color: '#393f81' }} onClick={() => navigate('/login')}>
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
