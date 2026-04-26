import React from "react";
import { motion } from "framer-motion";

const REVIEWS = [
  {
    name: "Margaret T.",
    location: "Tennessee",
    quote: "Every morning I used to reach for my phone and feel anxious before the day even started. Now I start with Shepherd Verses and it genuinely changes my whole outlook. The scripture it chooses always feels like it was written just for me.",
    stars: 5,
  },
  {
    name: "David R.",
    location: "Texas",
    quote: "I was sceptical at first — I've been a Christian for thirty years and wondered what an app could offer me. But the way it listens and responds with such relevant scripture surprised me deeply. It's become part of my morning prayer time.",
    stars: 5,
  },
  {
    name: "Joanne M.",
    location: "Georgia",
    quote: "I shared that I was feeling overwhelmed one morning and the verse it gave me brought me to tears — in the best way. It felt like being heard. I've recommended it to everyone in my small group.",
    stars: 5,
  },
];

function Stars({ count }) {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-[#C9A84C] text-base">★</span>
      ))}
    </div>
  );
}

export default function SVReviews() {
  return (
    <section className="relative pt-8 pb-8 md:pt-12 md:pb-12 bg-white">
      <div className="max-w-3xl mx-auto px-10 md:px-16 lg:px-6">
        <h2 className="font-serif text-2xl md:text-3xl text-[#001C5F] text-center mb-8">
          What Our Members Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#F7F6F4] rounded-[20px] border border-[#E7DED2] p-3 flex flex-col"
            >
              <Stars count={review.stars} />
              <p className="font-serif text-[12px] text-[#2A4B7C] leading-[1.6] italic flex-1">
                "{review.quote}"
              </p>
              <div className="mt-3 pt-3 border-t border-[#E7DED2]">
                <p className="font-sans text-sm font-semibold text-[#001C5F]">{review.name}</p>
                <p className="font-sans text-xs text-[#5E8DBF]">{review.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}