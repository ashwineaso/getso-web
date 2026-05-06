import AppBadges from "@/components/ui/AppBadges";

export default function HeroSection() {
  return (
    <section className="pt-20 pb-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left: copy */}
        <div>
          <p className="text-brand font-medium text-xs tracking-widest uppercase mb-4">
            FREE ON iOS &amp; ANDROID
          </p>
          <h1 className="font-semibold text-4xl md:text-[52px] leading-tight text-text-pri mb-6">
            Stop buying four pints of milk.
          </h1>
          <p className="text-lg text-text-sec leading-relaxed max-w-[520px] mb-8">
            Getso is the shared shopping list your household actually sticks to.
            Add items, see what your partner added, and tick things off
            together — even if you&apos;re in different aisles.
          </p>
          <AppBadges />
          <p className="text-text-muted text-xs mt-6">
            Free to use · No account needed to start · Works offline
          </p>
        </div>

        {/* Right: phone mockup (pure CSS — no images) */}
        <div className="flex justify-center">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  const checkedItems = ["Bananas", "Avocados"];
  const uncheckedItems = [
    { name: "Semi-skimmed milk 4 pints", partner: false },
    { name: "Cathedral City mature cheddar", partner: true },
    { name: "Warburtons medium sliced", partner: false },
    { name: "Fairy washing up liquid", partner: false },
  ];

  return (
    <div className="w-[260px] h-[520px] bg-white rounded-[36px] border-4 border-border shadow-2xl overflow-hidden flex flex-col">
      {/* Phone header bar */}
      <div className="bg-brand-light px-4 py-3 flex items-center justify-between flex-shrink-0">
        <span className="text-brand-dark font-semibold text-sm">
          Weekly Shop
        </span>
        <div className="flex items-center gap-1">
          {/* User avatars: G (green, self) and B (blue, Jake) */}
          <div className="w-6 h-6 rounded-full bg-brand flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">G</span>
          </div>
          <div className="w-6 h-6 rounded-full bg-[#3B82F6] flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">B</span>
          </div>
        </div>
      </div>

      {/* List items */}
      <div className="flex-1 overflow-hidden px-3 py-2 flex flex-col gap-0.5">
        {/* Checked items */}
        {checkedItems.map((item) => (
          <div key={item} className="flex items-center gap-2 px-1 py-2">
            <div className="w-4 h-4 rounded-full bg-brand flex items-center justify-center flex-shrink-0">
              <svg
                className="w-2.5 h-2.5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="text-text-muted text-xs line-through">{item}</span>
          </div>
        ))}

        {/* Divider */}
        <div className="border-t border-border my-1" />

        {/* Unchecked items */}
        {uncheckedItems.map((item) => (
          <div key={item.name} className="flex items-center gap-2 px-1 py-2">
            <div className="w-4 h-4 rounded-full border-2 border-border flex-shrink-0" />
            <span className="text-text-pri text-xs flex-1 leading-tight">
              {item.name}
            </span>
            {item.partner && (
              <div className="w-5 h-5 rounded-full bg-[#3B82F6] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[9px] font-bold">B</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom bar hint */}
      <div className="bg-bg-sec border-t border-border px-4 py-2 flex-shrink-0">
        <span className="text-text-muted text-[10px]">
          Tap an item to tick it off
        </span>
      </div>
    </div>
  );
}
