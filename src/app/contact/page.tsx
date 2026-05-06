import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Getso",
  description: "Get in touch with the Getso team. We read every message.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="max-w-[960px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left: static copy */}
          <div>
            <h1 className="font-semibold text-3xl text-text-pri mb-4">
              Got a question?
            </h1>
            <p className="text-text-sec text-base leading-7 mb-6">
              We&apos;re a small team. We read every message and reply within
              one working day.
            </p>
            <a
              href="mailto:hello@getso.app"
              className="text-brand hover:text-brand-dark font-medium transition-colors"
            >
              hello@getso.app
            </a>
            <p className="text-text-muted text-sm mt-6">
              For data or privacy requests, email{" "}
              <a
                href="mailto:privacy@getso.app"
                className="text-text-sec hover:text-text-pri transition-colors"
              >
                privacy@getso.app
              </a>
            </p>
          </div>

          {/* Right: form */}
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
