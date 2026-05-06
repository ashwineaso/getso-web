export default function GuestModeSection() {
  return (
    <section className="py-10 px-6 bg-amber-light border-t border-b border-amber">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <p className="text-text-pri text-base font-medium max-w-lg">
          Not ready to create an account? Try Getso as a guest first — no
          sign-up, no commitment.
        </p>
        <a
          href="https://play.google.com/store/apps/details?id=app.getso.mobile"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-amber text-amber font-semibold text-sm whitespace-nowrap hover:bg-amber hover:text-white transition-colors"
        >
          Get the app — it&apos;s free
        </a>
      </div>
    </section>
  );
}
