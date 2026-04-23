import React from "react";
import { motion } from "framer-motion";

// Previous version (beach/ocean): "https://media.base44.com/images/public/69e96f879840c600a93d0ce5/eeb901bc6_generated_image.png"
const BG_IMG = "https://media.base44.com/images/public/69e96f879840c600a93d0ce5/05f98274e_istockphoto-1007768414-612x612.jpg";

function SoundwaveBars() {
  return (
    <div className="flex items-center gap-0.5" aria-hidden="true">
      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
        <div
          key={i}
          className="w-0.5 bg-[#669eea] rounded-full animate-soundwave"
          style={{
            height: i === 4 ? '20px' : i % 2 === 0 ? '16px' : '12px',
            animationDelay: `${(i - 4) * 0.08}s`,
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
          style={{ opacity: 0.6, filter: "contrast(1.15) saturate(1.1)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(240,245,255,0.4) 0%, transparent 30%, transparent 70%, rgba(240,245,255,0.4) 100%)" }} />
      </div>

      <div className="max-w-3xl mx-auto px-6 w-full flex flex-col items-center text-center py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.2, 0, 0, 1] }}
          className="flex flex-col items-center"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-0 md:gap-1.5 mb-8">
            <SoundwaveBars />
            <span className="font-sans text-sm font-medium text-[#669eea] tracking-widest uppercase">
              Spoken Scripture & Affirmations
            </span>
          </div>

          <h1 className="font-serif text-[#001c5f]">
            <span className="block text-3xl sm:text-4xl md:text-[40px] leading-[1.25]">Wake up to a voice that hears you—</span>
            <span className="block text-xl sm:text-2xl md:text-[28px] leading-[1.4] mt-1 text-[#001c5f]">and guides you with scripture and affirmations.</span>
          </h1>

          <div className="w-12 h-px bg-[#C5B49A] mt-7 mb-7" />

          <p className="font-sans text-[17px] text-[#334455] leading-[1.7] max-w-xl">
            Share how you're feeling, and your{" "}
            <span className="font-medium text-[#3A4A5A]">Shepherd Verses</span>{" "}
            companion delivers calming, spoken scripture and affirmations—helping
            you find clarity, reassurance, and peace throughout your day.
          </p>

          <button
            onClick={onCTAClick}
            className="mt-10 font-sans text-[15px] font-medium text-white px-8 py-4 rounded-full min-h-[44px] shadow-md transition-opacity duration-300 hover:opacity-90"
            style={{ background: "linear-gradient(90deg, #D9B86A 0%, #F5E9A4 35%, #E8D48B 60%, #D9B86A 100%)", boxShadow: "0 4px 14px rgba(212,185,106,0.4)", textShadow: "0 1px 3px rgba(0,0,0,0.35)" }}
          >
            Start Your Morning with Peace
          </button>

          <p className="font-sans text-xs text-[#334455] mt-4 opacity-70">
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