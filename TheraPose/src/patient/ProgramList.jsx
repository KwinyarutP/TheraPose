import React from "react";
import { SectionTitle, Card, BigButton, NavButton } from "../assets/ui";

export default function PatientProgramList({ go }) {
  const exercises = [
    { id: 1, title: "Sit-to-Stand", detail: "3×10 reps • Daily", difficulty: "Beginner", completed: false },
    { id: 2, title: "Squats (Assisted)", detail: "3×8 reps • 3×/week", difficulty: "Intermediate", completed: true },
    { id: 3, title: "Balance Training", detail: "2×5 min • Daily", difficulty: "Beginner", completed: false },
  ];

  return (
    <div className="w-full space-y-8">
      {/* Header: Section + About Us only */}
      <div className="flex items-center justify-between">
        <div>
          <SectionTitle>My Exercise Programs</SectionTitle>
          <p className="text-gray-500">Complete your assigned exercises to track progress</p>
        </div>
      </div>

      {/* Summary cards (monochrome) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
        <Card className="rounded-2xl border border-gray-200/80">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">3</div>
            <div className="text-sm text-gray-600">Programs Assigned</div>
          </div>
        </Card>
        <Card className="rounded-2xl border border-gray-200/80">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">1</div>
            <div className="text-sm text-gray-600">Completed Today</div>
          </div>
        </Card>
        <Card className="rounded-2xl border border-gray-200/80">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">67%</div>
            <div className="text-sm text-gray-600">Adherence</div>
          </div>
        </Card>
      </div>

      {/* Exercise list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
        {exercises.map((ex) => (
          <Card key={ex.id} className="space-y-3 rounded-2xl border border-gray-200/80">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">{ex.title}</h3>
              <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                {ex.difficulty}
              </span>
            </div>
            <p className="text-gray-600 text-sm">{ex.detail}</p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div
                className={`text-xs px-2 py-1 rounded text-center ${
                  ex.completed ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700"
                }`}
              >
                {ex.completed ? "Completed" : "Pending"}
              </div>
              <BigButton onClick={() => go("patientPostureInfo")} variant="secondary" className="w-full sm:w-auto">
                Start
              </BigButton>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
