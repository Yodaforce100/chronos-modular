import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const PLANS = [
  {
    id: "monthly",
    label: "Monthly Companion",
    price: "$8.95",
    period: "/ month",
    cta: "Start Monthly Plan",
    featured: false,
    badge: null,
    features: [
      "Daily Delivery: 1 spoken & written message every morning",
      "Custom Timing: Receive your prompt at a time that suits your routine",
      "Platform Choice: Delivered via Telegram, WhatsApp, or Email",
      "No Commitment: Manage or cancel your subscription at any time",
    ],
  },
  {
    id: "annual",
    label: "Annual Journey",
    price: "$89.50",
    period: "/ year",
    cta: "Start Annual Journey",
    featured: true,
    badge: "12 Months for the Price of 10",
    features: [
      "12 Months for the Price of 10: Our best value for daily encouragement",
      "Continuous Access: All features included for a full year",
      "Simplified Billing: One annual payment for year-round peace",
      "Everything in Monthly, plus priority support",
    ],
  },
];

export default function SVPlans({ onSelectPlan }) {
  return (
    <section id="plans" className="relative py-16 md:py-36">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >

          <h2 className="font-serif text-3xl md:text-4xl lg:text-[44px] leading-[1.25] text-[#001c5f]">
            Choose Your Subscription
          </h2>
          <p className="font-sans text-[16px] text-[#334455] mt-4">
            One message every morning. Cancel anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-10">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-[24px] border p-5 md:p-10 ${
                plan.featured
                  ? "bg-[#243E6B] border-[#243E6B] text-white shadow-xl"
                  : "bg-white border-[#E7DED2] text-[#3A4A5A]"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="font-sans text-[11px] font-semibold text-white bg-[#C9A84C] px-4 py-1.5 rounded-full whitespace-nowrap shadow">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Label */}
              <p className={`font-sans text-xs font-medium tracking-widest uppercase mb-6 ${plan.featured ? "text-[#669eea]" : "text-[#669eea]"}`}>
                {plan.label}
              </p>

              {/* Price */}
              <div className="flex items-end gap-1.5 mb-6">
                <span className={`font-serif text-5xl md:text-6xl ${plan.featured ? "text-white" : "text-[#3A4A5A]"}`}>
                  {plan.price}
                </span>
                <span className={`font-sans text-sm mb-2 ${plan.featured ? "text-[#A9C3D6]" : "text-[#4A5B6B]"}`}>
                  {plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-6">
                {plan.features.map((feat) => {
                  const [title, ...rest] = feat.split(": ");
                  return (
                    <li key={feat} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          plan.featured ? "bg-[#4A8C8C]" : "bg-[#4A8C8C]/20"
                        }`}
                      >
                        <Check className={`w-3 h-3 ${plan.featured ? "text-white" : "text-[#669eea]"}`} />
                      </div>
                      <span className={`font-sans text-[15px] leading-snug ${plan.featured ? "text-white/90" : "text-[#334455]"}`}>
                        {rest.length > 0 ? rest.join(": ") : feat}
                      </span>
                    </li>
                  );
                })}
              </ul>

              {/* CTA */}
              <button
                onClick={() => onSelectPlan(plan)}
                className={`w-full font-sans text-[15px] font-medium py-4 rounded-full min-h-[44px] transition-opacity duration-300 hover:opacity-90 ${
                  plan.featured
                    ? "text-white shadow-md"
                    : "bg-[#F2F1EE] text-[#3A4A5A] border border-[#E7DED2] hover:bg-[#E7DED2]"
                }`}
                style={plan.featured ? { background: "linear-gradient(90deg, #D9B86A 0%, #F5E9A4 35%, #E8D48B 60%, #D9B86A 100%)", boxShadow: "0 4px 14px rgba(212,185,106,0.4)", textShadow: "0 1px 3px rgba(0,0,0,0.35)" } : {}}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-6 mt-12 text-[#334455]"
        >
          {["🔒 Secure Payment", "✦ Cancel Anytime", "🎁 7-Day Free Trial"].map((badge) => (
            <span key={badge} className="font-sans text-sm">
              {badge}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#E7DED2]" />
    </section>
  );
}