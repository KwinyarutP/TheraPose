import React from "react";
import { SectionTitle, Card, Field, BigButton } from "../assets/ui";

export default function RegisterTherapist({ go, formData, updateFormData }) {
  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <div className="text-center">
        <SectionTitle>Therapist Registration</SectionTitle>
        <p className="text-gray-600">Create your professional account</p>
      </div>

      {/* Form */}
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

        <BigButton onClick={() => go("therapistDash")}>
          Create Therapist Account
        </BigButton>

        <div className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <button
            className="text-blue-600 hover:underline"
            onClick={() => go("login")}
          >
            Sign in
          </button>
        </div>
      </Card>
    </div>
  );
}
