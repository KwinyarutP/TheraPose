import React from "react";
import { SectionTitle, Card, BigButton, NavButton } from "../assets/ui";

export default function TherapistDashboard({ go, patients }) {
  const active = patients.filter((p) => p.status === "Active").length;
  const fresh = patients.filter((p) => p.status === "New").length;

  return (
    <div className="space-y-8 w-full">
      {/* Header (About Us only) */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <SectionTitle>Therapist Dashboard</SectionTitle>
          <p className="text-gray-500">Manage your patients and monitor their progress</p>
        </div>
        <BigButton onClick={() => go("therapistAddPatient")} className="min-w-[120px]">
           + Add New Patient
        </BigButton>
      </div>      

      {/* Stats grid (neutral palette) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        <Card className="rounded-2xl border border-gray-200/80">
          <div className="text-center space-y-1">
            <div className="text-3xl font-bold text-gray-900">{patients.length}</div>
            <div className="text-sm text-gray-500">Total Patients</div>
          </div>
        </Card>
        <Card className="rounded-2xl border border-gray-200/80">
          <div className="text-center space-y-1">
            <div className="text-3xl font-bold text-gray-900">{active}</div>
            <div className="text-sm text-gray-500">Active Programs</div>
          </div>
        </Card>
        <Card className="rounded-2xl border border-gray-200/80">
          <div className="text-center space-y-1">
            <div className="text-3xl font-bold text-gray-900">{fresh}</div>
            <div className="text-sm text-gray-500">New Patients</div>
          </div>
        </Card>
        <Card className="rounded-2xl border border-gray-200/80">
          <div className="text-center space-y-1">
            <div className="text-3xl font-bold text-gray-900">78%</div>
            <div className="text-sm text-gray-500">Avg Adherence</div>
          </div>
        </Card>
      </div>

      {/* Patient list */}
      <Card className="rounded-3xl border border-gray-200/80">
        <h3 className="text-xl font-semibold mb-4">Patient List</h3>
        <div className="space-y-4 w-full">
          {patients.map((p) => (
            <div
              key={p.id}
              className="flex flex-col md:flex-row md:items-center justify-between gap-3 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 w-full transition"
            >
              {/* Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-black rounded-full flex items-center justify-center text-white font-semibold">
                  {p.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{p.name}</div>
                  <div className="text-sm text-gray-600">HN: {p.hn}</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3">
                <div
                  className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                    p.status === "Active"
                      ? "bg-gray-900 text-white"
                      : p.status === "New"
                      ? "bg-gray-200 text-gray-800"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {p.status}
                </div>
                <div className="text-sm text-gray-600">Progress: {p.progress}%</div>
                <div className="flex gap-2">
                  <NavButton onClick={() => go("patientInfo")}>View</NavButton>
                  <NavButton onClick={() => go("patientProgramList")}>Programs</NavButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
