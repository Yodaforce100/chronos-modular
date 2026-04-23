import React from "react";
import { motion } from "framer-motion";

const BG_IMG = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=2000&q=80";

function SoundwaveBars() {
  const heights = [28, 44, 60, 76, 56, 88, 64, 44, 52, 72, 48, 36];
  return (
    <div className="flex items-center gap-[5px] h-14" aria-hidden="true">
      {heights.map((h, i) => (
        <div
          key={i}
          className="w-[3px] rounded-full bg-[#6F98C2]"
          style={{
            height: `${h}%`,
            animation: `soundwave ${1 + (i % 5) * 0.15}s ease-in-out ${i * 0.07}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default function SVHero({ onCTAClick }) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Full-width background image at low opacity */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img
          src={BG_IMG}
          alt=""
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.35 }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #f0f5ff 0%, transparent 20%, transparent 70%, #f0f5ff 100%)" }} />
      </div>

      <div className="max-w-3xl mx-auto px-6 w-full flex flex-col items-center text-center py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.2, 0, 0, 1] }}
          className="flex flex-col items-center"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <SoundwaveBars />
            <span className="font-sans text-xs font-medium text-[#6F98C2] tracking-widest uppercase">
              Spoken Scripture & Affirmations
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-[56px] leading-[1.2] text-[#3A4A5A]">
            Wake up to a voice that hears you—and guides you with scripture and affirmations.
          </h1>

          <div className="w-16 h-[1.5px] bg-[#A9C3D6] my-7" />

          <p className="font-sans text-[17px] text-[#4A5B6B] leading-[1.7] max-w-xl">
            Share how you're feeling, and your{" "}
            <span className="font-medium text-[#3A4A5A]">Shepherd Verses</span>{" "}
            companion delivers calming, spoken scripture and affirmations—helping
            you find clarity, reassurance, and peace throughout your day.
          </p>

          <button
            onClick={onCTAClick}
            className="mt-10 font-sans text-[15px] font-medium text-white bg-[#243E6B] px-8 py-4 rounded-full hover:bg-[#1a2e52] transition-colors duration-300 min-h-[44px] shadow-md"
          >
            Start Your Morning with Peace
          </button>

          <p className="font-sans text-xs text-[#4A5B6B] mt-4 opacity-70">
            Free 7-day trial · No credit card required · Cancel anytime
          </p>
        </motion.div>
      </div>

      {/* Divider wave */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{ background: "#E7DED2" }}
      />
    </section>
  );
}