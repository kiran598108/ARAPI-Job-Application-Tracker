import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Import the CSS file

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., API call to authenticate user)
    console.log('Logging in with:', email, password);
    localStorage.setItem('isAuthenticated', 'true');
    navigate('/'); // Redirect to home page after login
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
  
    <nav>
    <Link to="/" className="logo">Job Tracker</Link>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/add-job">Add Job</Link>
      {localStorage.getItem('isAuthenticated') ? (
        <button onClick={handleLogout} className="logout-button">Logout</button>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </>
      )}
    </div>
  </nav>
  </div>
  );
};

export default LoginPage;