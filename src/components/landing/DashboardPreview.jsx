import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Brain, Heart, Zap, Moon, Droplets } from "lucide-react";

const BG_IMG = "https://media.base44.com/images/public/69e96f879840c600a93d0ce5/355b8bf07_generated_9383da55.png";

const HOTSPOTS = [
  {
    id: "cortisol",
    icon: Brain,
    label: "Cortisol",
    value: "12.4 µg/dL",
    status: "Optimized",
    statusColor: "text-primary",
    top: "22%",
    left: "48%",
  },
  {
    id: "hrv",
    icon: Heart,
    label: "HRV",
    value: "68 ms",
    status: "Above baseline",
    statusColor: "text-primary",
    top: "38%",
    left: "42%",
  },
  {
    id: "testosterone",
    icon: Zap,
    label: "Free Testosterone",
    value: "18.2 pg/mL",
    status: "Peak range",
    statusColor: "text-primary",
    top: "50%",
    left: "52%",
  },
  {
    id: "sleep",
    icon: Moon,
    label: "Deep Sleep",
    value: "2h 14m",
    status: "Improving",
    statusColor: "text-muted-foreground",
    top: "15%",
    left: "55%",
  },
  {
    id: "hydration",
    icon: Droplets,
    label: "Hydration Index",
    value: "94%",
    status: "Optimal",
    statusColor: "text-primary",
    top: "65%",
    left: "46%",
  },
];

function Hotspot({ spot, isActive, onClick }) {
  return (
    <div
      className="absolute"
      style={{ top: spot.top, left: spot.left }}
    >
      <button
        onClick={() => onClick(spot.id)}
        className="relative group min-h-[44px] min-w-[44px] flex items-center justify-center"
        aria-label={`View ${spot.label} data`}
      >
        <span className="absolute w-3 h-3 rounded-full bg-primary/40 animate-ping" />
        <span className="relative w-3 h-3 rounded-full bg-primary" />
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-background/95 backdrop-blur-xl border border-border p-4 min-w-[200px] z-10 shadow-lg"
          >
            <div className="flex items-center gap-2 mb-2">
              <spot.icon className="w-3.5 h-3.5 text-primary" />
              <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                {spot.label}
              </span>
            </div>
            <p className="font-serif text-2xl text-foreground">{spot.value}</p>
            <p className={`font-sans text-xs mt-1 ${spot.statusColor}`}>
              {spot.status}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function DashboardPreview() {
  const [activeSpot, setActiveSpot] = useState("cortisol");

  return (
    <section id="dashboard" className="relative py-32 md:py-40 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.04]">
        <img
          src={BG_IMG}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-[110rem] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          >
            <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase block mb-4">
              [REF: LIVE_DATA] — Dashboard Preview
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[0.95]">
              See the
              <br />
              <span className="italic">Invisible</span>
            </h2>
            <p className="font-sans text-lg text-muted-foreground mt-6 max-w-md leading-relaxed">
              Your subscriber dashboard transforms raw biomarker data into
              actionable intelligence. Track 48 biological markers in real-time,
              with AI-driven insights that evolve with your biology.
            </p>

            {/* Mock stats row */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              {[
                { value: "48", label: "Biomarkers" },
                { value: "Real-time", label: "Updates" },
                { value: "AI", label: "Insights" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-2xl md:text-3xl text-foreground">
                    {s.value}
                  </p>
                  <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Interactive silhouette with hotspots */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.2, 0, 0, 1], delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              {/* Silhouette outline */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  viewBox="0 0 200 350"
                  className="w-full h-full"
                  fill="none"
                  stroke="hsl(var(--border))"
                  strokeWidth="0.5"
                >
                  {/* Simplified human silhouette */}
                  <ellipse cx="100" cy="55" rx="25" ry="30" />
                  <line x1="100" y1="85" x2="100" y2="200" />
                  <line x1="100" y1="110" x2="55" y2="170" />
                  <line x1="100" y1="110" x2="145" y2="170" />
                  <line x1="100" y1="200" x2="70" y2="320" />
                  <line x1="100" y1="200" x2="130" y2="320" />
                </svg>
              </div>

              {/* Hotspots */}
              {HOTSPOTS.map((spot) => (
                <Hotspot
                  key={spot.id}
                  spot={spot}
                  isActive={activeSpot === spot.id}
                  onClick={setActiveSpot}
                />
              ))}

              {/* Ambient glow */}
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
}