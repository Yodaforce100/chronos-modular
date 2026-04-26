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
    <section className="relative py-6 pb-16 md:py-16 md:pb-32 bg-white">
      {/* Bible pages background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: "url('https://media.base44.com/images/public/69e96f879840c600a93d0ce5/50cdbf00f_istockphoto-2235714260-1024x1024.jpg')", backgroundSize: "cover", backgroundPosition: "center", filter: "saturate(0.3) hue-rotate(180deg) brightness(1.15) grayscale(0.3)" }} />
      {/* Fade in from top */}
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-10" style={{ background: "linear-gradient(to bottom, white, transparent)" }} />
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-center">
          {/* Mobile-only: heading above card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
            className="lg:hidden text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#C9A84C] opacity-70" />
              <span className="text-[#C9A84C] text-lg" style={{ fontFamily: 'serif' }}>✝</span>
              <div className="h-px w-10 bg-[#C9A84C] opacity-70" />
            </div>
            <h2 className="font-serif text-2xl leading-[1.25] text-[#001C5F]">
              A companion<br /><span className="text-xl whitespace-nowrap text-[#5E8DBF]">for every moment of your day</span>
            </h2>
          </motion.div>

          {/* Left: Mood illustration */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
            className="relative flex-shrink-0"
          >
            <div className="w-[220px]">
            {/* Main card */}
            <div className="rounded-[20px] border border-[#E7DED2] p-4 shadow-sm overflow-hidden" style={{ background: "#FFFFFF" }}>
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
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <div className="flex items-center gap-[2px]" aria-hidden="true">
                      {[1,2,3,4,5].map((i) => (
                        <div
                          key={i}
                          className="w-[2px] bg-[#5E8DBF] rounded-full animate-soundwave"
                          style={{
                            height: i === 3 ? '10px' : i % 2 === 0 ? '8px' : '6px',
                            animationDelay: `${(i - 3) * 0.08}s`,
                          }}
                        />
                      ))}
                    </div>
                    <p className="font-sans text-[10px] text-[#5E8DBF] tracking-wide">
                      Your companion responds…
                    </p>
                  </div>
                  <p className="font-serif text-[13px] text-[#001C5F] leading-snug italic">
                    "Cast all your anxiety on him because he cares for you."
                  </p>
                  <p className="font-serif text-[10px] text-[#5E8DBF] mt-1 italic">— 1 Peter 5:7</p>
                </div>
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
            className="flex-1 max-w-sm"
          >

            <div className="hidden lg:flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#C9A84C] opacity-70" />
              <span className="text-[#C9A84C] text-lg" style={{ fontFamily: 'serif' }}>✝</span>
              <div className="h-px w-10 bg-[#C9A84C] opacity-70" />
            </div>
            <h2 className="hidden lg:block font-serif text-2xl md:text-3xl lg:text-[28px] leading-[1.25] text-[#001C5F] text-center">
              A companion for every<br /><span className="text-xl md:text-2xl lg:text-[24px] whitespace-nowrap text-[#5E8DBF]">moment of your day</span>
            </h2>
            <div className="w-12 h-[1.5px] bg-[#5E8DBF] my-6 mx-auto" />
            <p className="font-sans text-[15px] md:text-[16px] text-[#2A4B7C] leading-[1.7] text-center">
              Some days begin with calm. Others begin with uncertainty, heaviness,
              or quiet worry.{" "}
              <span className="font-medium text-[#2A4B7C]">Shepherd Verses</span>{" "}
              meets you in those moments—listening to how you feel and responding
              with spoken scripture and affirmations, chosen just for you.
            </p>
          </motion.div>
        </div>
      </div>


    </section>
  );
}