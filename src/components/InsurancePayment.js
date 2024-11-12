// InsurancePayment.js
import React, { useState } from "react";

function InsurancePayment() {
  const [insuranceProvider, setInsuranceProvider] = useState("");
  const [policyNumber, setPolicyNumber] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("Pending");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Insurance with ${insuranceProvider} processed. Status: ${paymentStatus}`);
  };

  return (
    <div className="form-container">
      <h2>Insurance and Payment</h2>
      <form onSubmit={handleSubmit}>
        <label>Insurance Provider</label>
        <input type="text" value={insuranceProvider} onChange={(e) => setInsuranceProvider(e.target.value)} />

        <label>Policy Number</label>
        <input type="text" value={policyNumber} onChange={(e) => setPolicyNumber(e.target.value)} />

        <button type="submit" className="submit-btn">Submit Insurance</button>
      </form>
    </div>
  );
}

export default InsurancePayment;
