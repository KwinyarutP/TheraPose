import React, { useEffect, useRef } from "react";
import { Card } from "../assets/ui";

/* tiny reveal-on-scroll helper */
function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && e.target.classList.add("show"),
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

export default function Landing({ go }) {
  const goToFeatures = (e) => {
    e.preventDefault();
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="w-full bg-white text-gray-900">
      {/* HERO (neutral, clean) */}
      <section className="min-h-[88vh] flex flex-col items-center justify-center text-center px-4">
        <img
          src="/Jump2025LogoRequest.png"
          alt="TheraPose logo"
          className="w-48 sm:w-64 md:w-80 lg:w-[22rem] object-contain"
          loading="eager"
          decoding="async"
        /> 
        <p className="mt-5 text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl">
          AI-powered physiotherapy that adapts to your every move
        </p>
        <p className="mt-1 hidden sm:block text-gray-500 max-w-2xl">
          Real-time pose estimation brings personalized PT to your home
        </p>

        <div className="mt-8 flex gap-3 justify-center">
          <button
            onClick={() => go("login")}
            className="rounded-2xl px-8 md:px-10 py-4 md:py-5 text-lg md:text-xl font-semibold
                       border border-gray-300 hover:bg-gray-50 shadow-md transition-all"
          >
            Get Started
          </button>
        </div>

        <a
          href="#features"
          onClick={goToFeatures}
          className="mt-10 animate-bounce text-sm text-gray-500"
        >
          ↓ more info
        </a>
      </section>

      {/* FLOW DIVIDER (soft gray wave) */}
      <WaveDivider />

      {/* KEY FEATURES – grayscale */}
      <section id="features" className="scroll-mt-24 relative overflow-hidden px-4 py-16 md:py-24">
        {/* remove colored blobs; keep clean neutral background */}
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-[11px] font-semibold tracking-wider text-gray-700">
              WHAT YOU GET
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">
              Key Features
            </h2>
            <p className="mx-auto mt-3 md:mt-4 max-w-2xl text-gray-500">
              Real-time computer vision and therapist tools  with minimal, focused, effective.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: "📱",
                title: "Smart Pose Detection",
                text: "On-device AI tracks joints & angles in real time—no wearables needed.",
              },
              {
                icon: "👥",
                title: "Therapist Dashboard",
                text: "Clinicians review progress, tweak programs, and message patients.",
              },
              {
                icon: "📊",
                title: "Progress Tracking",
                text: "Clear reports on reps, ROM, and adherence to keep goals on track.",
              },
            ].map((b, i) => (
              <Reveal key={i}>
                <article
                  className="relative group rounded-3xl border border-gray-200 bg-white/90 backdrop-blur
                             shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-6 md:p-8
                             transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
                >
                  {/* icon in black square for contrast */}
                  <div className="relative mb-4">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl
                                   ">
                      <span className="text-2xl">{b.icon}</span>
                    </div>
                  </div>

                  <h3 className="text-center text-xl md:text-2xl font-semibold text-gray-900">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-center text-gray-600 leading-relaxed">{b.text}</p>

                  {/* neutral underline accent */}
                  <div className="mt-6 h-[3px] w-10 mx-auto rounded-full bg-gray-200 group-hover:bg-gray-400 transition-colors" />
                </article>
              </Reveal>
            ))}
          </div>

          {/* neutral CTA (optional) */}
          <div className="mt-12 md:mt-16 text-center">
            <button
              onClick={() => go?.("login")}
              className="inline-flex items-center rounded-2xl px-6 py-3 text-sm md:text-base font-semibold
                         bg-gray-900 text-black hover:bg-black transition-colors shadow-lg shadow-black/10"
            >
              Try the Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

/* decorative wave divider — white→slate-50 gray */
function WaveDivider() {
  return (
    <div aria-hidden className="relative">
      <svg
        className="block w-full"
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C180,100 360,0 540,40 C720,80 900,10 1080,40 C1260,70 1440,30 1440,30 L1440,100 L0,100 Z"
          fill="url(#g)"
        />
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="1" stopColor="#f1f5f9" /> {/* slate-100-ish */}
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
