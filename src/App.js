import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Authentication from "./components/Authentication";
import PatientForm from "./components/PatientForm";
import AppointmentForm from "./components/AppointmentForm";
import DoctorForm from "./components/DoctorForm";
import ScheduledAppointments from "./components/ScheduledAppointments";
import Cancellation from "./components/Cancellation";
import BillingForm from "./components/BillingForm";
import LabTestManagement from "./components/LabTestManagement"; // Import LabTestManagement
import FeedbackRating from "./components/FeedbackRating"; // Import FeedbackRating
import InsurancePayment from "./components/InsurancePayment"; // Import InsurancePayment
import VirtualAppointments from "./components/VirtualAppointments"; // Import VirtualAppointments
import EmergencyServices from "./components/EmergencyServices"; // Import EmergencyServices component

function App() {
  const [scheduledAppointments, setScheduledAppointments] = useState([]);

  useEffect(() => {
    // Load Tidio chatbot
    const script = document.createElement("script");
    script.src = "//code.tidio.co/8fgnnwueppuuivjxk6jeoiwwhmelkvxl.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const addAppointment = (appointment) => {
    const newAppointment = { ...appointment };
    setScheduledAppointments((prev) => [...prev, newAppointment]);
  };

  const cancelAppointment = (patientId, date) => {
    setScheduledAppointments((prev) =>
      prev.filter(
        (appointment) =>
          !(appointment.patientId === patientId && appointment.date === date)
      )
    );
  };

  return (
    <Router>
      <div className="App">
        <header className="header">
          <img src="/mainhospital.png" alt="Hospital Logo" className="header-logo" />
          <h1>Hospital Management System</h1>
          <p>Manage Patients, Appointments, Doctors, and Billing in one place.</p>
        </header>

        <nav className="nav-bar">
          <Link to="/" className="nav-link">Authentication</Link>
          <Link to="/patients" className="nav-link">Patient Management</Link>
          <Link to="/appointments" className="nav-link">Appointment Scheduling</Link>
          <Link to="/doctors" className="nav-link">Doctor Management</Link>
          <Link to="/scheduled-appointments" className="nav-link">View Scheduled Appointments</Link>
          <Link to="/cancellation" className="nav-link">Cancellation</Link>
          <Link to="/billing" className="nav-link">Billing</Link>
          <Link to="/lab-tests" className="nav-link">Lab Test Management</Link>
          <Link to="/feedback" className="nav-link">Feedback</Link>
          <Link to="/insurance" className="nav-link">Insurance</Link>
          <Link to="/virtual-appointments" className="nav-link">Virtual Appointments</Link>
          <Link to="/emergency-services" className="nav-link">Emergency Services</Link> {/* Add Emergency Services link */}
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Authentication />} />
            <Route path="/patients" element={<PatientForm />} />
            <Route path="/appointments" element={<AppointmentForm addAppointment={addAppointment} scheduledAppointments={scheduledAppointments} cancelAppointment={cancelAppointment} />} />
            <Route path="/doctors" element={<DoctorForm appointments={scheduledAppointments} />} />
            <Route path="/scheduled-appointments" element={<ScheduledAppointments appointments={scheduledAppointments} />} />
            <Route path="/cancellation" element={<Cancellation cancelAppointment={cancelAppointment} scheduledAppointments={scheduledAppointments} />} />
            <Route path="/billing" element={<BillingForm />} />
            <Route path="/lab-tests" element={<LabTestManagement />} /> {/* Lab Test Management Route */}
            <Route path="/feedback" element={<FeedbackRating />} /> {/* Feedback Route */}
            <Route path="/insurance" element={<InsurancePayment />} /> {/* Insurance Route */}
            <Route path="/virtual-appointments" element={<VirtualAppointments />} /> {/* Virtual Appointments Route */}
            <Route path="/emergency-services" element={<EmergencyServices />} /> {/* Emergency Services Route */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
