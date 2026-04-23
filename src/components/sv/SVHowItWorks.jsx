import React from "react";
import { motion } from "framer-motion";
import { Heart, Volume2 } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Heart,
    title: "Share How You Feel",
    body: "Pause and name your current emotion—whether you're anxious, tired, or grateful. Your Shepherd Verses companion listens to where you are in this moment.",
    accent: "#669eea",
  },
  {
    number: "02",
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
          <span className="font-sans text-xs font-medium text-[#669eea] tracking-widest uppercase block mb-4">
            The Experience
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[44px] leading-[1.25] text-[#001c5f]">
            Two simple steps.<br />A day transformed.
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
              className="relative bg-[#F2F1EE] rounded-[24px] p-8 md:p-10 border border-[#E7DED2] overflow-hidden"
            >
              {/* Step number watermark */}
              <span
                className="absolute top-4 right-6 font-serif text-[80px] leading-none select-none pointer-events-none"
                style={{ color: step.accent, opacity: 0.12 }}
                aria-hidden="true"
              >
                {step.number}
              </span>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: step.accent + "22" }}
              >
                <step.icon className="w-5 h-5" style={{ color: step.accent }} />
              </div>

              <p className="font-sans text-xs font-medium tracking-widest uppercase mb-3" style={{ color: step.accent }}>
                Step {step.number}
              </p>
              <h3 className="font-serif text-2xl text-[#001c5f] mb-4 leading-snug">
                {step.title}
              </h3>
              <p className="font-sans text-[16px] text-[#4A5B6B] leading-[1.7]">
                {step.body}
              </p>
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