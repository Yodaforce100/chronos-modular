import React from "react";
import { motion } from "framer-motion";

// Previous version (beach/ocean): "https://media.base44.com/images/public/69e96f879840c600a93d0ce5/eeb901bc6_generated_image.png"
const BG_IMG = "https://media.base44.com/images/public/69e96f879840c600a93d0ce5/eb11a10a5_istockphoto-1470973831-1024x1024.jpg";

function SoundwaveBars() {
  return (
    <div className="flex items-center gap-0.5" aria-hidden="true">
      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
        <div
          key={i}
          className="w-0.5 bg-[#5E8DBF] rounded-full animate-soundwave"
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
    <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden pt-20 pb-8">
      {/* Full-width background image at low opacity */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src={BG_IMG}
          alt=""
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.6, filter: "contrast(1.15) saturate(1.1)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(240,245,255,0.4) 0%, transparent 30%, transparent 60%, rgba(249,248,246,0.7) 85%, rgba(249,248,246,1) 100%)" }} />
      </motion.div>

      <div className="max-w-3xl mx-auto px-6 w-full flex flex-col items-center text-center py-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.2, 0, 0, 1] }}
          className="flex flex-col items-center"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-8 flex-wrap justify-center">
            <SoundwaveBars />
            <span className="font-sans text-base font-medium text-[#5E8DBF] tracking-widest uppercase">
              Spoken Scripture
            </span>
          </div>

          <h1 className="font-serif text-[#001C5F]">
            <span className="block text-3xl sm:text-4xl md:text-[44px] leading-[1.25]">Wake up to a voice that hears you</span>
            <span className="block text-lg sm:text-xl md:text-[22px] leading-[1.4] mt-4 italic">and guides you with scripture and affirmations.</span>
          </h1>

          <div className="w-12 h-px bg-[#C5B49A] mt-4 mb-4" />

          <p className="font-sans text-[17px] text-[#4A5568] leading-[1.7] max-w-xl">
            Share how you're feeling, and your{" "}
            <span className="font-medium text-[#3A4A5A]">Shepherd Verses</span>{" "}
            companion delivers calming, spoken scripture and affirmations—helping
            you find clarity and reassurance throughout your day.
          </p>

          <button
            onClick={onCTAClick}
            className="mt-10 font-sans text-[15px] font-medium text-[#001C5F] px-8 py-4 rounded-full min-h-[44px] shadow-md transition-opacity duration-300 hover:opacity-90"
            style={{ background: "linear-gradient(90deg, #D9B86A 0%, #F5E9A4 35%, #E8D48B 60%, #D9B86A 100%)", boxShadow: "0 6px 18px rgba(212,185,106,0.5)", border: "1px solid rgba(255,255,255,0.4)" }}
          >
            Start Your Morning with Peace
          </button>

          <p className="font-sans text-xs text-[#4A5568] mt-6 opacity-70">
            Free 7-day trial · Cancel anytime
          </p>
          <p className="font-serif text-[15px] text-[#001C5F] mt-8 max-w-xl leading-relaxed italic">
            "Come to me, all you who are weary and burdened, and I will give you rest."
            <br />
            <span className="text-sm font-normal">— Matthew 11:28</span>
          </p>
        </motion.div>
      </div>


    </section>
  );
}