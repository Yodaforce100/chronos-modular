import React from "react";
import { motion } from "framer-motion";

const HERO_IMG = "https://media.base44.com/images/public/69e96f879840c600a93d0ce5/cc4259ca5_generated_87b613f5.png";

export default function HeroSection({ onBeginProtocol }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Content grid */}
      <div className="max-w-[110rem] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center pt-24 md:pt-0">
        {/* Left: Text */}
        <div className="lg:col-span-5 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
          >
            <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase block mb-6">
              [REF: PROTOCOL_01] — Biological Refinement
            </span>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[112px] leading-[0.9] tracking-tight text-foreground">
              Your
              <br />
              Biology,
              <br />
              <span className="italic">Optimized</span>
            </h1>

            <p className="font-sans text-lg text-muted-foreground leading-relaxed mt-8 max-w-md">
              Data-driven longevity protocols delivered to your door.
              Supplements, blood work, and AI coaching — unified into one
              modular subscription.
            </p>

            <div className="flex items-center gap-6 mt-10">
              <button
                onClick={onBeginProtocol}
                className="group relative font-sans text-sm font-semibold text-primary-foreground bg-primary px-8 py-4 min-h-[44px] animate-pulse-soft hover:shadow-lg transition-all duration-300"
              >
                Begin Your Protocol
              </button>
              <a
                href="#tiers"
                className="font-sans text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 min-h-[44px] flex items-center"
              >
                Explore Tiers →
              </a>
            </div>

            {/* Micro stats */}
            <div className="flex items-center gap-8 mt-16 pt-8 border-t border-border">
              {[
                { value: "12,400+", label: "Active Protocols" },
                { value: "97.3%", label: "Retention Rate" },
                { value: "48", label: "Biomarkers Tracked" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-sans text-xl md:text-2xl font-semibold text-foreground">
                    {stat.value}
                  </p>
                  <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.2, 0, 0, 1], delay: 0.2 }}
          className="lg:col-span-7 relative"
        >
          <div className="relative aspect-[3/4] lg:aspect-auto lg:h-screen lg:max-h-[900px] overflow-hidden">
            <img
              src={HERO_IMG}
              alt="Macro photography of crystalline structure representing purity and biological precision"
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay for text readability on mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent lg:bg-gradient-to-r lg:from-background lg:via-background/30 lg:to-transparent" />
          </div>
        </motion.div>
      </div>

      {/* Glass rule - bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
}