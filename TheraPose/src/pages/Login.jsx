import React, { useState } from "react";
import { Card, SectionTitle, BigButton, Field } from "../assets/ui";


export default function Login({ go }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (form.email.trim() === "patient@mail.com" && form.password === "demo123")
      return go("patientProgramList");
    else if (form.email.trim() === "therapist@mail.com" && form.password === "demo123")
      return go("therapistDash");
    else return setError("Invalid demo credentials. Please try again.");
  };

  return (
    
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* MAIN */}
      <main className="flex-1 flex items-center justify-center px-2">
        
        <div className="w-full max-w-md">
          <Card className="rounded-2xl border border-gray-200 bg-white shadow-lg p-4 md:p-10 space-y-8">
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
                placeholder="patient@mail.com"
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
                <BigButton type="submit" className="mx-auto block justify-center py-4 text-lg">
                  Log In
                </BigButton>
              </div>
            </form>

            {/* Mini footer inside the card */}
            <div className="pt-2 space-y-1 text-center">
              <p className="text-xs text-gray-500">
                Demo patient: <span className="font-mono">patient@mail.com / demo123</span>
              </p>
              <p className="text-xs text-gray-500">
                Demo therapist: <span className="font-mono">therapist@mail.com / demo123</span>
              </p>
            </div>

            {/* Sign up link */}
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
        </div>
      </main>

    </div>
  );
}
