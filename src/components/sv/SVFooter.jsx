import React from "react";

function ShepherdLogoSmall() {
  return (
    <img
      src="https://media.base44.com/images/public/69e96f879840c600a93d0ce5/39f2abf45_Shepherd_verses_herologo_GOLD_STAR_2500_TRANSPARENTBGpng-2.png"
      alt="Shepherd Verses"
      className="h-20 w-auto"
    />
  );
}

export default function SVFooter() {
  return (
    <footer className="bg-white border-t border-[#E7DED2] py-2 md:py-1 lg:py-4">
      <div className="max-w-5xl mx-auto px-6">
        {/* Logo on top (mobile only) */}
        <div className="flex justify-center mb-3 md:hidden">
          <ShepherdLogoSmall />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-3 md:gap-2 lg:gap-8">
          {/* Left: body text */}
          <div className="text-center md:text-left">
            <p className="font-sans text-sm text-[#001C5F] leading-relaxed">
              Daily scripture and affirmations, spoken just for you. Every morning, without fail.
            </p>
          </div>
          {/* Centre: logo (desktop only) */}
          <div className="hidden md:flex justify-center">
            <ShepherdLogoSmall />
          </div>
          {/* Right: legal links */}
          <div className="flex flex-col items-center md:items-end gap-2 md:gap-0">
            <div className="text-center md:text-right">
              <p className="font-sans text-xs font-semibold text-[#3A4A5A] tracking-widest uppercase mb-1">
                Legal
              </p>
              <ul className="flex gap-3 justify-center md:justify-end">
                {["Privacy Policy", "Terms of Service"].map((l) => (
                  <li key={l}>
                    <a href="#" className="font-sans text-sm text-[#001C5F] hover:text-[#3A4A5A] transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-[#E7DED2]">
          <p className="font-sans text-xs text-[#001C5F] text-center">
            © 2026 Shepherd Verses. Made with care for your peace of mind.
          </p>
        </div>
      </div>
    </footer>
  );
}