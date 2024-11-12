// FeedbackRating.js
import React, { useState } from "react";

function FeedbackRating() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for rating us ${rating} stars!`);
  };

  return (
    <div className="form-container">
      <h2>Patient Feedback</h2>
      <form onSubmit={handleSubmit}>
        <label>Rating</label>
        <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} max="5" min="1" />

        <label>Comment</label>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} />

        <button type="submit" className="submit-btn">Submit Feedback</button>
      </form>
    </div>
  );
}

export default FeedbackRating;
