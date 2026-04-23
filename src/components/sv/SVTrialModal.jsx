import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";

export default function SVTrialModal({ isOpen, onClose, selectedPlan }) {
  const [email, setEmail] = useState("");
  const [platform, setPlatform] = useState("telegram");

  const plan = selectedPlan || { label: "Monthly Companion", price: "$8.95", period: "/ month" };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#3A4A5A]/30 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 24 }}
            transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-[24px] shadow-2xl w-full max-w-md border border-[#E7DED2] overflow-hidden">
              {/* Header */}
              <div className="relative bg-[#243E6B] px-8 py-8">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 min-h-[44px] min-w-[44px] flex items-center justify-center text-white/60 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
                <p className="font-sans text-xs font-medium text-[#669eea] tracking-widest uppercase mb-1">
                  Begin Your Free Trial
                </p>
                <h3 className="font-serif text-2xl text-white leading-snug">
                  {plan.label}
                </h3>
                <p className="font-sans text-[#669eea] mt-1">
                  {plan.price}<span className="text-sm"> {plan.period}</span>
                  {" "}· 7 days free
                </p>
              </div>

              {/* Form */}
              <div className="px-8 py-8 space-y-5">
                {/* Email */}
                <div>
                  <label className="font-sans text-xs font-medium text-[#3A4A5A] tracking-wider uppercase block mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    className="w-full border border-[#E7DED2] rounded-full px-5 py-3 font-sans text-sm text-[#3A4A5A] placeholder:text-[#4A5B6B]/40 focus:outline-none focus:border-[#A9C3D6] transition-colors min-h-[44px] bg-[#F2F1EE]"
                  />
                </div>

                {/* Platform choice */}
                <div>
                  <label className="font-sans text-xs font-medium text-[#3A4A5A] tracking-wider uppercase block mb-3">
                    Deliver messages via
                  </label>
                  <div className="flex gap-3">
                    {[
                      { id: "telegram", label: "Telegram" },
                      { id: "whatsapp", label: "WhatsApp" },
                      { id: "email", label: "Email" },
                    ].map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setPlatform(p.id)}
                        className={`flex-1 font-sans text-sm py-2.5 rounded-full border transition-all duration-200 min-h-[44px] ${
                          platform === p.id
                            ? "bg-[#243E6B] text-white border-[#243E6B]"
                            : "bg-[#F2F1EE] text-[#4A5B6B] border-[#E7DED2] hover:border-[#A9C3D6]"
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full font-sans text-[15px] font-medium text-white py-4 rounded-full min-h-[44px] shadow-md mt-2 transition-opacity duration-300 hover:opacity-90"
                style={{ background: "linear-gradient(90deg, #D9B86A 0%, #F5E9A4 35%, #E8D48B 60%, #D9B86A 100%)", boxShadow: "0 4px 14px rgba(212,185,106,0.4)", textShadow: "0 1px 3px rgba(0,0,0,0.35)" }}>
                  Start My Free 7-Day Trial
                </button>

                <p className="font-sans text-xs text-center text-[#4A5B6B] opacity-70">
                  No credit card required · Cancel anytime · One message per morning
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}