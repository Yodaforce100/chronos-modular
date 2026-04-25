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
        <div className="flex justify-center">
          <ShepherdLogoSmall />
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