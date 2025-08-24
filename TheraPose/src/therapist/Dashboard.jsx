import React from "react";
import { SectionTitle, Card, BigButton, NavButton } from "../assets/ui2";

export default function TherapistDashboard({ go, patients }) {
  const active = patients.filter((p) => p.status === "Active").length;
  const fresh = patients.filter((p) => p.status === "New").length;

  return (
    <div className="space-y-8 w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <SectionTitle>Therapist Dashboard</SectionTitle>
          <p className="text-gray-600">
            Manage your patients and monitor their progress
          </p>
        </div>
        <div className="flex gap-3">
          <BigButton onClick={() => go("therapistAddPatient")} variant="secondary">
            + Add New Patient
          </BigButton>
          <NavButton onClick={() => go("landing")}>Logout</NavButton>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">{patients.length}</div>
            <div className="text-sm text-gray-600">Total Patients</div>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">{active}</div>
            <div className="text-sm text-gray-600">Active Programs</div>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">{fresh}</div>
            <div className="text-sm text-gray-600">New Patients</div>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">78%</div>
            <div className="text-sm text-gray-600">Avg Adherence</div>
          </div>
        </Card>
      </div>

      {/* Patient list */}
      <Card>
        <h3 className="text-xl font-semibold mb-4">Patient List</h3>
        <div className="space-y-4 w-full">
          {patients.map((p) => (
            <div
              key={p.id}
              className="flex flex-col md:flex-row md:items-center justify-between gap-3 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 w-full"
            >
              {/* Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {p.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-sm text-gray-600">HN: {p.hn}</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3">
                <div
                  className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                    p.status === "Active"
                      ? "bg-green-100 text-green-800"
                      : p.status === "New"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-gray-100 text-gray-800"
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
