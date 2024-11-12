// src/components/ScheduledAppointments.js
import React from "react";
import AppointmentTable from "./AppointmentTable";

function ScheduledAppointments({ appointments }) {
  return (
    <div className="form-container">
      <h2>Scheduled Appointments</h2>
      <AppointmentTable appointments={appointments} />
    </div>
  );
}

export default ScheduledAppointments;
