import React, { useState } from "react";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import TiersSection from "../components/landing/TiersSection";
import DashboardPreview from "../components/landing/DashboardPreview";
import Testimonials from "../components/landing/Testimonials";
import FAQSection from "../components/landing/FAQSection";
import CTABanner from "../components/landing/CTABanner";
import CheckoutPanel from "../components/landing/CheckoutPanel";
import Footer from "../components/landing/Footer";

export default function Landing() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState(null);

  const handleSelectTier = (tier) => {
    setSelectedTier(tier);
    setCheckoutOpen(true);
  };

  const handleOpenCheckout = () => {
    if (!selectedTier) {
      setSelectedTier({
        id: "systemic",
        name: "Systemic",
        price: 199,
        ref: "[TIER: SYSTEMIC]",
        features: [
          "Everything in Genesis",
          "Advanced compound stack (12 formulas)",
          "Monthly comprehensive blood work",
          "1-on-1 AI coaching sessions",
          "Genetic predisposition report",
        ],
      });
    }
    setCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar onOpenCheckout={handleOpenCheckout} />
      <HeroSection onBeginProtocol={handleOpenCheckout} />
      <TiersSection
        onSelectTier={handleSelectTier}
        activeTierId={selectedTier?.id}
      />
      <DashboardPreview />
      <Testimonials />
      <FAQSection />
      <CTABanner onBeginProtocol={handleOpenCheckout} />
      <Footer />
      <CheckoutPanel
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        selectedTier={selectedTier}
      />
    </div>
  );
}