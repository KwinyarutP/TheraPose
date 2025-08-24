import React, { useState } from "react";
import { Card, SectionTitle, BigButton, Field, NavButton } from "../assets/ui";

export default function Login({ go }) {
  const [role, setRole] = useState(null);          // "therapist" | "patient" | null
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const pickRole = (r) => {
    setRole(r);
    setError("");
    // Optional: prefill demo creds
    setForm({ username: "jump", password: "demo123" });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");

    // super simple demo auth
    const ok = form.username.trim() === "jump" && form.password === "demo123";
    if (!ok) return setError("Invalid demo credentials. Try username: jump, password: demo123");

    if (role === "therapist") return go("therapistDash");
    if (role === "patient") return go("patientProgramList");
  };

  const reset = () => {
    setRole(null);
    setForm({ username: "", password: "" });
    setError("");
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 w-full">
      <div className="text-center">
        <SectionTitle>Welcome Back</SectionTitle>
        <p className="text-gray-600">Sign in to your TheraPose account</p>
      </div>

      <Card className="space-y-6">
        {/* STEP 1 — choose role */}
        {!role && (
          <div className="space-y-6">
            <h3 className="text-lg md:text-xl font-semibold text-center">Choose your role</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <BigButton onClick={() => pickRole("therapist")} variant="secondary">
                 I’m a Therapist
              </BigButton>
              <BigButton onClick={() => pickRole("patient")} variant="secondary">
                 I’m a Patient
              </BigButton>
            </div>

            <div className="text-sm text-gray-600 text-center">
              Or{" "}
              <button className="text-blue-600 hover:underline" onClick={() => go("registerRole")}>
                create a new account
              </button>
            </div>
          </div>
        )}

        {/* STEP 2 — credentials */}
        {role && (
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg md:text-xl font-semibold">
                {role === "therapist" ? "Therapist Login" : "Patient Login"}
              </h3>
              <NavButton onClick={reset}>← Change role</NavButton>
            </div>

            <div className="grid gap-4">
              <Field
                label="Username"
                placeholder="jump"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
              />
              <Field
                label="Password"
                type="password"
                placeholder="demo123"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>

            {error && (
              <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <BigButton type="submit">
                {role === "therapist" ? "Login as Therapist" : "Login as Patient"}
              </BigButton>
            </div>

            <div className="text-center text-sm text-gray-600">
              Don’t have an account?{" "}
              <button className="text-blue-600 hover:underline" onClick={() => go("registerRole")}>
                Sign up here
              </button>
            </div>
          </form>
        )}
      </Card>
    </div>
  );
}
