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
      {/* Header: Section + About Us only */}
      <div className="flex items-center justify-between">
        <SectionTitle>Results & Progress</SectionTitle>
      </div>

      {/* Summary (monochrome) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
        <Card className="rounded-2xl border border-gray-200/80">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">85%</div>
            <div className="text-sm text-gray-600">Overall Score</div>
          </div>
        </Card>
        <Card className="rounded-2xl border border-gray-200/80">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">12</div>
            <div className="text-sm text-gray-600">Sessions Completed</div>
          </div>
        </Card>
        <Card className="rounded-2xl border border-gray-200/80">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">6 weeks</div>
            <div className="text-sm text-gray-600">Duration</div>
          </div>
        </Card>
      </div>

      {/* Exercise results */}
      <Card className="space-y-4 w-full rounded-3xl border border-gray-200/80">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900">Exercise Breakdown</h3>
        <div className="space-y-4">
          {results.map((r, i) => (
            <div key={i} className="w-full">
              <div className="flex justify-between text-sm md:text-base mb-1">
                <span className="text-gray-800">{r.label}</span>
                <span className="font-semibold text-gray-900">{r.score}{r.unit}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gray-900 h-2 rounded-full transition-all"
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
