import React, { useState } from "react";
import axios from "axios";
import "./SymptomForm.css";

const symptomsList = [
  "fever","cough","fatigue","headache","chest_pain","shortness_of_breath",
  "nausea","vomiting","diarrhea","sore_throat","runny_nose","body_pain",
  "dizziness","loss_of_smell","loss_of_taste","abdominal_pain","joint_pain",
  "skin_rash","itching","blurred_vision","palpitations","sweating",
  "weight_loss","weight_gain","frequent_urination","thirst","anxiety",
  "depression","insomnia","back_pain","neck_pain","swelling",
  "ear_pain","hearing_loss","vision_loss","chest_tightness",
  "blood_in_urine","pelvic_pain","hair_loss","memory_loss",
  "tremors","numbness","cough_blood","night_sweats"
];

export default function SymptomForm() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showTablets, setShowTablets] = useState(false);


  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedSymptoms(prev =>
      prev.includes(value)
        ? prev.filter(s => s !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = async () => {
    if (selectedSymptoms.length === 0) {
      alert("Please select at least one symptom");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/predict",
        { symptoms: selectedSymptoms }
      );
      setPrediction(response.data);
    } catch (err) {
      console.error(err);
      alert("Prediction failed");
    } finally {
      setLoading(false);
    }
  };

   const handleShowTablets = () => {
    setShowTablets(true);
  };

  return (
    <div className="page-wrapper">

    <div className={`container ${showTablets ? "shift-left" : ""}`}>
      <h2>Enter Your Symptoms</h2>
      <div className="symptoms-grid">
        {symptomsList.map(symptom => (
          <label key={symptom} className="symptom-label">
            <input
              type="checkbox"
              value={symptom}
              checked={selectedSymptoms.includes(symptom)}
              onChange={handleChange}
            />
            {symptom.replace("_", " ")}
          </label>
        ))}
      </div>
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Predicting..." : "Predict"}
      </button>
      {prediction && (
          <div className="prediction">
            <h3>Predicted Specialists:</h3>
            <ul>
              {prediction.prediction.map((spec, idx) => (
                <li key={idx}>{spec}</li>
              ))}
            </ul>

            <h3>Confidence Scores:</h3>
            <ul>
              {Object.entries(prediction.scores).map(([spec, score]) => (
                <li key={spec}>
                  {spec}: {score}
                </li>
              ))}
            </ul>
            <button className="tablets-btn" onClick={() => setShowTablets(true)}>
              Show Tablets
            </button>
          </div>
        )}
        </div>
        {showTablets && prediction && (
        <div className="tablets-panel">
          <h3>Recommended Tablets</h3>
          <ul>
            {prediction.tablets.map((tab, idx) => (
              <li key={idx}>{tab}</li>
            ))}
          </ul>

           <div className="education-note">
              ⚠️ <strong>Note: </strong> 
              <div className="infoo">
              This recommendation is for educational
              purposes only. Please consult a qualified doctor before taking
              any medication.
              </div>
            </div>

        </div>
      )}
      </div>
  );
}