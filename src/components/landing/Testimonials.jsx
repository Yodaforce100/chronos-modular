import React from "react";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote: "My biological age dropped 4 years in the first 6 months. The data doesn't lie.",
    name: "Dr. Elena Vasquez",
    role: "Neurosurgeon, Systemic Subscriber",
    metric: "−4 yrs biological age",
  },
  {
    quote: "The AI coaching adapts faster than any human nutritionist I've worked with. It sees patterns I can't.",
    name: "Marcus Chen",
    role: "Former Olympic Athlete, Absolute Subscriber",
    metric: "32% HRV improvement",
  },
  {
    quote: "I started with Genesis to test it. Within 3 months, the blood work results spoke for themselves. I upgraded immediately.",
    name: "Amara Obi",
    role: "Tech Executive, Systemic Subscriber",
    metric: "18 biomarkers optimized",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-32 md:py-40">
      <div className="max-w-[110rem] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="mb-16 md:mb-20"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase block mb-4">
            [REF: CLINICAL_EVIDENCE] — Subscriber Results
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[0.95]">
            Measured
            <br />
            <span className="italic">Transformations</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.2, 0, 0, 1], delay: i * 0.1 }}
              className="bg-background p-8 md:p-10 flex flex-col"
            >
              <p className="font-sans text-lg text-foreground leading-relaxed flex-1">
                "{t.quote}"
              </p>
              <div className="mt-8 pt-6 border-t border-border">
                <p className="font-sans text-sm font-semibold text-foreground">
                  {t.name}
                </p>
                <p className="font-sans text-xs text-muted-foreground mt-1">
                  {t.role}
                </p>
                <p className="font-mono text-[11px] tracking-wider text-primary mt-3 uppercase">
                  {t.metric}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
}