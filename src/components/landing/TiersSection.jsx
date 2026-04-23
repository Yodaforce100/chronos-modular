import React, { useRef } from "react";
import { motion } from "framer-motion";
import TierCard from "./TierCard";

const TIERS = [
  {
    id: "genesis",
    ref: "[TIER: GENESIS]",
    name: "Genesis",
    price: 89,
    description: "The foundation. Begin your biological baseline with curated essentials.",
    featured: false,
    features: [
      "Monthly supplement protocol (30-day supply)",
      "Quarterly biomarker blood panel",
      "Digital dashboard access",
      "AI lifestyle recommendations",
    ],
    blueprint: [
      { label: "Supplements", value: "6 compounds" },
      { label: "Blood Work", value: "Quarterly" },
      { label: "AI Coaching", value: "Basic" },
      { label: "Biomarkers", value: "18 tracked" },
      { label: "Support", value: "Email" },
    ],
  },
  {
    id: "systemic",
    ref: "[TIER: SYSTEMIC]",
    name: "Systemic",
    price: 199,
    description: "Full-system optimization. Advanced protocols for measurable transformation.",
    featured: true,
    features: [
      "Everything in Genesis",
      "Advanced compound stack (12 formulas)",
      "Monthly comprehensive blood work",
      "1-on-1 AI coaching sessions",
      "Genetic predisposition report",
    ],
    blueprint: [
      { label: "Supplements", value: "12 compounds" },
      { label: "Blood Work", value: "Monthly" },
      { label: "AI Coaching", value: "Advanced" },
      { label: "Biomarkers", value: "32 tracked" },
      { label: "Genetic Report", value: "Included" },
      { label: "Support", value: "Priority" },
    ],
  },
  {
    id: "absolute",
    ref: "[TIER: ABSOLUTE]",
    name: "Absolute",
    price: 449,
    description: "Uncompromised longevity. The definitive protocol for biological mastery.",
    featured: false,
    features: [
      "Everything in Systemic",
      "Bespoke compound formulation",
      "Weekly micro-blood panels",
      "Dedicated longevity advisor",
      "Epigenetic age tracking",
      "Priority access to clinical trials",
    ],
    blueprint: [
      { label: "Supplements", value: "Custom formulation" },
      { label: "Blood Work", value: "Weekly micro-panels" },
      { label: "AI Coaching", value: "Dedicated advisor" },
      { label: "Biomarkers", value: "48 tracked" },
      { label: "Epigenetic Age", value: "Included" },
      { label: "Clinical Trials", value: "Priority access" },
      { label: "Support", value: "Concierge" },
    ],
  },
];

export default function TiersSection({ onSelectTier, activeTierId }) {
  const scrollRef = useRef(null);

  return (
    <section id="tiers" className="relative py-32 md:py-40">
      <div className="max-w-[110rem] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="mb-16 md:mb-20"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase block mb-4">
            [REF: MODULAR_MATRIX] — Subscription Protocols
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[0.95]">
            Choose Your
            <br />
            <span className="italic">Biological Stage</span>
          </h2>
          <p className="font-sans text-lg text-muted-foreground mt-6 max-w-lg leading-relaxed">
            Each tier is engineered as a progressive biological protocol.
            Start where you are. Evolve when you're ready.
          </p>
        </motion.div>

        {/* Horizontal scroll on smaller screens, grid on large */}
        <div
          ref={scrollRef}
          className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 lg:mx-0 lg:px-0 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {TIERS.map((tier) => (
            <TierCard
              key={tier.id}
              tier={tier}
              onSelect={onSelectTier}
              isActive={activeTierId === tier.id}
            />
          ))}
        </div>
      </div>

      {/* Glass rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
}