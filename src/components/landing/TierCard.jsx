import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function TierCard({ tier, onSelect, isActive }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
      className={`relative flex flex-col border transition-all duration-500 min-w-[320px] md:min-w-[360px] snap-center ${
        isActive
          ? "border-primary bg-background shadow-lg"
          : "border-border bg-background hover:border-muted-foreground/30"
      }`}
    >
      {tier.featured && (
        <div className="absolute -top-px left-0 right-0 h-[2px] bg-primary" />
      )}

      <div className="p-8 md:p-10 flex-1">
        <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
          {tier.ref}
        </span>
        <h3 className="font-serif text-3xl md:text-4xl text-foreground mt-3">
          {tier.name}
        </h3>
        <p className="font-sans text-base text-muted-foreground mt-3 leading-relaxed">
          {tier.description}
        </p>

        <div className="mt-8 flex items-end gap-1">
          <span className="font-serif text-5xl text-foreground">${tier.price}</span>
          <span className="font-sans text-sm text-muted-foreground mb-2">/month</span>
        </div>

        {/* Core features */}
        <ul className="mt-8 space-y-3">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span className="w-1 h-1 rounded-full bg-primary mt-2.5 shrink-0" />
              <span className="font-sans text-sm text-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Expandable blueprint */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 mt-8 font-mono text-[11px] tracking-widest text-muted-foreground hover:text-foreground transition-colors uppercase min-h-[44px]"
        >
          Package Blueprint
          <ChevronDown
            className={`w-3 h-3 transition-transform duration-300 ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-border mt-4 space-y-3">
                {tier.blueprint.map((item) => (
                  <div key={item.label} className="flex justify-between items-center">
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {item.label}
                    </span>
                    <span className="font-sans text-sm text-foreground font-medium">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-8 md:p-10 pt-0">
        <button
          onClick={() => onSelect(tier)}
          className={`w-full font-sans text-sm font-semibold py-4 min-h-[44px] transition-all duration-300 ${
            tier.featured
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-secondary text-secondary-foreground hover:bg-accent"
          }`}
        >
          Select {tier.name}
        </button>
      </div>
    </motion.div>
  );
}