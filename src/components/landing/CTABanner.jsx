import React from "react";
import { motion } from "framer-motion";

const PRODUCTS_IMG = "https://media.base44.com/images/public/69e96f879840c600a93d0ce5/abda80ea7_generated_13ce4e0d.png";

export default function CTABanner({ onBeginProtocol }) {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Background image with low opacity */}
      <div className="absolute inset-0 opacity-[0.06]">
        <img
          src={PRODUCTS_IMG}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-[110rem] mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="max-w-2xl mx-auto"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase block mb-6">
            [REF: INITIATION] — Begin Now
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-foreground leading-[0.95]">
            The Future of
            <br />
            <span className="italic">You</span> Starts Here
          </h2>
          <p className="font-sans text-lg text-muted-foreground mt-6 leading-relaxed max-w-lg mx-auto">
            Join 12,400+ subscribers who are actively rewriting their biological
            narrative. Your first protocol ships within 48 hours.
          </p>

          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={onBeginProtocol}
              className="font-sans text-sm font-semibold text-primary-foreground bg-primary px-10 py-4 min-h-[44px] animate-pulse-soft hover:shadow-lg transition-all duration-300"
            >
              Begin Your Protocol
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
}