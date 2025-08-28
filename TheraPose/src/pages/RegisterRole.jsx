import React, { useState } from "react";
import { Card, SectionTitle, NavButton, BigButton } from "../assets/ui";
import RegisterTherapist from "./RegisterTherapist";
import RegisterPatient from "./RegisterPatient";

export default function RegisterRole({ go }) {
  const [role, setRole] = useState(null); // "therapist" | "patient" | null
  const [formData, setFormData] = useState({
    // shared keys; each sub-form will use what it needs
    fullName: "",
    email: "",
    password: "",
    // therapist only
    licenseId: "",
    clinic: "",
    // patient only
    hn: "",
    age: "",
  });

  const updateFormData = (key, val) =>
    setFormData((prev) => ({ ...prev, [key]: val }));

  return (
      <div className="w-full max-w-5xl items-center justify-center mx-auto px-4 py-16">
        <Card className="rounded-3xl border border-gray-200 bg-white shadow-xl">
          {/* Header */}
          <div className="px-8 md:px-16 pt-10 md:pt-14 pb-6 text-center">
            <SectionTitle className="text-4xl md:text-5xl">Welcome</SectionTitle>
            <p className="mt-2 text-base md:text-lg text-gray-600">
              Create your TheraPose account
            </p>
          </div>

          <div className="h-px bg-gray-100" />

          <div className="px-8 md:px-16 py-10 md:py-12">
            {/* Step 1: Choose Role */}
            {!role && (
              <div className="space-y-10">
                <h3 className="text-2xl font-semibold text-center text-gray-900">
                  Choose your role
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      k: "therapist",
                      title: "I’m a Therapist",
                      sub: "Manage patients & programs",
                      icon: "👤",
                    },
                    {
                      k: "patient",
                      title: "I’m a Patient",
                      sub: "Do exercises & view progress",
                      icon: "🧑‍🦽",
                    },
                  ].map((r) => (
                    <button
                      key={r.k}
                      onClick={() => setRole(r.k)}
                      onKeyDown={(e) =>
                        (e.key === "Enter" || e.key === " ") && setRole(r.k)
                      }
                      tabIndex={0}
                      className="group w-full rounded-2xl border border-gray-200 bg-white px-6 py-7 text-center
                                 hover:border-gray-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all"
                    >
                      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl text-white">
                        <span className="text-base">{r.icon}</span>
                      </div>
                      <div className="font-semibold text-gray-900 text-xl">
                        {r.title}
                      </div>
                      <div className="mt-1 text-sm text-gray-500">{r.sub}</div>
                    </button>
                  ))}
                </div>

                <div className="text-center">
                  < BigButton 
                    className="rounded-2xl border border-gray-300 px-5 py-3 text-sm font-semibold hover:bg-gray-50"
                    onClick={() => go("login")}
                  >
                    Already have an account?
                  </BigButton>
                </div>
              </div>
            )}

            {/* Step 2: Show correct form */}
            {role === "therapist" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Therapist Registration
                  </h3>
                  <NavButton onClick={() => setRole(null)}>← Change role</NavButton>
                </div>
                <RegisterTherapist
                  go={go}
                  formData={formData}
                  updateFormData={updateFormData}
                />
              </div>
            )}

            {role === "patient" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Patient Registration
                  </h3>
                  <NavButton onClick={() => setRole(null)}>← Change role</NavButton>
                </div>
                <RegisterPatient
                  go={go}
                  formData={formData}
                  updateFormData={updateFormData}
                />
              </div>
            )}
          </div>
        </Card>
      </div>
  );
}
