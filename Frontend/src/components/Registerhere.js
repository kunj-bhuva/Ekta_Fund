import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Make sure to import useNavigate

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Form validation
    if (!name || !email || !password || !contactNumber) {
      setError('All fields are required!');
      return;
    }
  
    setError(''); // Clear previous errors
  
    // Create an object with the form data
    const formData = {
      name,
      email,
      password,
      contactNumber,
    };
  
    // Save to localStorage (for demonstration purposes)
    localStorage.setItem('userData', JSON.stringify(formData));
    console.log('User data saved to localStorage:', formData);
  
    try {
      // Make API request to register the user
      const response = await axios.post('http://localhost:5000/api/donors/register', formData);
      // console.log(response);
  
      // On success, show message and redirect to login
      setMessage('Registration successful! Please log in.');
      setError(''); // Clear any previous errors
  
      // Clear the form fields
      setName('');
      setEmail('');
      setPassword('');
      setContactNumber('');
      // Redirect to login after a short delay
      setTimeout(() => {
        navigate('/login');  // Redirect to login page
      }, 1000);  // Set the timeout to 1000ms (1 second)
      
    } catch (err) {
      // Handle errors from the API call
      setError(err.response?.data?.message || 'An error occurred during registration.');
      console.error('API error:', err);
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
                    alt="register form"
                    className="img-fluid"
                    style={{ borderRadius: '1rem 0 0 1rem' }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleSubmit}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <span className="h1 fw-bold mb-0">Register</span>
                      </div>

                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                        Register a New Account
                      </h5>

                      {/* Error and Success Messages */}
                      {error && <div className="alert alert-danger">{error}</div>}
                      {message && <div className="alert alert-success">{message}</div>}

                      {/* Name Field */}
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="formName"
                          className="form-control form-control-lg"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                        <label className="form-label" htmlFor="formName">
                          Name
                        </label>
                      </div>

                      {/* Email Field */}
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <label className="form-label" htmlFor="form2Example17">
                          Email address
                        </label>
                      </div>

                      {/* Password Field */}
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label>
                      </div>

                      {/* Contact Number Field */}
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="formcontactNumber"
                          className="form-control form-control-lg"
                          value={contactNumber}
                          onChange={(e) => setContactNumber(e.target.value)}
                          required
                        />
                        <label className="form-label" htmlFor="formcontactNumber">
                          Contact Number
                        </label>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-1 mb-4">
                        <button type="submit" className="btn btn-dark btn-lg btn-block">
                          Register
                        </button>
                      </div>

                      {/* Link to login page */}
                      <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                        Already have an account?{' '}
                        <a href="#!" style={{ color: '#393f81' }}>
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
