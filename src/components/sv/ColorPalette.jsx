export default function ColorPalette() {
  const groups = [
    {
      name: "Navy Tonal System",
      colors: [
        { name: "Primary Navy", hex: "#001C5F" },
        { name: "Secondary Blue", hex: "#2A4B7C" },
        { name: "Body Text Blue", hex: "#5C7EA8" },
        { name: "Supporting Blue", hex: "#AFC3DA" },
        { name: "Stone", hex: "#F2F1EE" },
      ],
    },
    {
      name: "Gold Button Colours",
      colors: [
        { name: "Light Gold", hex: "#F5E9A4" },
        { name: "Mid Gold", hex: "#E8D48B" },
        { name: "Brand Gold", hex: "#D9B86A" },
      ],
    },
    {
      name: "Neutral Colours",
      colors: [
        { name: "White", hex: "#FFFFFF" },
        { name: "Light Divider", hex: "#E8E8E8" },
        { name: "Warm Divider", hex: "#E7DED2" },
        { name: "Accent Divider", hex: "#C5B49A" },
        { name: "Text Grey", hex: "#4A5568" },
      ],
    },
    {
      name: "Accent Colours",
      colors: [
        { name: "Teal Accent", hex: "#4A8C8C" },
        { name: "Light Accent Blue", hex: "#A9C3D6" },
        { name: "Mid Accent Blue (NEW)", hex: "#5E8DBF" },
      ],
    },
  ];

  return (
    <div className="p-8 bg-[#F2F1EE] min-h-screen">
      <h1 className="font-serif text-4xl text-[#001C5F] mb-2">Shepherd Verses — Master Colour Palette</h1>
      <p className="font-sans text-sm text-[#4A5568] mb-12">Clean Layout · Current as of April 2026</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {groups.map((group) => (
          <div key={group.name}>
            <h2 className="font-serif text-xl text-[#001C5F] mb-4 italic">{group.name}</h2>
            <div className="border border-[#E8E8E8] rounded-[12px] overflow-hidden bg-white">
              {group.colors.map((color, i) => (
                <div
                  key={color.hex}
                  className={`flex items-center gap-4 px-5 py-3 ${i !== group.colors.length - 1 ? "border-b border-[#E8E8E8]" : ""}`}
                >
                  <div
                    className="w-12 h-8 rounded flex-shrink-0 border border-[#E8E8E8]"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="font-sans text-sm text-[#3A4A5A] flex-1">{color.name}</span>
                  <span className="font-mono text-sm text-[#5C7EA8] font-medium">{color.hex}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}