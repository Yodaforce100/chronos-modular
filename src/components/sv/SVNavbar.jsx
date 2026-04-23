import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

function ShepherdLogo() {
  return (
    <img
      src="https://media.base44.com/images/public/69e96f879840c600a93d0ce5/fa7c06e06_Shepherd_Verses_herologo_sound_blue_1500.png"
      alt="Shepherd Verses"
      className="h-9 w-auto"
    />
  );
}

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F2F1EE]/90 backdrop-blur-xl border-b border-[#E7DED2] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16 md:h-18">
        <a href="#" aria-label="Shepherd Verses home">
          <ShepherdLogo />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-sm font-medium text-[#4A5B6B] hover:text-[#3A4A5A] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onCTAClick}
            className="font-sans text-sm font-medium text-white bg-[#D88C7A] px-6 py-2.5 rounded-full hover:bg-[#c97b69] transition-all duration-300 min-h-[44px] animate-pulse-soft shadow-sm"
          >
            Begin Free Trial
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center text-[#3A4A5A]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#F2F1EE] border-b border-[#E7DED2] overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-sans text-base text-[#4A5B6B] py-2"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => { onCTAClick(); setMobileOpen(false); }}
                className="font-sans text-sm font-medium text-white bg-[#D88C7A] px-6 py-3 rounded-full mt-2"
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