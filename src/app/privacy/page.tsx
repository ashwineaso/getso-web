import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Getso",
  description: "How Getso collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="max-w-[720px] mx-auto px-6 py-16">
        <h1 className="font-semibold text-3xl text-text-pri mb-2">
          Privacy Policy
        </h1>
        <p className="text-text-muted text-sm mb-12">Last updated: May 2026</p>

        {/* Section 1 */}
        <h2 className="font-semibold text-lg text-text-pri mt-10 mb-3">
          1. What we collect
        </h2>
        <ul className="list-disc list-inside space-y-1 text-text-sec text-base leading-7">
          <li>Name and email address (when you create an account)</li>
          <li>Shopping lists and items (synced to EU servers)</li>
          <li>Shopping session data (items, prices, timestamps)</li>
          <li>Group membership and invite tokens</li>
          <li>
            Push notification tokens (device-level, not personal)
          </li>
          <li>
            Anonymous usage analytics via Plausible — no personal data, no
            cookies
          </li>
        </ul>

        {/* Section 2 */}
        <h2 className="font-semibold text-lg text-text-pri mt-10 mb-3">
          2. What we never do
        </h2>
        <ul className="list-disc list-inside space-y-1 text-text-sec text-base leading-7">
          <li>Sell your data to anyone</li>
          <li>Display advertising of any kind</li>
          <li>Store data outside the EU</li>
          <li>Keep your data after you delete your account</li>
        </ul>

        {/* Section 3 */}
        <h2 className="font-semibold text-lg text-text-pri mt-10 mb-3">
          3. Where your data lives
        </h2>
        <ul className="list-disc list-inside space-y-1 text-text-sec text-base leading-7">
          <li>
            Supabase (Frankfurt, Germany) — lists, items, shopping sessions
          </li>
          <li>
            Cloudflare Workers (EU edge nodes) — API processing only
          </li>
          <li>
            Your camera and microphone are never recorded or stored. OCR price
            scanning is fully on-device.
          </li>
        </ul>

        {/* Section 4 */}
        <h2 className="font-semibold text-lg text-text-pri mt-10 mb-3">
          4. Guest mode
        </h2>
        <ul className="list-disc list-inside space-y-1 text-text-sec text-base leading-7">
          <li>All guest data stays on your device only</li>
          <li>
            Nothing is sent to our servers until you choose to sign up
          </li>
          <li>If you never sign up, we hold no record of you</li>
        </ul>

        {/* Section 5 */}
        <h2 className="font-semibold text-lg text-text-pri mt-10 mb-3">
          5. Your rights (GDPR)
        </h2>
        <ul className="list-disc list-inside space-y-1 text-text-sec text-base leading-7">
          <li>
            Export your data: email{" "}
            <a
              href="mailto:privacy@getso.app"
              className="text-brand hover:text-brand-dark"
            >
              privacy@getso.app
            </a>
          </li>
          <li>
            Delete your account: Profile → Delete Account in the app (data
            purged within 30 days)
          </li>
          <li>
            Rectification: update your name and email in your in-app Profile
          </li>
          <li>
            You have the right to lodge a complaint with the ICO (
            <a
              href="https://ico.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:text-brand-dark"
            >
              ico.org.uk
            </a>
            )
          </li>
        </ul>

        {/* Section 6 */}
        <h2 className="font-semibold text-lg text-text-pri mt-10 mb-3">
          6. Data retention
        </h2>
        <ul className="list-disc list-inside space-y-1 text-text-sec text-base leading-7">
          <li>
            Active accounts: your data is kept for as long as your account
            exists
          </li>
          <li>Deleted accounts: all data purged within 30 days</li>
          <li>
            Push notification tokens: deleted immediately on sign-out
          </li>
        </ul>

        {/* Section 7 */}
        <h2 className="font-semibold text-lg text-text-pri mt-10 mb-3">
          7. Contact
        </h2>
        <p className="text-text-sec text-base leading-7">
          Questions about your data? Email us at{" "}
          <a
            href="mailto:privacy@getso.app"
            className="text-brand hover:text-brand-dark"
          >
            privacy@getso.app
          </a>{" "}
          — we aim to respond within two working days.
        </p>
        <p className="text-text-muted text-sm mt-6">
          Last updated: May 2026
        </p>
      </main>
      <Footer />
    </>
  );
}
