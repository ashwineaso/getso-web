"use client";

import { useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

const SUBJECT_OPTIONS = [
  "General enquiry",
  "Something's not working",
  "Feature request",
  "Billing",
  "Privacy or data request",
  "Press enquiry",
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("https://api.getso.app/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
        <div className="w-14 h-14 rounded-full bg-brand-light flex items-center justify-center">
          <svg
            className="w-7 h-7 text-brand"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="font-semibold text-xl text-text-pri">Message sent!</h2>
        <p className="text-text-sec text-sm max-w-xs">
          We&apos;ll get back to you within one working day.
        </p>
      </div>
    );
  }

  const inputBase =
    "w-full px-4 py-3 rounded-md border border-border bg-white text-text-pri text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {status === "error" && (
        <div className="rounded-md bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          Something went wrong. Please try emailing{" "}
          <a href="mailto:hello@getso.app" className="underline">
            hello@getso.app
          </a>{" "}
          directly.
        </div>
      )}

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-text-pri text-sm font-medium">
          Your name{" "}
          <span aria-hidden="true" className="text-red-500">
            *
          </span>
        </label>
        <input
          id="name"
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Smith"
          className={inputBase}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-text-pri text-sm font-medium">
          Email address{" "}
          <span aria-hidden="true" className="text-red-500">
            *
          </span>
        </label>
        <input
          id="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jane@example.com"
          className={inputBase}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className="text-text-pri text-sm font-medium">
          Subject{" "}
          <span aria-hidden="true" className="text-red-500">
            *
          </span>
        </label>
        <select
          id="subject"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={`${inputBase} cursor-pointer`}
        >
          <option value="" disabled>
            Select a subject…
          </option>
          {SUBJECT_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-text-pri text-sm font-medium">
          Message{" "}
          <span aria-hidden="true" className="text-red-500">
            *
          </span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what's on your mind…"
          className={`${inputBase} resize-none`}
        />
      </div>

      <div className="flex flex-col gap-3">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand text-white rounded-full text-sm font-medium hover:bg-brand-dark active:bg-brand-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          {status === "submitting" ? (
            <>
              <svg
                className="w-4 h-4 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Sending…
            </>
          ) : (
            "Send message →"
          )}
        </button>
        <p className="text-text-muted text-xs text-center">
          We don&apos;t share your email. Average reply: under 24 hours.
        </p>
      </div>
    </form>
  );
}
