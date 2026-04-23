import React from "react";

export default function Footer() {
  return (
    <footer className="py-16 md:py-24">
      <div className="max-w-[110rem] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-serif text-lg text-foreground">Chronos</span>
              <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                Modular
              </span>
            </div>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-xs">
              Redefining human longevity through data-driven biological
              refinement. Your biology, optimized.
            </p>
          </div>

          {/* Links */}
          {[
            {
              title: "Protocol",
              links: ["Genesis", "Systemic", "Absolute", "Compare Tiers"],
            },
            {
              title: "Science",
              links: ["Research", "Biomarkers", "Lab Partners", "Clinical Trials"],
            },
            {
              title: "Company",
              links: ["About", "Careers", "Press", "Contact"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
            © 2026 Chronos Modular. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "HIPAA"].map((link) => (
              <a
                key={link}
                href="#"
                className="font-mono text-[10px] tracking-widest text-muted-foreground hover:text-foreground uppercase transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}