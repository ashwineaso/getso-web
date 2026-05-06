import NavMobile from "./NavMobile";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Download", href: "#download" },
];

function GLogomark() {
  return (
    <div className="w-7 h-7 bg-brand rounded-sm flex items-center justify-center flex-shrink-0">
      <span className="text-white font-bold text-sm leading-none select-none">
        G
      </span>
    </div>
  );
}

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <nav
        className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 flex-shrink-0"
          aria-label="Getso home"
        >
          <GLogomark />
          <span className="font-semibold text-lg text-text-pri leading-none">
            getso
          </span>
        </a>

        {/* Desktop centre links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-text-sec text-sm font-medium hover:text-text-pri transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop right actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#"
            className="text-text-sec text-sm font-medium hover:text-text-pri transition-colors"
          >
            Sign in
          </a>
          <a
            href="#download"
            className="inline-flex items-center px-5 py-2 bg-brand text-white rounded-full text-sm font-medium hover:bg-brand-dark transition-colors"
          >
            Download the app →
          </a>
        </div>

        {/* Mobile hamburger */}
        <NavMobile links={navLinks} />
      </nav>
    </header>
  );
}
