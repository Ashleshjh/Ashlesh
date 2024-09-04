import React, { useState } from "react";
import './register.css';

function Register() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registeredDetails, setRegisteredDetails] = useState(null);

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Set the registered details to display below the form
    setRegisteredDetails({
      name,
      address,
      phoneNumber,
      email
    });
    alert("Registered successfully!");
  };

  const handleCancel = () => {
    // Reset all fields
    setName("");
    setAddress("");
    setPhoneNumber("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setRegisteredDetails(null); // Clear the registered details
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email ID:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Create New Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="form-buttons">
          <button type="button" onClick={handleRegister}>
            Register
          </button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>

      {registeredDetails && (
        <div className="register-details">
          <h2>Registered Details</h2>
          <p><strong>Name:</strong> {registeredDetails.name}</p>
          <p><strong>Address:</strong> {registeredDetails.address}</p>
          <p><strong>Phone Number:</strong> {registeredDetails.phoneNumber}</p>
          <p><strong>Email:</strong> {registeredDetails.email}</p>
        </div>
      )}
    </div>
  );
}

export default Register;
