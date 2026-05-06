"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

type VerifyStatus = "loading" | "success" | "error";

export default function VerifyPage() {
  const params = useParams();
  const token = params.token as string;
  const [status, setStatus] = useState<VerifyStatus>("loading");

  useEffect(() => {
    if (!token) {
      setStatus("error");
      return;
    }

    supabase.auth
      .verifyOtp({ token_hash: token, type: "email" })
      .then(({ error }) => {
        setStatus(error ? "error" : "success");
      })
      .catch(() => {
        setStatus("error");
      });
  }, [token]);

  return (
    <div className="min-h-screen bg-bg-sec flex flex-col items-center px-4 py-12">
      {/* Logo */}
      <a href="/" aria-label="Getso home" className="flex items-center gap-2 mb-12">
        <div className="w-7 h-7 bg-brand rounded-sm flex items-center justify-center">
          <span className="text-white font-bold text-sm leading-none select-none">G</span>
        </div>
        <span className="font-semibold text-lg text-text-pri">getso</span>
      </a>

      {/* Card */}
      <div className="w-full max-w-[380px] bg-white rounded-xl shadow-md p-8">
        {status === "loading" && <LoadingState />}
        {status === "success" && <SuccessState />}
        {status === "error" && <ErrorState />}
      </div>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="flex flex-col items-center gap-4 py-6">
      <svg
        className="w-10 h-10 text-brand animate-spin"
        fill="none"
        viewBox="0 0 24 24"
        aria-label="Verifying…"
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
      <p className="text-text-sec text-sm">Verifying your email…</p>
    </div>
  );
}

function SuccessState() {
  return (
    <div className="flex flex-col items-center text-center gap-5">
      {/* Green checkmark */}
      <div className="w-16 h-16 rounded-full bg-brand-light flex items-center justify-center">
        <svg
          className="w-8 h-8 text-brand"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <div>
        <h1 className="font-semibold text-2xl text-text-pri mb-2">
          Email verified!
        </h1>
        <p className="text-text-sec text-sm leading-relaxed">
          You&apos;re all set. Open Getso to continue.
        </p>
      </div>

      <div className="w-full flex flex-col gap-3">
        {/* Deep link — opens app if installed */}
        <a
          href="getso://verified"
          className="w-full inline-flex items-center justify-center px-6 py-3 bg-brand text-white rounded-full text-sm font-medium hover:bg-brand-dark transition-colors"
        >
          Open Getso →
        </a>

        {/* Fallback for users without the app */}
        <a
          href="https://play.google.com/store/apps/details?id=app.getso.mobile"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center px-6 py-3 border border-border text-text-sec rounded-full text-sm hover:bg-bg-sec transition-colors"
        >
          Download Getso
        </a>
      </div>
    </div>
  );
}

function ErrorState() {
  return (
    <div className="flex flex-col items-center text-center gap-5">
      <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center text-2xl">
        ✉️
      </div>
      <div>
        <h1 className="font-semibold text-xl text-text-pri mb-2">
          This verification link has expired.
        </h1>
        <p className="text-text-sec text-sm leading-relaxed">
          Open the Getso app and request a new verification email.
        </p>
      </div>
      <a
        href="https://play.google.com/store/apps/details?id=app.getso.mobile"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-6 py-3 border border-border text-text-pri rounded-full text-sm font-medium hover:bg-bg-sec transition-colors"
      >
        Download Getso →
      </a>
    </div>
  );
}
