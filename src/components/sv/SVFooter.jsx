import React from "react";

function ShepherdLogoSmall() {
  return (
    <img
      src="https://media.base44.com/images/public/69e96f879840c600a93d0ce5/39f2abf45_Shepherd_verses_herologo_GOLD_STAR_2500_TRANSPARENTBGpng-2.png"
      alt="Shepherd Verses"
      className="h-12 w-auto"
    />
  );
}

export default function SVFooter() {
  return (
    <footer className="bg-white border-t border-[#E7DED2] py-2 md:py-4">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="hidden md:block w-40" />
          <div className="flex flex-col items-center">
            <ShepherdLogoSmall />
            <p className="font-sans text-sm text-[#001C5F] mt-3 max-w-xs leading-relaxed text-center">
              Daily scripture and affirmations, spoken just for you. Every morning, without fail.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <p className="font-sans text-xs font-semibold text-[#3A4A5A] tracking-widest uppercase mb-3">
                Legal
              </p>
              <ul className="space-y-2">
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