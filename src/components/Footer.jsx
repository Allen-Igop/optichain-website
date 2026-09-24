import logo from "../assets/ocsi-logo.png";

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-paper/10 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Optichain Solutions, Inc." className="h-9 w-auto opacity-90" />
          <div className="leading-tight">
            <p className="text-paper/80 text-sm font-semibold">
              Optichain Solutions, Inc.
            </p>
            <p className="text-paper/40 text-xs">
              A member of{" "}
              <a
                href="https://primegroup.com.ph/"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-ember"
              >
                Prime Group
              </a>
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-paper/50">
          <a href="#about" className="hover:text-ember">About</a>
          <a href="#equipment" className="hover:text-ember">Equipment</a>
          <a href="#solutions" className="hover:text-ember">Solutions</a>
          <a href="#contact" className="hover:text-ember">Contact</a>
        </nav>

        <p className="text-paper/30 text-xs">
          © {new Date().getFullYear()} Optichain Solutions, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
