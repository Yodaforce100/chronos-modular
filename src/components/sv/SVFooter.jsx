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
    <footer className="bg-white border-t border-[#E7DED2] py-2 md:py-4">
      <div className="max-w-5xl mx-auto px-6">
        {/* Logo on top */}
        <div className="flex justify-center mb-8">
          <ShepherdLogoSmall />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Left: body text */}
          <div className="text-center md:text-left">
            <p className="font-sans text-sm text-[#001C5F] leading-relaxed">
              Daily scripture and affirmations, spoken just for you. Every morning, without fail.
            </p>
          </div>
          {/* Right: legal links */}
          <div className="flex justify-center md:justify-end">
            <div>
              <p className="font-sans text-xs font-semibold text-[#3A4A5A] tracking-widest uppercase mb-1 text-center">
                Legal
              </p>
              <ul className="flex gap-4">
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