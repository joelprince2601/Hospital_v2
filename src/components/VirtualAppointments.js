import React, { useState } from "react";

const VirtualAppointments = () => {
  const [showLinkPopup, setShowLinkPopup] = useState(false); // For showing the pop-up
  const [appointmentTime, setAppointmentTime] = useState(""); // To store user's selected time
  const [appointmentDate, setAppointmentDate] = useState(""); // To store user's selected date

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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Show the pop-up with the Google Meet link
    setShowLinkPopup(true);
  };

  return (
    <div className="form-container">
      <h2>Schedule a Virtual Appointment</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Select Doctor:
          <select required>
            {doctors.map((doctor, index) => (
              <option key={index} value={doctor.name}>
                {doctor.name} - {doctor.specialization}
              </option>
            ))}
          </select>
        </label>
        <label>
          Date:
          <input
            type="date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            required
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="submit-btn">
          Schedule Appointment
        </button>
      </form>

      {showLinkPopup && (
        <div className="popup">
          <p>Join your scheduled meeting at the chosen time:</p>
          <a
            href="https://meet.google.com/gwb-wywp-cxd"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://meet.google.com/gwb-wywp-cxd
          </a>
          <button onClick={() => setShowLinkPopup(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default VirtualAppointments;
