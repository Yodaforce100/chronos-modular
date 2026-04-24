import React, { useState } from "react";
import SVNavbar from "../components/sv/SVNavbar";
import SVHero from "../components/sv/SVHero";
import SVConnection from "../components/sv/SVConnection";
import SVHowItWorks from "../components/sv/SVHowItWorks";
import SVPlans from "../components/sv/SVPlans";
import SVFooter from "../components/sv/SVFooter";
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
      <div className="border-b border-[#E7DED2]" />
      <SVHowItWorks />
      <div className="border-b border-[#E7DED2]" />
      <SVConnection />
      <div className="border-b border-[#E7DED2]" />
      <SVPlans onSelectPlan={handleSelectPlan} />
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