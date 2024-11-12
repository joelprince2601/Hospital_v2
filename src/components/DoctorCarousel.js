// DoctorCarousel.js
import React, { useState, useEffect } from "react";
import "./Carousel.css"; // Create this file for carousel styles

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

function DoctorCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % doctors.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel left">
        <h3>{doctors[currentIndex].name}</h3>
        <p>{doctors[currentIndex].specialization}</p>
      </div>
      <div className="carousel right">
        <h3>{doctors[(currentIndex + 1) % doctors.length].name}</h3>
        <p>{doctors[(currentIndex + 1) % doctors.length].specialization}</p>
      </div>
    </div>
  );
}

export default DoctorCarousel;
