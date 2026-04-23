import React from "react";
import { motion } from "framer-motion";

const HERO_IMG = "https://media.base44.com/images/public/69e96f879840c600a93d0ce5/36906ce35_generated_image.png";
const WAVE_IMG = "https://media.base44.com/images/public/69e96f879840c600a93d0ce5/3f4510751_generated_image.png";

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
          src={HERO_IMG}
          alt=""
          className="w-full h-full object-cover object-top"
          style={{ opacity: 0.12 }}
        />
        {/* Fade edges so text stays readable */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #F2F1EE 30%, transparent 60%, #F2F1EE 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 60%, #F2F1EE 100%)" }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 relative z-10">
        {/* Left: Copy */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.2, 0, 0, 1] }}
          className="flex flex-col"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <SoundwaveBars />
            <span className="font-sans text-xs font-medium text-[#6F98C2] tracking-widest uppercase">
              Spoken Scripture & Affirmations
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-[52px] leading-[1.2] text-[#3A4A5A]">
            Wake up to a voice that hears you—and guides you with scripture and affirmations.
          </h1>

          <div className="w-16 h-[1.5px] bg-[#A9C3D6] my-7" />

          <p className="font-sans text-[17px] text-[#4A5B6B] leading-[1.7] max-w-lg">
            Share how you're feeling, and your{" "}
            <span className="font-medium text-[#3A4A5A]">Shepherd Verses</span>{" "}
            companion delivers calming, spoken scripture and affirmations—helping
            you find clarity, reassurance, and peace throughout your day.
          </p>

          <button
            onClick={onCTAClick}
            className="mt-10 self-start font-sans text-[15px] font-medium text-white bg-[#243E6B] px-8 py-4 rounded-full hover:bg-[#1a2e52] transition-colors duration-300 min-h-[44px] shadow-md"
          >
            Start Your Morning with Peace
          </button>

          <p className="font-sans text-xs text-[#4A5B6B] mt-4 opacity-70">
            Free 7-day trial · No credit card required · Cancel anytime
          </p>
        </motion.div>

        {/* Right: Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.2, 0, 0, 1], delay: 0.15 }}
          className="relative"
        >
          <div
            className="relative overflow-hidden"
            style={{ borderRadius: "32px" }}
          >
            <img
              src={HERO_IMG}
              alt="A person sitting peacefully in morning light, eyes closed in quiet reflection"
              className="w-full h-auto object-cover"
              style={{ maxHeight: "560px", objectPosition: "top center" }}
            />
            {/* Soft bottom fade */}
            <div
              className="absolute bottom-0 left-0 right-0 h-24"
              style={{
                background: "linear-gradient(to top, #F2F1EE 0%, transparent 100%)",
              }}
            />
          </div>

          {/* Floating quote pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="absolute -bottom-4 -left-4 md:left-6 bg-white rounded-[16px] shadow-lg px-5 py-4 max-w-[240px] border border-[#E7DED2]"
          >
            <p className="font-serif text-[13px] text-[#3A4A5A] leading-snug italic">
              "The Lord is my shepherd; I shall not want."
            </p>
            <p className="font-sans text-[11px] text-[#4A5B6B] mt-2">— Psalm 23:1</p>
          </motion.div>
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