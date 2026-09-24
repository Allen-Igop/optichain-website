import { useEffect, useState } from "react";
import logo from "../assets/ocsi-logo.png";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Equipment", href: "#equipment" },
  { label: "Solutions", href: "#solutions" },
  { label: "Why OCSI", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-ink/95 backdrop-blur shadow-lg shadow-black/20"
          : "bg-ink/95 backdrop-blur shadow-lg shadow-black/20"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <a href="#top" className="flex items-center gap-3 shrink-0">
            <img
              src={logo}
              alt="Optichain Solutions, Inc."
              className="h-11 w-auto"
            />
            <span className="hidden sm:block leading-tight">
              <span className="block font-display text-lg font-semibold tracking-wide text-paper">
                OPTICHAIN SOLUTIONS
              </span>
              <span className="block text-[11px] text-paper/60 font-body">
                Subsidiary of Prime Sales Inc.
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-paper/80 hover:text-ember transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="inline-flex items-center rounded-sm bg-crimson px-5 py-2.5 text-sm font-semibold text-paper hover:bg-ember transition-colors"
            >
              Request a quote
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-paper p-2"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-ink border-t border-paper/10 px-6 pb-6 pt-2">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-paper/85 border-b border-paper/10 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex justify-center rounded-sm bg-crimson px-5 py-3 text-sm font-semibold text-paper"
            >
              Request a quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
