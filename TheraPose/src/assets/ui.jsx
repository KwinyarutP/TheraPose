import React, { useState } from "react";

export const Logo = () => (
  <div className="flex items-center gap-2">
    <img
      src="/Jump2025LogoRequest.png" 
      alt="TheraPose"
      className="h-8 w-8 md:h-10 md:w-10 object-contain"
    />
  </div>
);

export const Shell = ({ children, onNavigate }) => {
  const [open, setOpen] = useState(false);

  const NavLinks = ({ vertical = false }) => (
    <nav className={`flex ${vertical ? "flex-col gap-2" : "items-center gap-2"}`}>
      <NavButton onClick={() => { onNavigate("login"); setOpen(false); }}>Log In</NavButton>
      <NavButton onClick={() => { onNavigate("registerRole"); setOpen(false); }}>Register</NavButton>
      <NavButton onClick={() => { onNavigate("docs"); setOpen(false); }}>About Us</NavButton>
    </nav>
  );

  return (
    <div className="min-h-[100svh] flex flex-col bg-gray-50 text-gray-900 w-full">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-gray-200 w-full">
        <div className="w-full px-4 md:px-6 lg:px-8 py-3 flex items-center justify-between">
          <button onClick={() => { onNavigate("landing"); setOpen(false); }}>
            <Logo />
          </button>

          {/* Desktop nav */}
          <div className="hidden md:block">
            <NavLinks />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-gray-200 px-3 py-1.5"
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 md:px-6 lg:px-8 py-3">
              <NavLinks vertical />
            </div>
          </div>
        )}
      </header>

      {/* Main grows to push footer down */}
      <main className="flex-1 w-full px-4 md:px-6 lg:px-8 py-6 md:py-8">
        {children}
      </main>

      {/* Footer pinned bottom */}
      <footer className="w-full px-4 md:px-6 lg:px-8 py-6 md:py-8 text-xs md:text-sm text-gray-600 border-t">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 justify-between">
          <span>© {new Date().getFullYear()} TheraPose – Demo</span>
          <span className="inline-flex rounded bg-gray-200 px-2 py-0.5">v0.1</span>
        </div>
      </footer>
    </div>
  );
};

export const Card = ({ children, className = "" }) => (
  <div className={`bg-white border border-gray-200 rounded-2xl shadow-sm p-4 md:p-6 hover:shadow-md transition-shadow ${className}`}>
    {children}
  </div>
);

export const BigButton = ({ children, onClick, variant = "primary", className = "" }) => {
  const base =
    "w-full sm:w-auto inline-flex items-center justify-center rounded-2xl px-5 md:px-6 py-2.5 md:py-3 text-base md:text-lg font-semibold shadow-sm hover:shadow-md active:scale-[0.99] transition-all";
  const styles = {
    primary: "bg-blue-600 text-black border border-blue-600 hover:bg-blue-700",
    secondary: "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50",
  };
  return (
    <button onClick={onClick} className={`${base} ${styles[variant]} ${className}`}>{children}</button>
  );
};

export const NavButton = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="rounded-xl border border-gray-200 px-3 py-1.5 text-sm hover:bg-gray-50 hover:shadow-sm active:scale-95 transition"
  >
    {children}
  </button>
);

export const Field = ({ label, type = "text", placeholder, required, value, onChange }) => (
  <label className="block w-full">
    <span className="text-sm font-medium text-gray-700 mb-1 block">{label}</span>
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      value={value || ""}
      onChange={onChange}
      className="w-full rounded-xl border border-gray-300 px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  </label>
);

export const SectionTitle = ({ children }) => (
  <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 md:mb-6 text-gray-900">
    {children}
  </h2>
);