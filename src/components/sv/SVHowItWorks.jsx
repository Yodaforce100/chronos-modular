import React from "react";
import { motion } from "framer-motion";
import { Heart, Volume2 } from "lucide-react";

function SpeechBubbleIcon({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

const STEPS = [
  {
    number: "01",
    image: "https://media.base44.com/images/public/69e96f879840c600a93d0ce5/37c678379_Screenshot2026-04-21at111033am.png",
    icon: Heart,
    title: "Share How You Feel",
    body: "Pause and name your current emotion—whether you're anxious, tired, or grateful. Your Shepherd Verses companion listens to where you are in this moment.",
    accent: "#669eea",
  },
  {
    number: "02",
    image: "https://media.base44.com/images/public/69e96f879840c600a93d0ce5/a5f933ec3_generated_image.png",
    icon: Volume2,
    title: "Hear a Caring Voice",
    body: "Listen as your companion shares spoken scripture and affirmations tailored to your feelings, carefully chosen to guide and support you all day.",
    accent: "#669eea",
  },
];

export default function SVHowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-36 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >

          <h2 className="font-serif text-3xl md:text-4xl lg:text-[44px] leading-[1.25] text-[#001c5f]">
            Two simple steps.<br /><span className="text-2xl md:text-3xl lg:text-[32px]">A day transformed.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative bg-white rounded-[24px] overflow-hidden border border-[#E7DED2] h-full flex flex-col"
            >
              {/* Full-bleed image with text overlay */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={step.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
                
                {/* Overlay text */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="font-serif text-2xl text-white mb-2 leading-snug drop-shadow-lg">
                    {step.title}
                  </h3>
                </div>
              </div>

              {/* Card content below image */}
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <p className="font-sans text-xs font-medium tracking-widest uppercase mb-2" style={{ color: step.accent }}>
                  Step {step.number}
                </p>
                <p className="font-sans text-[15px] text-[#4A5B6B] leading-[1.6]">
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connector line on desktop */}
        <div className="hidden md:flex justify-center mt-6">
          <div className="h-[1px] w-1/2 bg-[#E7DED2]" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#E7DED2]" />
    </section>
  );
}