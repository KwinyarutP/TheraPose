import React from "react";
import { Card, SectionTitle, BigButton } from "../assets/ui";

export default function Landing({ go }) {
  return (
    <div className="w-full">
      {/* HERO (full screen) */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        {/* Bigger logo */}
        <div className="mx-auto w-40 sm:w-56 md:w-72 lg:w-96 xl:w-[28rem] 2xl:w-[32rem]">
          <img
            src="/Jump2025LogoRequest.png"
            className="block w-full h-auto object-contain"
            loading="eager"
            decoding="async"
            alt="TheraPose logo"
          />
        </div>

        <p className="mt-5 text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl">
          AI‑powered physiotherapy that adapts to your every move
        </p>
        <p className="mt-1 hidden sm:block text-gray-500 max-w-2xl">
          Real‑time pose estimation brings personalized PT to your home
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-3 justify-center">
          <div onClick={() => go("login")} className="inline-flex items-center justify-center rounded-2xl px-8 md:px-10 py-4 md:py-5 text-lg md:text-xl font-semibold border border-gray-300 hover:bg-gray-50 shadow-md transition-all duration-300 cursor-pointer">
            Get Started
          </div>
        </div>

        <a href="#features" className="mt-14 animate-bounce text-sm text-gray-500">
          ↓ more info
        </a>
      </section>

      {/* FEATURES (full screen) */}
      <section id="features"
        className="mx-auto min-h-screen flex flex-col items-center justify-center px-4 py-12 md:py-20">
        <div className="flex justify-center mb-6 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700">
            Key Features
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl w-full">
          {[
            { icon: "📱", title: "Smart Pose Detection", text: "AI analyzes your movements in real time with just your camera" },
            { icon: "👥", title: "Therapist Dashboard", text: "Providers can monitor progress and adjust plans" },
            { icon: "📊", title: "Progress Tracking", text: "Reports to track your recovery journey" },
          ].map((b, i) => (
            <Card key={i} className="text-center space-y-4 md:space-y-5 p-6 md:p-8">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-2xl flex items-center justify-center">
                <span className="text-2xl md:text-3xl">{b.icon}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold">{b.title}</h3>
              <p className="text-gray-600 text-base md:text-lg">{b.text}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
