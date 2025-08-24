import React from "react";
import { Card, SectionTitle, BigButton } from "../assets/ui";

export default function Landing({ go }) {
  return (
    <div className="space-y-8 md:space-y-12 w-full">
      {/* Hero */}
      <div className="text-center space-y-4 md:space-y-1 w-full">
        <div className="mx-auto w-28 sm:w-36 md:w-48 lg:w-56 xl:w-64">
          <img
            src="/Jump2025LogoRequest.png"
            className="block w-full h-auto object-contain"
            loading="eager"
            decoding="async"
          />
        </div>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600">
          AI‑powered physiotherapy that adapts to your every move
        </p>
        <p className="hidden sm:block text-gray-500">
          Real‑time pose estimation brings personalized PT to your home
        </p>
      </div>

      <div className="flex justify-center">
        <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600">
          Key Features
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
        {[
          { icon: "📱", title: "Smart Pose Detection", text: "AI analyzes your movements in real time with just your camera" },
          { icon: "👥", title: "Therapist Dashboard", text: "Providers can monitor progress and adjust plans" },
          { icon: "📊", title: "Progress Tracking", text: "Reports to track your recovery journey" },
        ].map((b, i) => (
          <Card key={i} className="text-center space-y-3 md:space-y-4">
            <div className="w-14 h-14 md:w-16 md:h-16 mx-auto rounded-2xl flex items-center justify-center">
              <span className="text-xl md:text-2xl">{b.icon}</span>
            </div>
            <h3 className="text-lg md:text-xl font-semibold">{b.title}</h3>
            <p className="text-gray-600 text-sm md:text-base">{b.text}</p>
          </Card>
        ))}
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 md:pt-6">
          <BigButton onClick={() => go("login")}>Get Started</BigButton>
          <BigButton onClick={() => go("registerRole")}>Register for Free</BigButton>
      </div>
    </div>
  );
}
