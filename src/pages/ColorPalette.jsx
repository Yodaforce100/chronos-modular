import React from "react";

const COLORS = [
  { name: "Primary Navy", hex: "#001C5F", usage: "Main headings, primary text" },
  { name: "Body Text Blue", hex: "#5E8DBF", usage: "Body copy, accent text" },
  { name: "Dark Blue", hex: "#2A4B7C", usage: "Body text, secondary headings" },
  { name: "Brand Gold", hex: "#D9B86A", usage: "Buttons, CTA elements" },
  { name: "Darker Gold", hex: "#C9A84C", usage: "Dividers, accents" },
  { name: "Dark Gold", hex: "#CF9D3E", usage: "Soundwave animation bars" },
  { name: "Stone", hex: "#F2F1EE", usage: "Main background" },
  { name: "Light Stone", hex: "#F7F6F4", usage: "Card backgrounds" },
  { name: "White", hex: "#FFFFFF", usage: "Card surfaces, overlays" },
  { name: "Warm Divider", hex: "#E7DED2", usage: "Borders, lines" },
  { name: "Neutral Text", hex: "#3A4A5A", usage: "Body text" },
  { name: "Muted Text", hex: "#4A5B6B", usage: "Secondary text" },
  { name: "Neutral Text Dark", hex: "#334455", usage: "Footer text" },
  { name: "Modal Header Blue", hex: "#243E6B", usage: "Modal headers" },
  { name: "Light Blue", hex: "#AFC3DA", usage: "Rare accents" },
  { name: "Teal Accent", hex: "#4A8C8C", usage: "Mood cards" },
  { name: "Blue (Config)", hex: "#669eea", usage: "Config reference" },
];

export default function ColorPalette() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl text-[#001C5F] mb-2">
          Shepherd Verses — Working Colour Palette
        </h1>
        <p className="font-sans text-sm text-[#4A5B6B] mb-12">
          All colours currently used on the website
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COLORS.map((color) => (
            <div key={color.hex} className="border border-[#E7DED2] rounded-lg overflow-hidden">
              <div
                className="h-32 w-full border-b border-[#E7DED2]"
                style={{ backgroundColor: color.hex }}
              />
              <div className="p-4">
                <h3 className="font-sans font-semibold text-[#001C5F] mb-1">
                  {color.name}
                </h3>
                <p className="font-mono text-sm text-[#2A4B7C] font-medium mb-2">
                  {color.hex}
                </p>
                <p className="font-sans text-xs text-[#4A5B6B]">
                  {color.usage}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[#E7DED2]">
          <p className="font-sans text-xs text-[#4A5B6B]">
            Print this page to PDF for documentation. Updated: April 26, 2026
          </p>
        </div>
      </div>
    </div>
  );
}