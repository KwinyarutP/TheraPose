import React from "react";
import { SectionTitle, Card, BigButton, NavButton } from "../assets/ui";

export default function CameraSession({ go }) {
  return (
    <div className="w-full space-y-8">
      {/* Header: Section + About Us only */}
      <div className="flex items-center justify-between">
        <SectionTitle>Camera Session</SectionTitle>
        <NavButton onClick={() => go("patientPostureInfo")}>Back</NavButton>
      </div>

      {/* Camera + instructions */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full">
        {/* Camera preview (bigger + premium look) */}
        <Card className="md:col-span-3 relative overflow-hidden rounded-3xl border border-gray-200/80 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.45)] p-0">
          <div className="h-[300px] sm:h-[380px] md:h-[540px] bg-black text-white flex items-center justify-center">
            <span className="text-sm sm:text-base md:text-lg opacity-80 tracking-wide">
              [Camera Stream Placeholder]
            </span>
          </div>
          {/* soft top vignette */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
        </Card>

        {/* Instructions */}
        <Card className="md:col-span-2 space-y-3 rounded-3xl border border-gray-200/80">
          <h3 className="text-lg font-semibold text-gray-900">Instructions</h3>
          <ul className="list-disc list-inside text-sm md:text-base text-gray-600 space-y-1">
            <li>Stand straight in front of the camera</li>
            <li>Keep feet shoulder-width apart</li>
            <li>Follow the pose guide on screen</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <BigButton onClick={() => go("finished")} className="sm:min-w-[140px]">Finish</BigButton>
            <BigButton onClick={() => go("patientPostureInfo")} variant="secondary" className="sm:min-w-[140px]">
              Cancel
            </BigButton>
          </div>
        </Card>
      </div>
    </div>
  );
}
