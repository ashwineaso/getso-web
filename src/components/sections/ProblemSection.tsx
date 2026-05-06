const PAIN_POINTS = [
  '"Did we need milk?" texts every week',
  "Buying things that are already in the cupboard",
  "Arguing about whose turn it was to check the list",
];

export default function ProblemSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-[640px] mx-auto">
        <h2 className="font-semibold text-3xl text-text-pri mb-6">
          You know how this goes.
        </h2>
        <p className="text-text-sec text-base leading-7 mb-10">
          One of you is in Sainsbury&apos;s. The other is at home. Neither of
          you knows if you&apos;ve still got butter. You buy butter. There is
          butter. There are now three butters.
        </p>

        <ul className="space-y-4 mb-10" aria-label="Common shopping frustrations">
          {PAIN_POINTS.map((pain) => (
            <li key={pain} className="flex items-start gap-3">
              <span
                className="text-red-500 font-bold mt-0.5 flex-shrink-0 text-base leading-6"
                aria-hidden="true"
              >
                ✗
              </span>
              <span className="text-text-sec text-base leading-6">{pain}</span>
            </li>
          ))}
        </ul>

        <p className="text-brand font-medium text-sm">Getso fixes this.</p>
      </div>
    </section>
  );
}
