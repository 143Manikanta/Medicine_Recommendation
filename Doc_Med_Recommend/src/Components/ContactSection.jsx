import React from "react";
import { useState } from "react";
import "./ContactSection.css";

export default function ContactSection() {
  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (name && email && message) {
      alert("✅ Message sent successfully!");
    } else {
      alert("⚠️ Please fill all the fields.");
    }
  };
  
  return (
    

    <div className="contact-section">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-subtitle">
        Have questions, feedback, or suggestions? We’d love to hear from you.
      </p>

      <div className="contact-container">
        <div className="contact-info">
          <h3>📍 Get in Touch</h3>
          <p>Email: <span>support@medicare-ai.com</span></p>
          <p>Phone: <span>+91 9XXXXXXXXX</span></p>
          <p>Location: <span>India</span></p>
        </div>

        <form className="contact-form">
          <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          <textarea
              rows="4"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          <button type="button" onClick={handleSubmit}>Send Message</button>
        </form>
      </div>

      <p className="contact-note">
        ⚠️ This platform is intended for educational purposes only and does not
        provide medical consultation.
      </p>
    </div>
  );
}