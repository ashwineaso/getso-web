import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — Getso",
  description:
    "Getso's terms of service. Governed by the laws of England and Wales.",
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="max-w-[720px] mx-auto px-6 py-16">
        <h1 className="font-semibold text-3xl text-text-pri mb-2">
          Terms of Service
        </h1>
        <p className="text-text-muted text-sm mb-12">Last updated: May 2026</p>

        {/* Section 1 */}
        <h2 className="font-semibold text-lg text-text-pri mt-10 mb-3">
          1. What Getso is
        </h2>
        <p className="text-text-sec text-base leading-7">
          Getso is a shopping coordination tool for households. It is not a
          financial service, payment processor, or retail platform. We help you
          manage shopping lists and track spending — that&apos;s it.
        </p>

        {/* Section 2 */}
        <h2 className="font-semibold text-lg text-text-pri mt-10 mb-3">
          2. Your account
        </h2>
        <p className="text-text-sec text-base leading-7">
          One account per person. You must be 13 or older to use Getso.
          You&apos;re responsible for keeping your login credentials secure. Let
          us know immediately at{" "}
          <a
            href="mailto:hello@getso.app"
            className="text-brand hover:text-brand-dark"
          >
            hello@getso.app
          </a>{" "}
          if you think your account has been compromised.
        </p>

        {/* Section 3 */}
        <h2 className="font-semibold text-lg text-text-pri mt-10 mb-3">
          3. Your data
        </h2>
        <p className="text-text-sec text-base leading-7">
          You own your list data. We store it solely to provide the service. We
          claim no rights over your content and will never use it for
          advertising or training AI models.
        </p>

        {/* Section 4 */}
        <h2 className="font-semibold text-lg text-text-pri mt-10 mb-3">
          4. Acceptable use
        </h2>
        <p className="text-text-sec text-base leading-7">
          Please don&apos;t use Getso to store or share illegal content.
          Don&apos;t attempt to access other users&apos; private data, reverse
          engineer the app, or scrape the service with automated tools.
        </p>

        {/* Section 5 */}
        <h2 className="font-semibold text-lg text-text-pri mt-10 mb-3">
          5. Free tier guarantee
        </h2>
        <p className="text-text-sec text-base leading-7">
          The features available on getso.app are free permanently. If we ever
          introduce a paid tier, all existing free features will remain free for
          existing users. We&apos;ll give you plenty of notice before anything
          changes.
        </p>

        {/* Section 6 */}
        <h2 className="font-semibold text-lg text-text-pri mt-10 mb-3">
          6. Service availability
        </h2>
        <p className="text-text-sec text-base leading-7">
          We aim for high availability but can&apos;t make uptime guarantees. We
          may update or modify features with reasonable notice. We&apos;ll
          always tell you about changes that significantly affect how you use
          the app.
        </p>

        {/* Section 7 */}
        <h2 className="font-semibold text-lg text-text-pri mt-10 mb-3">
          7. Liability
        </h2>
        <p className="text-text-sec text-base leading-7">
          Getso is provided &quot;as is&quot;. We&apos;re not liable for data
          loss or service interruptions beyond our control. Our maximum
          liability to you is the amount you paid us in the previous 12 months
          (which is likely £0, given the free tier).
        </p>

        {/* Section 8 */}
        <h2 className="font-semibold text-lg text-text-pri mt-10 mb-3">
          8. Governing law
        </h2>
        <p className="text-text-sec text-base leading-7">
          These terms are governed by the laws of England and Wales. Any
          disputes will be resolved in the courts of England and Wales.
        </p>

        {/* Section 9 */}
        <h2 className="font-semibold text-lg text-text-pri mt-10 mb-3">
          9. Changes to these terms
        </h2>
        <p className="text-text-sec text-base leading-7">
          We&apos;ll notify you of significant changes via in-app notice or
          email. Continued use of Getso after notice constitutes acceptance. We
          won&apos;t make changes retroactively.
        </p>

        {/* Section 10 */}
        <h2 className="font-semibold text-lg text-text-pri mt-10 mb-3">
          10. Contact
        </h2>
        <p className="text-text-sec text-base leading-7">
          Questions about these terms? Email{" "}
          <a
            href="mailto:legal@getso.app"
            className="text-brand hover:text-brand-dark"
          >
            legal@getso.app
          </a>
          .
        </p>
        <p className="text-text-muted text-sm mt-6">
          Last updated: May 2026
        </p>
      </main>
      <Footer />
    </>
  );
}
