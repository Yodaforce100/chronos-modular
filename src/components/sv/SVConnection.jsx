import React from "react";
import { motion } from "framer-motion";

const MOODS = [
  { emoji: "😔", label: "Heavy", color: "#A9C3D6" },
  { emoji: "😟", label: "Anxious", color: "#D88C7A" },
  { emoji: "😌", label: "Peaceful", color: "#6F98C2" },
  { emoji: "😴", label: "Tired", color: "#A9C3D6" },
  { emoji: "🙏", label: "Grateful", color: "#243E6B" },
  { emoji: "😊", label: "Hopeful", color: "#D88C7A" },
];

export default function SVConnection() {
  return (
    <section className="relative py-24 md:py-36">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Mood illustration */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
            className="relative"
          >
            {/* Main card */}
            <div className="bg-white rounded-[24px] border border-[#E7DED2] p-8 shadow-sm">
              <p className="font-sans text-xs font-medium text-[#6F98C2] tracking-widest uppercase mb-5">
                How are you feeling this morning?
              </p>
              <div className="grid grid-cols-3 gap-3">
                {MOODS.map((mood, i) => (
                  <motion.div
                    key={mood.label}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex flex-col items-center gap-2 p-3 rounded-[12px] cursor-pointer hover:bg-[#F2F1EE] transition-colors"
                  >
                    <span className="text-2xl">{mood.emoji}</span>
                    <span className="font-sans text-[11px] font-medium text-[#4A5B6B]">
                      {mood.label}
                    </span>
                  </motion.div>
                ))}
              </div>
              {/* Response preview */}
              <div className="mt-6 pt-6 border-t border-[#E7DED2]">
                <p className="font-sans text-xs text-[#6F98C2] tracking-wide mb-2">
                  ✦ Your companion responds…
                </p>
                <p className="font-serif text-[15px] text-[#3A4A5A] leading-snug italic">
                  "Cast all your anxiety on him because he cares for you."
                </p>
                <p className="font-sans text-xs text-[#4A5B6B] mt-1">— 1 Peter 5:7</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.2, 0, 0, 1], delay: 0.1 }}
          >
            <span className="font-sans text-xs font-medium text-[#6F98C2] tracking-widest uppercase block mb-5">
              The Why
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[42px] leading-[1.25] text-[#243E6B]">
              A companion for every moment of your day
            </h2>
            <div className="w-12 h-[1.5px] bg-[#A9C3D6] my-6" />
            <p className="font-sans text-[17px] text-[#4A5B6B] leading-[1.7]">
              Some days begin with calm. Others begin with uncertainty, heaviness,
              or quiet worry.{" "}
              <span className="font-medium text-[#3A4A5A]">Shepherd Verses</span>{" "}
              meets you in those moments—listening to how you feel and responding
              with spoken scripture and affirmations chosen just for you.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#E7DED2]" />
    </section>
  );
}