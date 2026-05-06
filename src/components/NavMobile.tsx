"use client";

import { useState } from "react";

interface NavMobileProps {
  links: Array<{ label: string; href: string }>;
}

export default function NavMobile({ links }: NavMobileProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="p-2 rounded-md text-text-pri hover:bg-bg-sec transition-colors"
      >
        {open ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile drawer */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-text-pri font-medium text-base py-2 hover:text-brand transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#download"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center px-6 py-3 bg-brand text-white rounded-full text-sm font-medium hover:bg-brand-dark transition-colors"
          >
            Download the app →
          </a>
        </div>
      )}
    </div>
  );
}
