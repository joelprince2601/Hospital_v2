// src/components/PatientForm.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

function PatientForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Female");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [patientId, setPatientId] = useState(null); // State for Patient ID
  const navigate = useNavigate();

  // Load patients from local storage to determine next Patient ID
  useEffect(() => {
    const savedPatients = JSON.parse(localStorage.getItem("patients")) || [];
    if (savedPatients.length > 0) {
      setPatientId(savedPatients[savedPatients.length - 1].patientId + 1); // Increment Patient ID
    } else {
      setPatientId(1); // Start Patient ID from 1 if no patients exist
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the patient data
    const newPatient = {
      patientId,
      firstName,
      lastName,
      age,
      gender,
      phone,
      address,
    };

    // Save to local storage
    const savedPatients = JSON.parse(localStorage.getItem("patients")) || [];
    localStorage.setItem("patients", JSON.stringify([...savedPatients, newPatient]));

    setShowModal(true); // Show the confirmation modal
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleAppointmentConfirmation = () => {
    setShowModal(false);
    navigate("/appointments"); // Redirect to the Appointment Scheduling form
  };

  return (
    <div className="form-container">
      <h2>Patient Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          placeholder="Enter First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <label>Last Name:</label>
        <input
          type="text"
          placeholder="Enter Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <label>Age:</label>
        <input
          type="text"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        <label>Gender:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>

        <label>Phone:</label>
        <input
          type="text"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label>Address:</label>
        <input
          type="text"
          placeholder="Enter Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <button type="submit" className="submit-btn">Submit</button>
      </form>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Do you want to make an appointment?</h3>
            <p>Patient ID: {patientId}</p> {/* Display the Patient ID in the modal */}
            <button onClick={handleAppointmentConfirmation} className="modal-btn">Yes</button>
            <button onClick={handleModalClose} className="modal-btn">No</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PatientForm;
