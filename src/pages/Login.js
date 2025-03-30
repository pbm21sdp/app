import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import '../styles/PawBackground.css'; 
import { FaPaw, FaUserShield } from 'react-icons/fa';
import PawBackground from '../components/PawBackground'; 

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login-wrapper">
      <PawBackground />
      <div className="login-container">
        <div className="header-section">
          <h1 className="title-gradient">Adopt love, adopt a life</h1>
          <p className="subtitle">Choose your entry point to continue</p>
        </div>

        <div className="auth-buttons">
          <button 
            className="auth-btn visitor"
            onClick={() => navigate('/animals')}
          >
            <FaPaw className="btn-icon" />
            <span>Continue as Guest</span>
          </button>
          
          <button 
            className="auth-btn staff"
            onClick={() => navigate('/employee-login')}
          >
            <FaUserShield className="btn-icon" />
            <span>Staff Portal</span>
          </button>
        </div>

        <div className="decorative-line"></div>
        <p className="security-note">
          🔒 Your interactions are securely encrypted
        </p>
      </div>
    </div>
  );
};

export default Login;