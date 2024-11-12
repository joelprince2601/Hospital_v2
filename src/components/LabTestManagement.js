// LabTestManagement.js
import React, { useState } from "react";

function LabTestManagement() {
  const [testType, setTestType] = useState("");
  const [testDate, setTestDate] = useState("");
  const [testStatus, setTestStatus] = useState("Pending");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Lab Test for ${testType} scheduled on ${testDate} with status: ${testStatus}`);
  };

  return (
    <div className="form-container">
      <h2>Lab Test Management</h2>
      <form onSubmit={handleSubmit}>
        <label>Test Type</label>
        <input type="text" value={testType} onChange={(e) => setTestType(e.target.value)} />

        <label>Date</label>
        <input type="date" value={testDate} onChange={(e) => setTestDate(e.target.value)} />

        <button type="submit" className="submit-btn">Schedule Test</button>
      </form>
    </div>
  );
}

export default LabTestManagement;
