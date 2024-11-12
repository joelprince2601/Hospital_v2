import React, { useState } from "react";
import "./Form.css";

function BillingForm() {
  const [patientName, setPatientName] = useState("");
  const [service, setService] = useState("Doctor Visit");
  const [insurance, setInsurance] = useState("NO");
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [medCost, setMedCost] = useState(0);
  const [visitCost, setVisitCost] = useState(0);
  const [total, setTotal] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Calculate costs based on selected service
    let calculatedMedCost = 0;
    let calculatedVisitCost = 0;
    const tax = 20;

    if (service === "Doctor Visit") {
      calculatedVisitCost = 40;
    } else if (service === "Meds") {
      calculatedMedCost = 20;
    } else if (service === "Doctor Visit+Meds") {
      calculatedVisitCost = 40;
      calculatedMedCost = 20;
    }

    const calculatedTotal = calculatedMedCost + calculatedVisitCost + tax;

    // Set calculated costs to state
    setMedCost(calculatedMedCost);
    setVisitCost(calculatedVisitCost);
    setTotal(calculatedTotal);

    // Show the popup with the bill summary
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="form-container">
      <h2>Billing Form</h2>
      <form onSubmit={handleSubmit}>
        <label><strong>Patient Name:</strong></label>
        <input
          type="text"
          placeholder="Enter Patient Name"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          required
        />

        <label><strong>Service Provided:</strong></label>
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
        >
          <option value="Doctor Visit">Doctor Visit</option>
          <option value="Meds">Meds</option>
          <option value="Doctor Visit+Meds">Doctor + Meds</option>
        </select>

        <label><strong>Do you have insurance?</strong></label>
        <select
          value={insurance}
          onChange={(e) => setInsurance(e.target.value)}
          required
        >
          <option value="YES">YES</option>
          <option value="NO">NO</option>
        </select>

        <label><strong>Payment Method:</strong></label>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          required
        >
          <option value="Cash">Cash</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Insurance">Insurance</option>
        </select>

        <button type="submit" className="submit-btn">Generate Bill</button>
      </form>

      {/* Popup for displaying the bill */}
      {showPopup && (
        <div className="modal">
          <div className="modal-content" style={{ textAlign: "right" }}>
            <h3>Bill Summary</h3>
            <p><strong>Patient Name:</strong> {patientName}</p>
            <p><strong>Doctor Visit Cost:</strong> ${visitCost}</p>
            <p><strong>Meds Cost:</strong> ${medCost}</p>
            <p><strong>Tax:</strong> $20</p>
            <h4><strong>Total:</strong> ${total}</h4>
            <button className="modal-btn" onClick={handleClosePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BillingForm;
