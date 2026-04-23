import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Shield, Truck, RefreshCw } from "lucide-react";

export default function CheckoutPanel({ isOpen, onClose, selectedTier }) {
  const tier = selectedTier || {
    name: "Systemic",
    price: 199,
    ref: "[TIER: SYSTEMIC]",
    features: [],
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[480px] lg:w-[40vw] lg:max-w-[560px] bg-background border-l border-border z-50 overflow-y-auto"
          >
            <div className="p-8 md:p-12 flex flex-col min-h-full">
              {/* Header */}
              <div className="flex items-start justify-between mb-12">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase block mb-2">
                    Commitment Summary
                  </span>
                  <h3 className="font-serif text-3xl text-foreground">
                    {tier.name} Protocol
                  </h3>
                </div>
                <button
                  onClick={onClose}
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close checkout"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Tier details */}
              <div className="space-y-6 flex-1">
                <div className="flex justify-between items-center py-4 border-b border-border">
                  <span className="font-sans text-sm text-muted-foreground">
                    Monthly Protocol
                  </span>
                  <span className="font-serif text-2xl text-foreground">
                    ${tier.price}
                  </span>
                </div>

                <div className="space-y-3">
                  {tier.features?.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-primary mt-2.5 shrink-0" />
                      <span className="font-sans text-sm text-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Guarantees */}
                <div className="mt-8 pt-8 border-t border-border space-y-4">
                  {[
                    { icon: Shield, label: "90-Day Biological Guarantee" },
                    { icon: Truck, label: "Free Priority Shipping" },
                    { icon: RefreshCw, label: "Cancel or Switch Anytime" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-muted-foreground" />
                      <span className="font-sans text-sm text-muted-foreground">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Input fields */}
                <div className="mt-8 space-y-4">
                  <div>
                    <label className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full bg-secondary border border-border px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors min-h-[44px]"
                    />
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 pt-8 border-t border-border">
                <button className="w-full bg-primary text-primary-foreground font-sans text-sm font-semibold py-4 min-h-[44px] animate-pulse-soft hover:shadow-lg transition-all duration-300">
                  Subscribe Now — ${tier.price}/mo
                </button>
                <p className="font-mono text-[10px] text-muted-foreground text-center mt-4 tracking-wider">
                  ENCRYPTED · HIPAA COMPLIANT · CANCEL ANYTIME
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}