import React from "react";
import { motion } from "framer-motion";
import { Heart, Volume2 } from "lucide-react";

function SpeechBubbleIcon({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

const STEPS = [
  {
    number: "01",
    image: "https://media.base44.com/images/public/69e96f879840c600a93d0ce5/2c2d845cd_screenshotMOBILEwithcomposition.png",
    icon: Heart,
    title: "Share How You Feel",
    body: "PAUSE and name your current emotion—whether you're anxious, tired, or grateful. Your Shepherd Verses companion listens to where you are in this moment.",
    boldPhrase: "Shepherd Verses companion",
    accent: "#5E8DBF",
    objectPosition: "center top",

  },
  {
    number: "02",
    image: "https://media.base44.com/images/public/69e96f879840c600a93d0ce5/ae7a0db6e_istockphoto-2257561497-1024x1024.jpg",
    icon: Volume2,
    title: "Hear a Caring Voice",
    body: "LISTEN as your companion shares spoken scripture and affirmations tailored to your feelings, carefully chosen to guide and support you.",
    accent: "#5E8DBF",
    objectPosition: "center 30%",
  },
];

export default function SVHowItWorks() {
  return (
    <section id="how-it-works" className="relative pt-2 pb-10 md:pt-8 md:pb-20" style={{ background: "linear-gradient(to bottom, rgba(242,241,238,0) 0%, rgba(255,255,255,0.5) 25%, #FFFFFF 60%)" }}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >

          <h2 className="font-serif text-2xl md:text-3xl lg:text-[32px] leading-[1.25] text-[#001C5F]">
            Two simple steps<br /><span className="text-xl md:text-2xl lg:text-[26px]">A day transformed</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative border border-[#E7DED2] h-full flex flex-col rounded-[24px] overflow-hidden"
            >
              {/* Full-bleed image with text overlay */}
              <div className="relative w-full h-56 md:h-64 overflow-hidden">
                <img
                  src={step.image}
                  alt=""
                  className="w-full h-full object-cover"
                  style={{ objectPosition: step.objectPosition || "center center" }}
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
                {/* Overlay text */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 pb-3">
                  <h3 className="font-serif text-2xl text-white mb-1 leading-snug drop-shadow-lg">
                    {step.title}
                  </h3>
                </div>

              </div>

              {/* Card content below image */}
              <div className="p-4 md:p-6 flex-1 flex flex-col">
                <p className="font-sans text-[15px] text-[#4A5568] leading-[1.6]">
                  {(() => {
                    const [first, ...rest] = step.body.split(" ");
                    const remaining = rest.join(" ");
                    if (step.boldPhrase) {
                      const parts = remaining.split(step.boldPhrase);
                      return (
                        <>
                          <span className="font-semibold tracking-wide" style={{ color: step.accent }}>{first}</span>
                          {" "}{parts[0]}<strong className="font-bold text-[#3A4A5A]">{step.boldPhrase}</strong>{parts[1]}
                        </>
                      );
                    }
                    return (
                      <>
                        <span className="font-semibold tracking-wide" style={{ color: step.accent }}>{first}</span>
                        {" "}{remaining}
                      </>
                    );
                  })()}
                </p>
              </div>
            </motion.div>
          ))}
          </div>
        </div>

      </div>


    </section>
  );
}