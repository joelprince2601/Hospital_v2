// src/components/AppointmentTable.js
import React from "react";
import "./AppointmentTable.css"; // Ensure this file exists for styling

function AppointmentTable({ appointments }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Patient ID</th>
          <th>Patient Name</th>
          <th>Doctor Name</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {appointments.length > 0 ? (
          appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{appointment.patientId}</td>
              <td>{appointment.patientName}</td>
              <td>{appointment.doctorName}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5">No appointments found for {appointments[0]?.doctorName}.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default AppointmentTable;
