import SectionHeader from "@/components/ui/SectionHeader";

const STEPS = [
  {
    number: "1",
    title: "Create or join a list",
    body: "One person sets up the list and shares an invite link. Your partner joins with one tap — no account needed to start.",
  },
  {
    number: "2",
    title: "Add items from anywhere",
    body: "Add things on the sofa, on the bus, or when you clock that you're out of something at 11pm.",
  },
  {
    number: "3",
    title: "Shop together (or separately)",
    body: "In shopping mode, tick items off as you go. Both phones update in real time.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="HOW IT WORKS"
          heading="Up and running in seconds."
          centered
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line — desktop only */}
          <div
            className="hidden md:block absolute top-6 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-0.5 bg-brand-light"
            aria-hidden="true"
          />

          {STEPS.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center gap-4 relative"
            >
              <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center flex-shrink-0 z-10">
                <span className="text-white font-bold text-lg leading-none">
                  {step.number}
                </span>
              </div>
              <h3 className="font-semibold text-text-pri text-base">
                {step.title}
              </h3>
              <p className="text-text-sec text-sm leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
