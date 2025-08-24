import React from "react";
import { SectionTitle, Card, NavButton } from "../assets/ui";

export default function Results({ go }) {
  const results = [
    { label: "Sit-to-Stand", score: 85, unit: "%" },
    { label: "Squats (Assisted)", score: 72, unit: "%" },
    { label: "Balance Training", score: 90, unit: "%" },
  ];

  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <SectionTitle>Results & Progress</SectionTitle>
        <NavButton onClick={() => go("patientProgramList")}>Back</NavButton>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
        <Card>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">85%</div>
            <div className="text-sm text-gray-600">Overall Score</div>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">12</div>
            <div className="text-sm text-gray-600">Sessions Completed</div>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">6 weeks</div>
            <div className="text-sm text-gray-600">Duration</div>
          </div>
        </Card>
      </div>

      {/* Exercise results */}
      <Card className="space-y-4 w-full">
        <h3 className="text-lg md:text-xl font-semibold">Exercise Breakdown</h3>
        <div className="space-y-4">
          {results.map((r, i) => (
            <div key={i} className="w-full">
              <div className="flex justify-between text-sm md:text-base mb-1">
                <span>{r.label}</span>
                <span className="font-semibold">{r.score}{r.unit}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${r.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
