export default function ColorPalette() {
  const colors = [
    { name: "Dark Navy", hex: "#001c5f", category: "Primary Brand Colors", usage: "headings, primary text" },
    { name: "Brand Gold", hex: "#D9B86A", category: "Primary Brand Colors", usage: "buttons, accents, gradients" },
    { name: "Light Blue", hex: "#669eea", category: "Primary Brand Colors", usage: "secondary text, accent, icons" },
    { name: "Stone/Off-white", hex: "#F2F1EE", category: "Primary Brand Colors", usage: "background" },
    { name: "Text Primary", hex: "#001c5f", category: "Text Colors", usage: "headings" },
    { name: "Text Secondary", hex: "#334455", category: "Text Colors", usage: "secondary/muted text" },
    { name: "Foreground", hex: "#3A4A5A", category: "Text Colors", usage: "general text" },
    { name: "Body Text", hex: "#4A5B6B", category: "Text Colors", usage: "paragraph text, descriptions" },
    { name: "White", hex: "#FFFFFF", category: "UI & Structural", usage: "card backgrounds" },
    { name: "Divider Light", hex: "#E8E8E8", category: "UI & Structural", usage: "borders and separators" },
    { name: "Divider", hex: "#E7DED2", category: "UI & Structural", usage: "borders and separators" },
    { name: "Subtle divider", hex: "#C5B49A", category: "UI & Structural", usage: "accent lines" },
    { name: "Dark blue", hex: "#243E6B", category: "Interactive & Component", usage: "featured plan card background" },
    { name: "Teal", hex: "#4A8C8C", category: "Interactive & Component", usage: "check marks, accents" },
    { name: "Muted gold", hex: "#C9A84C", category: "Interactive & Component", usage: "badges" },
    { name: "Light blue secondary", hex: "#A9C3D6", category: "Interactive & Component", usage: "secondary text on dark backgrounds" },
    { name: "Gold gradient light", hex: "#F5E9A4", category: "Interactive & Component", usage: "button gradients" },
    { name: "Gold gradient dark", hex: "#E8D48B", category: "Interactive & Component", usage: "button gradients" },
  ];

  const categories = ["Primary Brand Colors", "Text Colors", "UI & Structural", "Interactive & Component"];

  return (
    <div className="p-8 bg-[#F2F1EE] min-h-screen">
      <h1 className="font-serif text-4xl text-[#001c5f] mb-12">Color Palette</h1>
      
      {categories.map((category) => (
        <div key={category} className="mb-12">
          <h2 className="font-serif text-2xl text-[#001c5f] mb-6">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {colors
              .filter((color) => color.category === category)
              .map((color) => (
                <div key={color.hex} className="flex items-start gap-4 bg-white p-4 rounded-lg border border-[#E7DED2]">
                  <div
                    className="w-16 h-16 rounded-md flex-shrink-0 border border-[#E7DED2]"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="flex-1">
                    <p className="font-sans font-semibold text-[#001c5f]">{color.name}</p>
                    <p className="font-mono text-sm text-[#4A5B6B] font-medium">{color.hex}</p>
                    <p className="font-sans text-xs text-[#669eea] mt-1">{color.usage}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}