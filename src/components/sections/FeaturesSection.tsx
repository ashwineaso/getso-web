import SectionHeader from "@/components/ui/SectionHeader";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-6 bg-bg-sec">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="FEATURES"
          heading="Everything your household needs to shop smarter."
          centered
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          <LiveListCard />
          <ShoppingModeCard />
          <OcrCard />
          <TripSummaryCard />
        </div>
      </div>
    </section>
  );
}

function LiveListCard() {
  return (
    <div className="bg-white border border-border rounded-xl p-8 shadow-sm">
      {/* Visual: mini list preview with two presence avatars */}
      <div className="mb-6 bg-bg-sec rounded-lg p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between mb-1">
          <span className="text-text-muted text-xs font-medium">
            Shopping list
          </span>
          <div className="flex gap-1">
            <div className="w-5 h-5 rounded-full bg-brand flex items-center justify-center">
              <span className="text-white text-[9px] font-bold">Y</span>
            </div>
            <div className="w-5 h-5 rounded-full bg-[#3B82F6] flex items-center justify-center">
              <span className="text-white text-[9px] font-bold">J</span>
            </div>
          </div>
        </div>
        {["Oat milk", "Greek yoghurt", "Sourdough"].map((item) => (
          <div key={item} className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-full border-2 border-border flex-shrink-0" />
            <span className="text-text-pri text-xs">{item}</span>
          </div>
        ))}
      </div>
      <h3 className="font-semibold text-lg text-text-pri mb-2">
        See what your household is adding — live.
      </h3>
      <p className="text-text-sec text-sm leading-relaxed">
        Both of you can add, tick, and edit at the same time. No refreshing. No
        &ldquo;did you update the list?&rdquo; messages.
      </p>
    </div>
  );
}

function ShoppingModeCard() {
  return (
    <div className="bg-shop-bg rounded-xl p-8">
      {/* Visual: dark screen with floating cost bar */}
      <div className="mb-6 bg-shop-surf rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-shop-muted text-xs">Shopping mode</span>
          <span className="text-brand text-xs font-medium">● Live</span>
        </div>
        {["Pasta (500g)", "Tinned tomatoes ×3", "Olive oil"].map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 py-1.5 border-b border-white/5 last:border-0"
          >
            <div className="w-3.5 h-3.5 rounded-full border-2 border-shop-muted flex-shrink-0" />
            <span className="text-shop-text text-xs">{item}</span>
          </div>
        ))}
        {/* Floating total bar */}
        <div className="mt-4 bg-brand/20 rounded-md px-3 py-2 flex items-center justify-between">
          <span className="text-brand text-xs font-medium">Total so far</span>
          <span className="text-brand text-sm font-bold">£12.47</span>
        </div>
      </div>
      <h3 className="font-semibold text-lg text-shop-text mb-2">
        A focused mode for when you&apos;re actually in the shop.
      </h3>
      <p className="text-shop-muted text-sm leading-relaxed">
        Shopping mode is dark, distraction-free, and built for one-handed use
        in the biscuit aisle.
      </p>
    </div>
  );
}

function OcrCard() {
  return (
    <div className="bg-white border border-border rounded-xl p-8 shadow-sm">
      {/* Visual: viewfinder with price detected */}
      <div className="mb-6 bg-[#0D1117] rounded-lg p-4 relative overflow-hidden aspect-[4/3] flex items-center justify-center">
        {/* Corner marks */}
        <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-brand rounded-tl" />
        <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-brand rounded-tr" />
        <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-brand rounded-bl" />
        <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-brand rounded-br" />
        {/* Detected price */}
        <div className="bg-brand/90 rounded-md px-3 py-1.5 text-center">
          <p className="text-white text-[10px] font-medium mb-0.5">
            Price detected
          </p>
          <p className="text-white text-xl font-bold">£1.65</p>
        </div>
      </div>
      <h3 className="font-semibold text-lg text-text-pri mb-2">
        Scan the shelf label. Log the price instantly.
      </h3>
      <p className="text-text-sec text-sm leading-relaxed">
        Point your camera at any price label. Getso reads it and records it —
        no typing needed.
      </p>
    </div>
  );
}

function TripSummaryCard() {
  return (
    <div className="bg-white border border-border rounded-xl p-8 shadow-sm">
      {/* Visual: trip summary screen */}
      <div className="mb-6 rounded-lg overflow-hidden border border-border">
        {/* Green hero band */}
        <div className="bg-brand px-4 py-3 text-center">
          <p className="text-white/80 text-[10px] font-medium mb-0.5">
            Total spent
          </p>
          <p className="text-white text-xl font-bold">£34.18</p>
        </div>
        {/* Per-person breakdown */}
        <div className="bg-bg-sec px-4 py-3 flex flex-col gap-2">
          {[
            {
              initials: "Y",
              name: "You",
              amount: "£18.42",
              bg: "#D1FAE5",
              color: "#065F46",
            },
            {
              initials: "J",
              name: "Jake",
              amount: "£15.76",
              bg: "#DBEAFE",
              color: "#1E40AF",
            },
          ].map((person) => (
            <div key={person.name} className="flex items-center gap-3">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                style={{ backgroundColor: person.bg, color: person.color }}
              >
                {person.initials}
              </div>
              <span className="text-text-sec text-xs flex-1">{person.name}</span>
              <span className="text-text-pri text-xs font-semibold">
                {person.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
      <h3 className="font-semibold text-lg text-text-pri mb-2">
        See exactly what you spent — and who bought what.
      </h3>
      <p className="text-text-sec text-sm leading-relaxed">
        Every shop ends with a breakdown by person. Great for splitting costs or
        tracking your weekly budget.
      </p>
    </div>
  );
}
