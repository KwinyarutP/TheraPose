import React, { useState } from "react";
import { SectionTitle, Card, Field, BigButton } from "../assets/ui";

export default function RegisterPatient({ go, formData, updateFormData }) {
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.fullName?.trim()) return setError("Please enter your full name.");
    if (!formData.age?.toString().trim()) return setError("Please enter your age.");
    if (!formData.email?.trim()) return setError("Please enter your email.");
    if (!formData.password?.trim() || formData.password.length < 6)
      return setError("Password must be at least 6 characters.");

    // success → go to patient program list (demo)
    go("patientProgramList");
  };

  return (
    <form onSubmit={submit} className="space-y-6">
      <Card className="space-y-6 w-full">
        <Field
          label="Full Name"
          placeholder="Wiwis Poungsangthanakul"
          required
          value={formData.fullName}
          onChange={(e) => updateFormData("fullName", e.target.value)}
        />
        <Field
          label="Hospital Number (HN)"
          placeholder="H123456"
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

        {error && (
          <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2">
            {error}
          </div>
        )}

        <div className="flex justify-center">
          <BigButton type="submit" className="px-8 py-4 text-lg">
            Create Patient Account
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
