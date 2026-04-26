import React, { useState } from "react";
import SVNavbar from "../components/sv/SVNavbar";
import SVHero from "../components/sv/SVHero";
import SVConnection from "../components/sv/SVConnection";
import SVHowItWorks from "../components/sv/SVHowItWorks";
import SVPlans from "../components/sv/SVPlans";
import SVFooter from "../components/sv/SVFooter";
import SVReviews from "../components/sv/SVReviews";
import SVFaq from "../components/sv/SVFaq";
import SVTrialModal from "../components/sv/SVTrialModal";

export default function ShepherdVersesLanding() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleOpenModal = () => setModalOpen(true);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F2F1EE] font-sans">
      <SVNavbar onCTAClick={handleOpenModal} />
      <SVHero onCTAClick={handleOpenModal} />
      <SVConnection />
      <SVHowItWorks />
      <div className="relative w-full h-36 md:h-44 overflow-hidden">
        <img
          src="https://media.base44.com/images/public/69e96f879840c600a93d0ce5/583f3e10d_iStock-2235714260.jpg"
          alt=""
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 40%", filter: "saturate(0.3) hue-rotate(180deg) brightness(1.15) grayscale(0.3)", opacity: 0.4 }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, white 0%, transparent 40%, transparent 60%, white 100%)" }} />
        {/* Heading overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-8 bg-[#C9A84C] opacity-60" />
            <span className="font-sans text-[11px] font-medium text-[#C9A84C] tracking-widest uppercase">What People Are Saying</span>
            <div className="h-px w-8 bg-[#C9A84C] opacity-60" />
          </div>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-[32px] leading-[1.25] text-[#001C5F]">
            Voices from the community
          </h2>
        </div>
      </div>
      <SVReviews />
      <div className="border-b border-[#E7DED2]" />
      <SVPlans onSelectPlan={handleSelectPlan} />
      <div className="border-b border-[#E7DED2]" />
      <SVFaq />
      <div className="border-b border-[#E7DED2]" />
      <SVFooter />
      <SVTrialModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </div>
  );
}