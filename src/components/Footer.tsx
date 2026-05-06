function GLogomark() {
  return (
    <div className="w-6 h-6 bg-brand rounded-sm flex items-center justify-center flex-shrink-0">
      <span className="text-white font-bold text-xs leading-none select-none">
        G
      </span>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-bg-sec border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-3">
            <a href="/" className="flex items-center gap-2" aria-label="Getso home">
              <GLogomark />
              <span className="font-semibold text-base text-text-pri">getso</span>
            </a>
            <p className="text-text-sec text-sm leading-relaxed">
              The shared shopping list for households.
            </p>
            <p className="text-text-muted text-xs">Made in the UK 🇬🇧</p>
          </div>

          {/* Col 2: App */}
          <div>
            <h3 className="font-semibold text-text-pri text-sm mb-4">App</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="#download"
                  className="text-text-sec text-sm hover:text-text-pri transition-colors"
                >
                  Download on iOS ↗
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=app.getso.mobile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-sec text-sm hover:text-text-pri transition-colors"
                >
                  Download on Android ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Product */}
          <div>
            <h3 className="font-semibold text-text-pri text-sm mb-4">Product</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="#features"
                  className="text-text-sec text-sm hover:text-text-pri transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-text-sec text-sm hover:text-text-pri transition-colors"
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="/changelog"
                  className="text-text-sec text-sm hover:text-text-pri transition-colors"
                >
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Support */}
          <div>
            <h3 className="font-semibold text-text-pri text-sm mb-4">
              Legal &amp; Support
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="/privacy"
                  className="text-text-sec text-sm hover:text-text-pri transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-text-sec text-sm hover:text-text-pri transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-text-sec text-sm hover:text-text-pri transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@getso.app"
                  className="text-text-sec text-sm hover:text-text-pri transition-colors"
                >
                  hello@getso.app
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-text-muted text-xs">
            <span>© 2026 Getso</span>
            <span>·</span>
            <a href="/privacy" className="hover:text-text-sec transition-colors">
              Privacy
            </a>
            <span>·</span>
            <a href="/terms" className="hover:text-text-sec transition-colors">
              Terms
            </a>
          </div>
          <p className="text-text-muted text-xs">
            All user data stored in the EU (Frankfurt).
          </p>
        </div>
      </div>
    </footer>
  );
}
