import React from "react";
import { SectionTitle, Card, BigButton } from "../assets/ui";

export default function Finished({ go }) {
  return (
    <div className="w-full flex items-center justify-center">
      <Card className="w-full sm:w-2/3 lg:w-1/2 text-center space-y-6 py-10 rounded-3xl border border-gray-200/80 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.45)]">
        <div className="text-6xl">✅</div>
        <SectionTitle>Well Done!</SectionTitle>
        <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto">
          You’ve successfully completed today’s exercise session. Keep it up
          and check your progress in the results page.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <BigButton onClick={() => go("results")} className="sm:min-w-[150px]">View Results</BigButton>
          <BigButton onClick={() => go("patientProgramList")} variant="secondary" className="sm:min-w-[150px]">
            Back to Programs
          </BigButton>
        </div>
      </Card>
    </div>
  );
}
 