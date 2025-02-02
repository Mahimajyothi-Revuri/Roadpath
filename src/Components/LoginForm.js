import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

function LoginForm() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  const validateFields = () => {
    const tempErrors = {};
    const { email, password, confirmPassword } = formData;

    // Check if all fields are filled
    if (!email || !password || (!isLogin && !confirmPassword)) {
      tempErrors.global = 'All fields must be filled.';
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!email) tempErrors.email = 'Email is required.';
    else if (!emailRegex.test(email)) tempErrors.email = 'Email must be in the format of @gmail.com.';

    // Password validation
    if (!password) tempErrors.password = 'Password is required.';
    else if (password.length < 6) tempErrors.password = 'Password must be at least 6 characters long.';

    // Confirm password validation for registration
    if (!isLogin) {
      if (!confirmPassword) tempErrors.confirmPassword = 'Confirm Password is required.';
      else if (confirmPassword !== password) tempErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      const user = { email: formData.email, password: formData.password };
      localStorage.setItem('user', JSON.stringify(user)); // Save user data to localStorage
      alert(isLogin ? 'Logged in successfully' : 'Signed up successfully');
      setFormData({
        email: '',
        password: '',
        confirmPassword: '',
      });
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSwitch = () => {
    setIsLogin(!isLogin);
    setErrors({});
  };

  const handleClose = () => {
    navigate(-1);  // Navigates back to the previous page
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h1><b>WHAT'S NEXT</b></h1>
          <span className="close-mark" role="button" aria-label="Close" onClick={handleClose}>✖</span>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}

          {!isLogin && (
            <>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
            </>
          )}

          <button type="submit">{isLogin ? 'Sign In' : 'Register'}</button>
          {errors.global && <p className="error">{errors.global}</p>}

          <div className="login-footer">
            {isLogin ? (
              <>
                <a href="#">Forgot Password?</a>
                <p>
                  New user? <a href="#" onClick={handleSwitch}>Register</a>
                </p>
              </>
            ) : (
              <p>
                Already have an account? <a href="#" onClick={handleSwitch}>Login</a>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;