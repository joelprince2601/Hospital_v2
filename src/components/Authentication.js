// src/components/Authentication.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Authentication.css";

function Authentication() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/patients"); // Navigate to Patient Management for Sign Up
  };

  const handleLogIn = () => {
    navigate("/appointments"); // Navigate to Appointment Scheduling for Log In
  };

  return (
    <div className="auth-container">
      <h2>Are you already a member?</h2>
      <button onClick={handleSignUp} className="auth-button">Sign Up</button>
      <button onClick={handleLogIn} className="auth-button">Log In</button>
    </div>
  );
}

export default Authentication;
