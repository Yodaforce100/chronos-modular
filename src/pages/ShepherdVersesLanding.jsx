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
      <div
        className="w-full h-24 md:h-32"
        style={{
          backgroundImage: "url('https://media.base44.com/images/public/69e96f879840c600a93d0ce5/583f3e10d_iStock-2235714260.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          opacity: 0.55,
          filter: "grayscale(0.3) brightness(1.1)",
        }}
      />
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