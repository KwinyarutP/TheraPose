import React from "react";
import { SectionTitle, Card, BigButton } from "../assets/ui2";

export default function Finished({ go }) {
  return (
    <div className="w-full flex items-center justify-center">
      <Card className="w-full sm:w-2/3 lg:w-1/2 text-center space-y-6 py-10">
        <div className="text-6xl">✅</div>
        <SectionTitle>Well Done!</SectionTitle>
        <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto">
          You’ve successfully completed today’s exercise session. Keep it up
          and check your progress in the results page.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <BigButton onClick={() => go("results")}>View Results</BigButton>
          <BigButton onClick={() => go("patientProgramList")} variant="secondary">
            Back to Programs
          </BigButton>
        </div>
      </Card>
    </div>
  );
}
