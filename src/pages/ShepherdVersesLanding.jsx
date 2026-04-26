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
      <div className="relative w-full h-36 md:h-44 flex flex-col items-center justify-center" style={{ background: "linear-gradient(to bottom, white 0%, #F2F1EE 50%, white 100%)" }}>
        <div className="flex items-center gap-3">
          <div className="h-px w-16 bg-[#C9A84C] opacity-60" />
          <span className="font-sans text-[11px] font-medium text-[#C9A84C] tracking-widest uppercase">What People Are Saying</span>
          <div className="h-px w-16 bg-[#C9A84C] opacity-60" />
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