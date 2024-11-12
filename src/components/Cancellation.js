// src/components/Cancellation.js
import React, { useState } from "react";
import "./Cancellation.css";

function Cancellation({ cancelAppointment, scheduledAppointments }) {
  const [patientId, setPatientId] = useState("");
  const [date, setDate] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleCancel = (e) => {
    e.preventDefault();
    const appointmentExists = scheduledAppointments.some(
      (appointment) => appointment.patientId === parseInt(patientId, 10) && appointment.date === date
    );

    if (appointmentExists) {
      cancelAppointment(parseInt(patientId, 10), date);
      setModalContent("Appointment successfully canceled.");
    } else {
      setModalContent("No appointment found for the given Patient ID and date.");
    }
    setShowModal(true);
    
    // Reset form fields
    setPatientId("");
    setDate("");
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="cancellation-container">
      <h2>Cancel an Appointment</h2>
      <form onSubmit={handleCancel}>
        <label>Patient ID:</label>
        <input
          type="number"
          placeholder="Enter Patient ID"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
          required
        />

        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <button type="submit" className="submit-btn">Cancel Appointment</button>
      </form>

      {/* Modal for cancellation feedback */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>{modalContent}</h3>
            <button onClick={handleModalClose} className="modal-btn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cancellation;
