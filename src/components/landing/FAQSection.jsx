import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "How does the biological assessment work?",
    a: "Upon subscription, you receive an at-home blood collection kit. Your samples are processed in our CLIA-certified partner labs, and results populate your dashboard within 5 business days. AI analysis begins immediately, generating your personalized protocol.",
  },
  {
    q: "Can I switch tiers at any time?",
    a: "Absolutely. Your subscription is modular by design. Upgrade or adjust your tier at any point during your billing cycle. Changes take effect at your next protocol shipment, ensuring a seamless biological transition.",
  },
  {
    q: "What's in the supplement compounds?",
    a: "Each compound is GMP-certified and third-party tested. Formulations are based on peer-reviewed longevity research and tailored to your biomarker profile. Full ingredient transparency is available in your dashboard.",
  },
  {
    q: "How is my data protected?",
    a: "All biological data is encrypted at rest (AES-256) and in transit (TLS 1.3). We are HIPAA-compliant and SOC 2 Type II certified. You own your data—export or delete it at any time.",
  },
  {
    q: "What if I don't see results?",
    a: "Our protocols are evidence-based, but biology is individual. If your biomarkers don't show measurable improvement within 90 days, we offer a full protocol adjustment or refund. We call it our Biological Guarantee.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="relative py-32 md:py-40">
      <div className="max-w-[110rem] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          >
            <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase block mb-4">
              [REF: KNOWLEDGE_BASE] — Common Inquiries
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[0.95]">
              The
              <br />
              <span className="italic">Science</span>
              <br />
              Behind It
            </h2>
            <p className="font-sans text-lg text-muted-foreground mt-6 max-w-sm leading-relaxed">
              Transparency is fundamental to our protocol. Every question
              answered, every compound explained.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.2, 0, 0, 1], delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                  <AccordionTrigger className="font-sans text-base text-foreground hover:no-underline py-6 min-h-[44px]">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-base text-muted-foreground leading-relaxed pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
}