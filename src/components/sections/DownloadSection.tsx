import AppBadges from "@/components/ui/AppBadges";

export default function DownloadSection() {
  return (
    <section id="download" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-semibold text-4xl text-text-pri mb-4">
          Get Getso free.
        </h2>
        <p className="text-text-sec text-lg mb-10">
          iOS and Android. Works for couples, flatmates, and families.
        </p>

        <AppBadges className="justify-center mb-10" />

        {/* QR code placeholder */}
        <div className="flex flex-col items-center gap-3 mb-10">
          <div className="w-[120px] h-[120px] bg-white border-2 border-border rounded-lg flex flex-col items-center justify-center gap-1 p-3">
            {/* Simple QR-like grid pattern for visual fidelity */}
            <div className="grid grid-cols-3 gap-0.5 w-full">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-[1px] ${
                    [0, 2, 4, 6, 8].includes(i) ? "bg-text-pri" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <p className="text-text-muted text-[8px] text-center leading-tight mt-1">
              getso.app
            </p>
          </div>
          <p className="text-text-muted text-xs">
            Scan to download on your phone
          </p>
        </div>

        {/* Feature chips */}
        <div className="flex flex-wrap justify-center gap-3">
          {["Requires iOS 16+", "Android 10+", "Free forever"].map((chip) => (
            <span
              key={chip}
              className="px-3 py-1.5 rounded-full bg-bg-sec text-text-muted text-xs border border-border"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
