import React from "react";
import { SectionTitle, Card, Field, BigButton } from "../assets/ui";

export default function Login({ go, formData, updateFormData }) {
  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <div className="text-center">
        <SectionTitle>Welcome Back</SectionTitle>
        <p className="text-gray-600">Sign in to your TheraPose account</p>
      </div>

      {/* Card form */}
      <Card className="space-y-6 w-full">
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

        {/* Demo login options */}
        <div className="space-y-4">
          <div className="text-sm text-center text-gray-600">Demo Login Options:</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <BigButton onClick={() => go("therapistDash")} variant="secondary">
              Login as Therapist
            </BigButton>
            <BigButton onClick={() => go("patientProgramList")}>
              Login as Patient
            </BigButton>
          </div>
        </div>

        {/* Link to register */}
        <div className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <button
            className="text-blue-600 hover:underline"
            onClick={() => go("registerRole")}
          >
            Sign up here
          </button>
        </div>
      </Card>
    </div>
  );
}
