import React from "react";
import { SectionTitle, Card, BigButton, NavButton } from "../assets/ui";

export default function CameraSession({ go }) {
  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <SectionTitle>Camera Session</SectionTitle>
        <NavButton onClick={() => go("patientPostureInfo")}>Back</NavButton>
      </div>

      {/* Camera + instructions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {/* Camera preview */}
        <Card className="md:col-span-2 h-[240px] sm:h-[320px] md:h-[420px] flex items-center justify-center bg-black text-white">
          <span className="text-sm sm:text-base md:text-lg">
            [Camera Stream Placeholder]
          </span>
        </Card>

        {/* Instructions */}
        <Card className="space-y-3">
          <h3 className="text-lg font-semibold">Instructions</h3>
          <ul className="list-disc list-inside text-sm md:text-base text-gray-600 space-y-1">
            <li>Stand straight in front of the camera</li>
            <li>Keep feet shoulder-width apart</li>
            <li>Follow the pose guide on screen</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <BigButton onClick={() => go("finished")}>Finish</BigButton>
            <BigButton onClick={() => go("patientPostureInfo")} variant="secondary">
              Cancel
            </BigButton>
          </div>
        </Card>
      </div>
    </div>
  );
}
