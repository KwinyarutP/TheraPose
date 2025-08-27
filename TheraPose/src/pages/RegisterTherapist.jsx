import React, { useState } from "react";
import { SectionTitle, Card, Field, BigButton } from "../assets/ui";

export default function RegisterTherapist({ go, formData, updateFormData }) {
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.fullName?.trim()) return setError("Please enter your full name.");
    if (!formData.licenseId?.trim()) return setError("Please enter your license ID.");
    if (!formData.email?.trim()) return setError("Please enter your professional email.");
    if (!formData.password?.trim() || formData.password.length < 6)
      return setError("Password must be at least 6 characters.");

    // success → go to therapist dashboard (demo)
    go("therapistDash");
  };

  return (
    <form onSubmit={submit} className="space-y-6">
      <Card className="space-y-6 w-full">
        <Field
          label="Full Name"
          placeholder="Dr. Sarah Johnson"
          required
          value={formData.fullName}
          onChange={(e) => updateFormData("fullName", e.target.value)}
        />
        <Field
          label="License ID"
          placeholder="PT-TH-12345"
          required
          value={formData.licenseId}
          onChange={(e) => updateFormData("licenseId", e.target.value)}
        />
        <Field
          label="Clinic/Hospital"
          placeholder="Bangkok Physiotherapy Center"
          value={formData.clinic}
          onChange={(e) => updateFormData("clinic", e.target.value)}
        />
        <Field
          label="Professional Email"
          type="email"
          placeholder="doctor@clinic.com"
          required
          value={formData.email}
          onChange={(e) => updateFormData("email", e.target.value)}
        />
        <Field
          label="Password"
          type="password"
          placeholder="••••••••"
          required
          value={formData.password}
          onChange={(e) => updateFormData("password", e.target.value)}
        />

        {error && (
          <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2">
            {error}
          </div>
        )}

        <div className="flex justify-center">
          <BigButton type="submit" className="px-8 py-4 text-lg">
            Create Therapist Account
          </BigButton>
        </div>

        <div className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <button className="text-gray-900 hover:underline" onClick={() => go("login")} type="button">
            Sign in
          </button>
        </div>
      </Card>
    </form>
  );
}
