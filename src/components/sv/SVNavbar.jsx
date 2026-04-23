import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function SVNavbar({ onCTAClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Plans", href: "#plans" },
  ];

  return (
    <motion.nav
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/95 backdrop-blur-xl border-b border-[#E7DED2] ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      {/* Single row: nav link left | logo center | button right */}
      <div className="max-w-5xl mx-auto px-6 h-16 md:h-20 grid grid-cols-3 items-center">
        {/* Left: nav links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-sm font-medium text-[#243E6B] hover:text-[#243E6B]/80 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile: hamburger on left */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center text-[#3A4A5A]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Center: logo */}
        <div className="flex justify-center">
          <a href="#" aria-label="Shepherd Verses home">
            <img
              src="https://media.base44.com/images/public/69e96f879840c600a93d0ce5/7169efe87_Shepherd_Verses_herologo_sound_blue_3000.png"
              alt="Shepherd Verses"
              className="h-16 md:h-20 w-auto"
            />
          </a>
        </div>

        {/* Right: CTA button */}
        <div className="flex justify-end">
          <button
            onClick={onCTAClick}
            className="hidden md:inline-flex font-sans text-sm font-medium text-white px-6 py-2.5 rounded-full min-h-[44px] items-center transition-opacity duration-300 hover:opacity-90"
            style={{ background: "linear-gradient(90deg, #D9B86A 0%, #F5E9A4 35%, #E8D48B 60%, #D9B86A 100%)", boxShadow: "0 4px 14px rgba(212,185,106,0.4)", textShadow: "0 1px 3px rgba(0,0,0,0.35)" }}
          >
            Begin Free Trial
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-b border-[#E7DED2] overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-sans text-base text-[#243E6B] py-2"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => { onCTAClick(); setMobileOpen(false); }}
                className="font-sans text-sm font-medium text-white px-6 py-3 rounded-full mt-2 transition-opacity duration-300 hover:opacity-90"
                style={{ background: "linear-gradient(90deg, #D9B86A 0%, #F5E9A4 35%, #E8D48B 60%, #D9B86A 100%)", boxShadow: "0 4px 14px rgba(212,185,106,0.4)", textShadow: "0 1px 3px rgba(0,0,0,0.35)" }}
              >
                Begin Free Trial
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}