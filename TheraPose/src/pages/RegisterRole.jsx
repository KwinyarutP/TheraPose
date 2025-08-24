import React from "react";
import { SectionTitle, Card, BigButton } from "../assets/ui";

export default function RegisterRole({ go }) {
  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <div className="text-center">
        <SectionTitle>Choose Your Role</SectionTitle>
        <p className="text-gray-600">Select how you'll be using TheraPose</p>
      </div>

      {/* Role cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {/* Patient card */}
        <Card className="space-y-6 hover:border-blue-300 transition-colors">
          <div className="text-center space-y-3">
            <div className="w-20 h-20 mx-auto bg-blue-100 rounded-2xl flex items-center justify-center mb-2">
              <span className="text-3xl">🏥</span>
            </div>
            <h3 className="text-2xl font-semibold">I’m a Patient</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Access personalized exercise programs and track recovery progress
              with AI-powered pose analysis.
            </p>
          </div>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Guided exercise sessions</li>
            <li>• Real-time pose feedback</li>
            <li>• Progress tracking & reports</li>
            <li>• Share results with your therapist</li>
          </ul>
          <BigButton onClick={() => go("registerPatient")}>
            Register as Patient
          </BigButton>
        </Card>

        {/* Therapist card */}
        <Card className="space-y-6 hover:border-green-300 transition-colors">
          <div className="text-center space-y-3">
            <div className="w-20 h-20 mx-auto bg-green-100 rounded-2xl flex items-center justify-center mb-2">
              <span className="text-3xl">👩‍⚕️</span>
            </div>
            <h3 className="text-2xl font-semibold">I’m a Therapist</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Manage patients, create treatment plans, and monitor recovery
              progress with detailed analytics.
            </p>
          </div>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Patient management dashboard</li>
            <li>• Assign custom exercise programs</li>
            <li>• Monitor adherence & progress</li>
            <li>• Generate detailed reports</li>
          </ul>
          <BigButton onClick={() => go("registerTherapist")}>
            Register as Therapist
          </BigButton>
        </Card>
      </div>
    </div>
  );
}
