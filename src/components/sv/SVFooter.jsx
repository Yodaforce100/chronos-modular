import React from "react";

function ShepherdLogoSmall() {
  return (
    <div className="flex items-center gap-2.5">
      <svg width="28" height="28" viewBox="0 0 36 36" fill="none" aria-label="Shepherd Verses logo mark">
        <circle cx="18" cy="18" r="17" stroke="#243E6B" strokeWidth="1.5" fill="none" />
        <path d="M18 8 C12 8 8 12 8 17 C8 22 12 25 18 25 C18 25 18 28 14 30" stroke="#243E6B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <circle cx="18" cy="17" r="3" fill="#A9C3D6" />
      </svg>
      <span className="font-serif text-[15px] text-[#243E6B]">Shepherd Verses</span>
    </div>
  );
}

export default function SVFooter() {
  return (
    <footer className="bg-white border-t border-[#E7DED2] py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <ShepherdLogoSmall />
            <p className="font-sans text-sm text-[#4A5B6B] mt-3 max-w-xs leading-relaxed">
              Daily scripture and affirmations, spoken just for you. Every morning, without fail.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <p className="font-sans text-xs font-semibold text-[#3A4A5A] tracking-widest uppercase mb-3">
                Product
              </p>
              <ul className="space-y-2">
                {["How It Works", "Pricing", "Free Trial"].map((l) => (
                  <li key={l}>
                    <a href="#" className="font-sans text-sm text-[#4A5B6B] hover:text-[#3A4A5A] transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-sans text-xs font-semibold text-[#3A4A5A] tracking-widest uppercase mb-3">
                Legal
              </p>
              <ul className="space-y-2">
                {["Privacy Policy", "Terms of Service"].map((l) => (
                  <li key={l}>
                    <a href="#" className="font-sans text-sm text-[#4A5B6B] hover:text-[#3A4A5A] transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-[#E7DED2]">
          <p className="font-sans text-xs text-[#4A5B6B] text-center">
            © 2026 Shepherd Verses. Made with care for your peace of mind.
          </p>
        </div>
      </div>
    </footer>
  );
}