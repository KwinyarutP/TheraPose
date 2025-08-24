import React from "react";
import { SectionTitle, Card, BigButton, NavButton } from "../assets/ui";

export default function PatientInfo({ go, patients }) {
  const patient = patients[0]; // ตัวอย่าง เลือกผู้ป่วยแรก
  if (!patient) return <div className="text-gray-600">No patient selected</div>;

  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <SectionTitle>Patient Information</SectionTitle>
        <NavButton onClick={() => go("therapistDash")}>
          Back to Dashboard
        </NavButton>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-3 gap-6 w-full">
        {/* Left: detail */}
        <Card className="md:col-span-2 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              {patient.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <div>
              <h3 className="text-2xl font-semibold">{patient.name}</h3>
              <p className="text-gray-600">HN: {patient.hn}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-600">
                Status
              </label>
              <div
                className={`inline-flex px-3 py-1 rounded-full text-sm font-medium mt-1 ${
                  patient.status === "Active"
                    ? "bg-green-100 text-green-800"
                    : patient.status === "New"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {patient.status}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                Progress
              </label>
              <div className="mt-1">
                <div className="text-lg font-semibold">{patient.progress}%</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${patient.progress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Right: actions */}
        <Card className="space-y-3">
          <h3 className="font-semibold">Quick Actions</h3>
          <BigButton
            onClick={() => go("patientProgramList")}
            variant="secondary"
          >
            View Programs
          </BigButton>
          <BigButton onClick={() => go("results")} variant="secondary">
            Latest Results
          </BigButton>
        </Card>
      </div>
    </div>
  );
}
