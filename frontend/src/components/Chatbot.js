import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Chatbot() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_i8dkd48",
        "template_gwqavtt",
        {
          name: formData.name,
          email: formData.email,
          title: formData.title,
        },
        "Jx9ggl9Hx9qfsXLfd"
      );

      setStatusMessage("Your message was sent successfully!");

      // Reset form fields
      setFormData({
        name: "",
        email: "",
        title: "",
      });

      // Hide status message after 5 seconds
      setTimeout(() => {
        setStatusMessage("");
      }, 5000);

    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatusMessage("Failed to send your message. Please try again later.");

      // Hide error message after 5 seconds
      setTimeout(() => {
        setStatusMessage("");
      }, 5000);
    }
  };

  // Inline styles
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
  };

  const formWrapperStyle = {
    background: "white",
    padding: "50px 50px",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
    width: "100%",
    maxWidth: "500px",
    textAlign: "center",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginTop: "20px",
  };

  const inputButtonStyle = {
    padding: "12px 15px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    ...inputButtonStyle,
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <div style={formWrapperStyle}>
        <h2>Ask a Question</h2>

        <form onSubmit={handleSubmit} style={formStyle}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputButtonStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputButtonStyle}
          />

          <input
            type="text"
            name="title"
            placeholder="Your Question"
            value={formData.title}
            onChange={handleChange}
            required
            style={inputButtonStyle}
          />

          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#45a049")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4CAF50")}
          >
            Submit
          </button>
        </form>

        <p>{statusMessage}</p>
      </div>
    </div>
  );
}
