import React from "react";
import { SectionTitle, Card, BigButton, NavButton } from "../assets/ui2";

export default function PatientPostureInfo({ go }) {
  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <SectionTitle>Exercise Details</SectionTitle>
        <NavButton onClick={() => go("patientProgramList")}>Back</NavButton>
      </div>

      {/* Content */}
      <Card className="space-y-4 w-full">
        <h3 className="text-xl font-semibold">Sit-to-Stand</h3>
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
          <BigButton onClick={() => go("cameraSession")}>Start Session</BigButton>
          <BigButton onClick={() => go("patientProgramList")} variant="secondary">
            Cancel
          </BigButton>
        </div>
      </Card>
    </div>
  );
}
