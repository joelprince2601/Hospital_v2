// src/components/AppointmentForm.js
import React, { useState } from "react";
import "./Form.css";

const doctors = [
  { name: "Dr. Sarah Patel", specialization: "Cardiology" },
  { name: "Dr. Rajesh Kumar", specialization: "Neurology" },
  { name: "Dr. Anjali Mehta", specialization: "Dermatology" },
  { name: "Dr. Priya Nair", specialization: "Pediatrics" },
  { name: "Dr. Arun Verma", specialization: "Orthopedics" },
  { name: "Dr. Maya Singh", specialization: "Obstetrics and Gynecology" },
  { name: "Dr. Vikram Reddy", specialization: "General Surgery" },
  { name: "Dr. Neha Desai", specialization: "Internal Medicine" },
  { name: "Dr. Aakash Bansal", specialization: "Psychiatry" },
  { name: "Dr. Kavya Iyer", specialization: "Endocrinology" },
];

function AppointmentForm({ addAppointment, scheduledAppointments, cancelAppointment }) {
  const [patientId, setPatientId] = useState("");
  const [doctorName, setDoctorName] = useState(doctors[0].name);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showClashModal, setShowClashModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve patient data from local storage
    const patients = JSON.parse(localStorage.getItem("patients")) || [];
    const patient = patients.find((p) => p.patientId === parseInt(patientId, 10));

    if (patient) {
      // Check for appointment clashes
      const isClashing = scheduledAppointments.some(
        (appointment) =>
          appointment.doctorName === doctorName &&
          appointment.date === date &&
          appointment.time === time
      );

      if (isClashing) {
        setShowClashModal(true); // Show clash modal
      } else {
        // Prepare appointment details
        const appointmentDetails = {
          patientId: patient.patientId,
          patientName: `${patient.firstName} ${patient.lastName}`,
          doctorName,
          date,
          time,
        };

        // Add appointment to the scheduled appointments
        addAppointment(appointmentDetails);

        // Set the modal content to display
        setModalContent(appointmentDetails);
        setShowModal(true); // Show the confirmation modal
      }
    } else {
      alert("Patient ID not found!");
    }

    // Reset form fields
    setPatientId("");
    setDoctorName(doctors[0].name);
    setDate("");
    setTime("");
  };

  const handleModalClose = () => {
    setShowModal(false);
    setShowClashModal(false);
  };

  return (
    <div className="form-container">
      <h2>Schedule an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label>Patient ID:</label>
        <input
          type="number"
          placeholder="Enter Patient ID"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
          required
        />

        <label>Select Doctor:</label>
        <select
          value={doctorName}
          onChange={(e) => setDoctorName(e.target.value)}
        >
          {doctors.map((doctor, index) => (
            <option key={index} value={doctor.name}>
              {doctor.name} ({doctor.specialization})
            </option>
          ))}
        </select>

        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <label>Time:</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />

        <button type="submit" className="submit-btn">Schedule Appointment</button>
      </form>

      {/* Confirmation Modal */}
      {showModal && modalContent && (
        <div className="modal">
          <div className="modal-content">
            <h3>Appointment Confirmation</h3>
            <p><strong>Patient Name:</strong> {modalContent.patientName}</p>
            <p><strong>Patient ID:</strong> {modalContent.patientId}</p>
            <p><strong>Doctor Name:</strong> {modalContent.doctorName}</p>
            <p><strong>Date:</strong> {modalContent.date}</p>
            <p><strong>Time:</strong> {modalContent.time}</p>
            <button onClick={handleModalClose} className="modal-btn">Close</button>
          </div>
        </div>
      )}

      {/* Appointment Clash Modal */}
      {showClashModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Appointment Clash</h3>
            <p>The selected doctor is already booked at this time. Please choose a different time.</p>
            <button onClick={handleModalClose} className="modal-btn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AppointmentForm;
