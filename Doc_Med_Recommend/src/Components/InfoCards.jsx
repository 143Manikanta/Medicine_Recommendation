import React from "react";
import "./InfoCards.css";

export default function InfoCards() {
  return (
    <div className="info-section">
      <h2 className="info-title">How This System Helps You</h2>

      <div className="info-cards">
        <div className="info-card">
          <h3>🧠 AI Symptom Analysis</h3>
          <p>
            The system analyzes selected symptoms using a trained
            machine learning model to identify meaningful medical patterns.
          </p>
        </div>

        <div className="info-card">
          <h3>👨‍⚕️ Doctor Recommendation</h3>
          <p>
            Based on your symptoms, the most relevant medical specialist
            is recommended for consultation.
          </p>
        </div>

        <div className="info-card">
          <h3>💊 Tablet Guidance</h3>
          <p>
            Commonly referenced tablets are displayed strictly for
            educational awareness.
          </p>
        </div>

        <div className="info-card">
          <h3>🔒 Educational Use Only</h3>
          <p>
            This system does not replace professional medical advice.
            Always consult a certified doctor before medication.
          </p>
        </div>
      </div>
    </div>
  );
}