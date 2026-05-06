export default function OfflineCalloutSection() {
  return (
    <section className="py-16 px-6 bg-bg-sec">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Copy */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-brand font-medium text-xs tracking-widest uppercase mb-3">
            WORKS WITHOUT SIGNAL
          </p>
          <h3 className="font-semibold text-2xl text-text-pri mb-4">
            Supermarkets are terrible for phone signal.
          </h3>
          <p className="text-text-sec text-base leading-7 max-w-lg">
            Getso stores everything on your phone first. Your list loads the
            moment you open it — no signal required. Changes sync automatically
            when you&apos;re back on Wi-Fi or 4G.
          </p>
        </div>

        {/* Icon */}
        <div
          className="w-20 h-20 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-10 h-10 text-brand"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* wifi-off icon */}
            <line x1="1" y1="1" x2="23" y2="23" />
            <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
            <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
            <path d="M10.71 5.05A16 16 0 0 1 22.56 9" />
            <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
            <line x1="12" y1="20" x2="12.01" y2="20" />
          </svg>
        </div>
      </div>
    </section>
  );
}
