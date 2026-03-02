import pandas as pd

symptoms = [
    "fever","cough","fatigue","headache","chest_pain","shortness_of_breath",
    "nausea","vomiting","diarrhea","sore_throat","runny_nose","body_pain",
    "dizziness","loss_of_smell","loss_of_taste","abdominal_pain","joint_pain",
    "skin_rash","itching","blurred_vision","palpitations","sweating",
    "weight_loss","weight_gain","frequent_urination","thirst","anxiety",
    "depression","insomnia","back_pain","neck_pain","swelling",
    "ear_pain","hearing_loss","vision_loss","chest_tightness",
    "blood_in_urine","pelvic_pain","hair_loss","memory_loss",
    "tremors","numbness","cough_blood","night_sweats"
]

specialists = [
    "General_Physician", "Cardiologist", "Pulmonologist", "Dermatologist",
    "Neurologist", "Gastroenterologist", "Orthopedist", "Endocrinologist",
    "Psychiatrist", "ENT_Specialist", "Otolaryngologist", "Ophthalmologist",
    "Nephrologist", "Urologist", "Gynecologist", "Oncologist",
    "Rheumatologist", "Hematologist", "Geriatrician", "Trichologist",
    "Pain_Management_Specialist", "Infectious_Disease_Specialist"
]

SPECIALIST_TABLETS = {
    "General_Physician": ["Paracetamol", "Multivitamin"],
    "Cardiologist": ["Aspirin", "Atorvastatin"],
    "Pulmonologist": ["Salbutamol", "Montelukast"],
    "Dermatologist": ["Cetirizine", "Hydrocortisone cream"],
    "Neurologist": ["Gabapentin", "Vitamin B12"],
    "Gastroenterologist": ["Omeprazole", "Ranitidine"],
    "Orthopedist": ["Ibuprofen", "Calcium tablets"],
    "Endocrinologist": ["Metformin", "Levothyroxine"],
    "Psychiatrist": ["Fluoxetine", "Diazepam"],
    "ENT_Specialist": ["Nasal spray", "Antihistamine"],
    "Ophthalmologist": ["Artificial tears", "Antibiotic eye drops"],
    "Urologist": ["Tamsulosin", "Ciprofloxacin"],
    "Gynecologist": ["Iron supplement", "Progesterone"],
    "Oncologist": ["Chemotherapy drugs"],
    "Rheumatologist": ["Methotrexate", "NSAIDs"],
    "Hematologist": ["Folic acid", "Iron tablets"],
    "Geriatrician": ["Calcium", "Vitamin D"],
    "Trichologist": ["Biotin", "Minoxidil"],
    "Pain_Management_Specialist": ["Paracetamol", "Ibuprofen"],
    "Infectious_Disease_Specialist": ["Antibiotics"]
}


def predict_specialists(input_symptoms, model, feature_names, specialist_names, threshold=0.3):

    # Create zero-filled dataframe
    X = pd.DataFrame(0, index=[0], columns=feature_names)

    # Set present symptoms to 1
    for s in input_symptoms:
        if s in X.columns:
            X.loc[0, s] = 1

    # Predict probabilities
    probs = model.predict_proba(X)

    predictions = []
    scores = {}

    for i, p in enumerate(probs):
        score = p[0][1]
        scores[specialist_names[i]] = round(score, 3)

        if score >= threshold:
            predictions.append(specialist_names[i])

    # Fallback if nothing selected
    if not predictions:
        predictions.append(max(scores, key=scores.get))

    return predictions, scores
