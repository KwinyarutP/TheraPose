import React, { useState } from "react";
import { Card, SectionTitle, BigButton, Field } from "../assets/ui";

export default function Login({ go }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Simple demo auth
    const ok = form.email.trim() === "jump@mail.com" && form.password === "demo123";
    if (!ok) return setError("Invalid demo credentials. Try email: jump@mail.com, password: demo123");

    // After login → direct patient dashboard (or therapist if you decide later)
    return go("patientProgramList");
  };

  return (
      <div className="w-full max-w-md items-center justify-center mx-auto px-4">
        <Card className="rounded-3xl border border-gray-200 bg-white shadow-lg p-8 md:p-10 space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <SectionTitle className="text-3xl md:text-4xl">Welcome Back</SectionTitle>
            <p className="text-gray-600 text-sm md:text-base">
              Sign in to your TheraPose account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="space-y-6">
            <Field
              label="Email"
              type="email"
              placeholder="jump@mail.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <Field
              label="Password"
              type="password"
              placeholder="demo123"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />

            {error && (
              <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2">
                {error}
              </div>
            )}
            <div className="flex justify-center">
              <BigButton type="submit " className="w-full py-4 text-lg">
                Log In 
              </BigButton>
            </div>
          </form>

          {/* Footer links */}
          <div className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <button
              onClick={() => go("registerRole")}
              className="text-gray-900 hover:underline font-medium"
            >
              Sign up here
            </button>
          </div>
        </Card>

        {/* footer note */}
        <p className="mt-6 text-center text-xs text-gray-500">
          Demo credentials: jump@mail.com / demo123
        </p>
      </div>
  );
}
