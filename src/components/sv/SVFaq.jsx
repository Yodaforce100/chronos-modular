import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "What is Shepherd Verses?",
    a: "Shepherd Verses is a personal spiritual companion that listens to how you're feeling and responds with carefully chosen scripture and affirmations to guide, comfort, and encourage you throughout your day.",
  },
  {
    q: "How does Shepherd Verses work?",
    a: "Simply share how you're feeling, and your Shepherd Verses companion selects scripture and words of encouragement that speak directly to your moment — helping you find clarity, reassurance, and peace.",
  },
  {
    q: "Do I need to know the Bible to use Shepherd Verses?",
    a: "Not at all. Shepherd Verses gently guides you with scripture that is thoughtfully chosen for your situation, whether you're familiar with the Bible or just beginning your journey.",
  },
  {
    q: "What kinds of feelings can I share?",
    a: "You can share any feeling — anxious, grateful, tired, uncertain, hopeful, or overwhelmed. Shepherd Verses meets you where you are and responds with scripture that speaks to your heart.",
  },
  {
    q: "Will the scripture be relevant to how I feel?",
    a: "Yes. Each response is thoughtfully chosen to reflect your emotion and provide comfort, encouragement, and guidance based on God's word.",
  },
  {
    q: "Can I use Shepherd Verses more than once a day?",
    a: "Yes. You can return to Shepherd Verses whenever you need encouragement, reassurance, or guidance — whether once a day or several times throughout your day.",
  },
];

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-[#E7DED2] last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 md:py-4 text-left gap-4"
      >
        <span className="font-serif text-[17px] md:text-[16px] text-[#001C5F] leading-snug">{faq.q}</span>
        <ChevronDown
          className="w-5 h-5 text-[#C9A84C] shrink-0 transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
            className="overflow-hidden"
          >
            <p className="font-sans text-[15px] text-[#2A4B7C] leading-[1.7] pb-5">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SVFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative py-10 md:py-10 bg-white">
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-40 pointer-events-none hidden md:block" style={{ backgroundImage: "url('https://media.base44.com/images/public/69e96f879840c600a93d0ce5/dcaf9fcc8_istockphoto-1164883816-1024x1024.jpg')", backgroundSize: "cover", backgroundPosition: "20% center", filter: "saturate(0.7) brightness(1.05)" }} />
      <div className="absolute inset-0 opacity-40 pointer-events-none md:hidden" style={{ backgroundImage: "url('https://media.base44.com/images/public/69e96f879840c600a93d0ce5/dcaf9fcc8_istockphoto-1164883816-1024x1024.jpg')", backgroundSize: "cover", backgroundPosition: "center center", filter: "saturate(0.7) brightness(1.05)" }} />
      {/* Fade in from top */}
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-10" style={{ background: "linear-gradient(to bottom, white, transparent)" }} />

      <div className="max-w-2xl mx-auto px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:max-w-xl lg:max-w-none mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-16 bg-[#C9A84C] opacity-60" />
            <span className="text-[#C9A84C] text-xl">✝</span>
            <div className="h-px w-16 bg-[#C9A84C] opacity-60" />
          </div>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-[32px] leading-[1.25] text-[#001C5F]">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-[24px] border border-[#E7DED2] px-6 md:px-8 md:max-w-xl lg:max-w-none mx-auto"
        >
          {FAQS.map((faq, i) => (
            <FaqItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}