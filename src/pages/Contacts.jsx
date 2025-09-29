import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contacts() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/"); // Redirect to Home page
  };

  return (
    <section style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Contact Me</h2>

      {/* Contact Info Panel */}
      <div style={{ marginBottom: "2rem" }}>
        <p>Email: arsal@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Location: Oshawa, Ontario</p>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "0 auto", textAlign: "left" }}>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "1rem" }}
        />

        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "1rem" }}
        />

        <label>Contact Number:</label>
        <input
          type="tel"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "1rem" }}
        />

        <label>Email Address:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "1rem" }}
        />

        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          style={{ width: "100%", marginBottom: "1rem" }}
        />

        <button type="submit" style={{ padding: "0.5rem 1rem", background: "#007bff", color: "#fff", border: "none", borderRadius: "4px" }}>
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contacts;