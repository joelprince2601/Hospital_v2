// src/components/DoctorForm.js
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

function DoctorForm({ appointments }) {
  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0].name);

  const handleDoctorChange = (event) => {
    setSelectedDoctor(event.target.value);
  };

  // Filter appointments for the selected doctor
  const filteredAppointments = appointments.filter(
    (appointment) => appointment.doctorName === selectedDoctor
  );

  return (
    <div className="form-container">
      <h2>View Appointments</h2>
      <label>Select Doctor:</label>
      <select onChange={handleDoctorChange} value={selectedDoctor}>
        {doctors.map((doctor, index) => (
          <option key={index} value={doctor.name}>
            {doctor.name} ({doctor.specialization})
          </option>
        ))}
      </select>

      <h3>Appointments for {selectedDoctor}</h3>
      {filteredAppointments.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.map((appointment, index) => (
              <tr key={index}>
                <td>{appointment.patientName}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No appointments found for {selectedDoctor}.</p>
      )}
    </div>
  );
}

export default DoctorForm;