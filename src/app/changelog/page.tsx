import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Changelog — Getso",
  description: "What's new in Getso. Release notes and version history.",
};

const releases = [
  {
    version: "v1.0",
    date: "May 2026",
    title: "Initial launch",
    features: [
      "Shared shopping lists with real-time sync",
      "Group creation and invite links",
      "Shopping mode — dark, distraction-free, one-handed",
      "OCR price capture via camera (on-device, no data sent)",
      "Trip summary with per-person spend breakdown",
      "Guest mode — try the app without creating an account",
      "Full offline support — lists load instantly with no signal",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <>
      <Nav />
      <main className="max-w-[720px] mx-auto px-6 py-16">
        <h1 className="font-semibold text-3xl text-text-pri mb-2">Changelog</h1>
        <p className="text-text-sec text-base mb-12">What&apos;s new in Getso.</p>

        {releases.map((release) => (
          <section
            key={release.version}
            className="border-t border-border pt-10 mb-10"
          >
            <div className="flex items-baseline gap-4 mb-4">
              <h2 className="font-semibold text-xl text-text-pri">
                {release.version}
              </h2>
              <span className="text-text-muted text-sm">{release.date}</span>
            </div>
            <p className="text-text-sec text-sm font-medium mb-3">
              {release.title}
            </p>
            <ul className="space-y-2">
              {release.features.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-text-sec text-sm"
                >
                  <span
                    className="text-brand mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  >
                    &bull;
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <p className="text-text-muted text-sm mt-4">
          More updates coming soon.
        </p>
      </main>
      <Footer />
    </>
  );
}
