import React, { useState } from "react";
import { SectionTitle, Card, Field, BigButton, NavButton } from "../assets/ui";

export default function TherapistAddPatient({ go, patients, setPatients }) {
  const [newPatient, setNewPatient] = useState({
    name: "",
    hn: "",
    condition: "",
    age: ""
  });

  const handleSave = () => {
    if (!newPatient.name) return;
    const patient = {
      id: patients.length + 1,
      name: newPatient.name,
      hn: newPatient.hn,
      status: "New",
      progress: 0,
      condition: newPatient.condition,
      age: newPatient.age
    };
    setPatients([...patients, patient]);
    go("therapistDash");
  };

  return (
    <div className="w-full space-y-8">
      {/* Header (About Us only) */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <SectionTitle>Add New Patient</SectionTitle>
          <p className="text-gray-500">Enter patient information to get started</p>
        </div>
      </div>

      {/* Form */}
      <Card className="space-y-6 w-full rounded-3xl border border-gray-200/80 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.4)]">
        <div className="grid md:grid-cols-2 gap-6">
          <Field
            label="Full Name"
            placeholder="Patient Name"
            required
            value={newPatient.name}
            onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })}
          />
          <Field
            label="Hospital Number (HN)"
            placeholder="H654321"
            value={newPatient.hn}
            onChange={(e) => setNewPatient({ ...newPatient, hn: e.target.value })}
          />
          <Field
            label="Age"
            type="number"
            placeholder="65"
            value={newPatient.age}
            onChange={(e) => setNewPatient({ ...newPatient, age: e.target.value })}
          />
          <Field
            label="Primary Condition"
            placeholder="e.g., Knee OA, Post-surgery rehab"
            value={newPatient.condition}
            onChange={(e) => setNewPatient({ ...newPatient, condition: e.target.value })}
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <BigButton onClick={handleSave} className="sm:min-w-[160px]">
            Save Patient
          </BigButton>
          <BigButton onClick={() => go("therapistDash")} variant="secondary" className="sm:min-w-[160px]">
            Cancel
          </BigButton>
        </div>
      </Card>
    </div>
  );
}
