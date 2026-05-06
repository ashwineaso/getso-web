const AVATAR_SLOTS = [
  { bg: "#D1FAE5", text: "#065F46" },
  { bg: "#DBEAFE", text: "#1E40AF" },
  { bg: "#FCE7F3", text: "#9D174D" },
];

const QUOTES = [
  {
    quote:
      "Finally. We had four different shopping apps and still came home with two bags of pasta and no butter.",
    name: "Priya M.",
    location: "London",
    initials: "PM",
    slot: 0,
  },
  {
    quote:
      "Jake adds things from work, I add them at home. We get to Tesco and the list is just there, up to date.",
    name: "Emma C.",
    location: "Manchester",
    initials: "EC",
    slot: 1,
  },
  {
    quote:
      "The price tracker saved us from arguing about the weekly shop budget.",
    name: "Tom R.",
    location: "Edinburgh",
    initials: "TR",
    slot: 2,
  },
];

export default function SocialProofSection() {
  return (
    <section className="bg-bg-sec py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-5 overflow-x-auto pb-2 md:overflow-visible md:grid md:grid-cols-3">
          {QUOTES.map((q) => {
            const avatar = AVATAR_SLOTS[q.slot];
            return (
              <div
                key={q.name}
                className="flex-shrink-0 w-[280px] md:w-auto bg-white rounded-lg p-6 border border-border shadow-sm flex flex-col gap-4"
              >
                <p className="text-text-sec text-sm leading-relaxed flex-1">
                  &ldquo;{q.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0"
                    style={{ backgroundColor: avatar.bg, color: avatar.text }}
                  >
                    {q.initials}
                  </div>
                  <span className="text-text-muted text-xs">
                    {q.name}, {q.location}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
