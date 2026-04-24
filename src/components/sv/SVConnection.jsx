import React from "react";
import { motion } from "framer-motion";

const MOODS = [
  { emoji: "😔", label: "Heavy", color: "#5E8DBF" },
  { emoji: "😟", label: "Anxious", color: "#5E8DBF" },
  { emoji: "😌", label: "Peaceful", color: "#5E8DBF" },
  { emoji: "😴", label: "Tired", color: "#5E8DBF" },
  { emoji: "🙏", label: "Grateful", color: "#001c5f" },
  { emoji: "😊", label: "Hopeful", color: "#5E8DBF" },
];

export default function SVConnection() {
  return (
    <section className="relative py-6 pb-14 md:py-10 md:pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 items-center">
          {/* Left: Mood illustration */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
            className="relative"
          >
            {/* Main card */}
            <div className="bg-white rounded-[20px] border border-[#E7DED2] p-4 shadow-sm">
              <p className="font-sans text-[10px] font-medium text-[#5E8DBF] tracking-widest uppercase mb-3">
                How are you feeling this morning?
              </p>
              <div className="grid grid-cols-3 gap-1.5">
                {MOODS.map((mood, i) => (
                  <motion.div
                    key={mood.label}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex flex-col items-center gap-1 p-2 rounded-[10px] cursor-pointer hover:bg-[#F2F1EE] transition-colors"
                  >
                    <span className="text-xl">{mood.emoji}</span>
                    <span className="font-sans text-[10px] font-medium text-[#334455]">
                      {mood.label}
                    </span>
                  </motion.div>
                ))}
              </div>
              {/* Response preview */}
              <div className="mt-3 pt-3 border-t border-[#E7DED2]">
                <p className="font-sans text-[10px] text-[#5E8DBF] tracking-wide mb-1.5">
                  ✦ Your companion responds…
                </p>
                <p className="font-serif text-[13px] text-[#3A4A5A] leading-snug italic">
                  "Cast all your anxiety on him because he cares for you."
                </p>
                <p className="font-sans text-[10px] text-[#334455] mt-1">— 1 Peter 5:7</p>
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

            <h2 className="font-serif text-2xl md:text-3xl lg:text-[32px] leading-[1.25] text-[#001C5F] text-center">
              A companion<br /><span className="text-xl md:text-2xl lg:text-[26px] whitespace-nowrap">for every moment of your day</span>
            </h2>
            <div className="w-12 h-[1.5px] bg-[#5E8DBF] my-6 mx-auto" />
            <p className="font-sans text-[15px] md:text-[17px] text-[#4A5568] leading-[1.7] text-center">
              Some days begin with calm. Others begin with uncertainty, heaviness,
              or quiet worry.{" "}
              <span className="font-medium text-[#3A4A5A]">Shepherd Verses</span>{" "}
              meets you in those moments—listening to how you feel and responding
              with spoken scripture and affirmations chosen just for you.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8 md:h-10">
          <path d="M0,20 C360,0 1080,40 1440,20 L1440,40 L0,40 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}