import React from "react";
import { SectionTitle, Card, Field, BigButton } from "../assets/ui";

export default function RegisterPatient({ go, formData, updateFormData }) {
  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <div className="text-center">
        <SectionTitle>Patient Registration</SectionTitle>
        <p className="text-gray-600">Create your patient account</p>
      </div>

      {/* Form */}
      <Card className="space-y-6 w-full">
        <Field
          label="Full Name"
          placeholder="John Doe"
          required
          value={formData.fullName}
          onChange={(e) => updateFormData("fullName", e.target.value)}
        />
        <Field
          label="Hospital Number (HN)"
          placeholder="H123456 (optional)"
          value={formData.hn}
          onChange={(e) => updateFormData("hn", e.target.value)}
        />
        <Field
          label="Age"
          type="number"
          placeholder="65"
          required
          value={formData.age}
          onChange={(e) => updateFormData("age", e.target.value)}
        />
        <Field
          label="Email"
          type="email"
          placeholder="you@example.com"
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

        <BigButton onClick={() => go("patientProgramList")}>
          Create Patient Account
        </BigButton>

        <div className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <button className="text-blue-600 hover:underline" onClick={() => go("login")}>
            Sign in
          </button>
        </div>
      </Card>
    </div>
  );
}
