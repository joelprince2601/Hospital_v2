import React, { useState } from "react";

function EmergencyServices() {
  const [name, setName] = useState("");
  const [needsAmbulance, setNeedsAmbulance] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleAmbulanceChange = (e) => {
    setNeedsAmbulance(e.target.value);
    setAddress("");  // Reset address if option changes
    setNote("");      // Reset note if option changes
  };

  return (
    <div>
      <h2>Emergency Services</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Would you require an ambulance?
            <select value={needsAmbulance} onChange={handleAmbulanceChange} required>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
        </div>
        {needsAmbulance === "yes" && (
          <div>
            <label>
              Address:
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </label>
          </div>
        )}
        {needsAmbulance === "no" && (
          <div>
            <label>
              Please describe your problem:
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                required
              />
            </label>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
      {showPopup && (
        <div className="popup">
          <p>Doctors will be ready.</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default EmergencyServices;
