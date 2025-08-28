import React from "react";
import { SectionTitle, Card, BigButton, NavButton } from "../assets/ui";

export default function PatientPostureInfo({ go }) {
  return (
    <div className="w-full space-y-8">
      {/* Header: Section + About Us only */}
      <div className="flex items-center justify-between">
        <SectionTitle>Exercise Details</SectionTitle>
      </div>

      {/* Content */}
      <Card className="space-y-4 w-full rounded-3xl border border-gray-200/80">
        <h3 className="text-xl font-semibold text-gray-900">Sit-to-Stand</h3>
        <p className="text-gray-600 text-sm md:text-base">
          This exercise helps improve leg strength and balance.  
          Perform slowly and keep your back straight.
        </p>
        <ul className="list-disc list-inside text-gray-600 text-sm md:text-base space-y-1">
          <li>3 sets × 10 reps</li>
          <li>Rest 1 min between sets</li>
          <li>Do daily</li>
        </ul>
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <BigButton onClick={() => go("cameraSession")} className="sm:min-w-[150px]">Start Session</BigButton>
          <BigButton onClick={() => go("patientProgramList")} variant="secondary" className="sm:min-w-[150px]">
            Cancel
          </BigButton>
        </div>
      </Card>
    </div>
  );
}
