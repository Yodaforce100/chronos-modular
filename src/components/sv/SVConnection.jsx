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
    <section className="relative py-6 pb-14 md:py-10 md:pb-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507842217343-583f7270bfba?w=1600&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
      {/* Bible background overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white pointer-events-none" />
      <div className="max-w-3xl mx-auto px-6 relative z-10">
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
            <div className="rounded-[20px] border border-[#C5B49A] p-4 shadow-sm overflow-hidden" style={{ background: "#F2F1EE" }}>
              
              <div className="relative z-10">
                <p className="font-sans text-[10px] font-medium text-[#5E8DBF] tracking-widest uppercase mb-4 text-center">
                  How are you feeling this morning?
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {MOODS.map((mood, i) => (
                    <motion.div
                      key={mood.label}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                      className="flex flex-col items-center gap-1 py-2.5 rounded-[10px] cursor-pointer bg-white/40 hover:bg-white/60 transition-colors backdrop-blur-sm"
                    >
                      <span className="text-2xl">{mood.emoji}</span>
                      <span className="font-sans text-[11px] font-medium text-[#3A4A5A]">
                        {mood.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
                {/* Response preview */}
                <div className="mt-4 pt-3 border-t border-[#D4B896]/40">
                  <p className="font-sans text-[10px] text-[#5E8DBF] tracking-wide mb-1.5">
                    ✦ Your companion responds…
                  </p>
                  <p className="font-serif text-[13px] text-[#3A4A5A] leading-snug italic">
                    "Cast all your anxiety on him because he cares for you."
                  </p>
                  <p className="font-sans text-[10px] text-[#334455] mt-1">— 1 Peter 5:7</p>
                </div>
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


    </section>
  );
}