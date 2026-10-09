import { ArrowRight, Zap, ShieldCheck } from "lucide-react";

export default function AboutHero() {
  return (
    <div className="bg-paper mt-20">
      {/* ---------- NAV ---------- */}
      {/* <header className="bg-[#14120F] px-6 lg:px-10">
        <div className="mx-auto max-w-7xl flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="bg-crimson rounded-md px-3 py-2">
              <span className="text-paper font-extrabold tracking-tight text-lg">
                OCSI
              </span>
            </div>
            <div>
              <p className="text-paper font-semibold tracking-wide leading-tight">
                OPTICHAIN SOLUTIONS
              </p>
              <p className="text-paper/50 text-xs leading-tight">
                Subsidiary of Prime Sales Inc.
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-9 text-paper/85 font-medium">
            <a href="#about" className="relative text-paper pb-6 -mb-6">
              About
              <span className="absolute left-0 right-0 -bottom-[1px] h-[3px] bg-crimson rounded-full" />
            </a>
            <a href="#equipment" className="hover:text-paper transition-colors">
              Equipment
            </a>
            <a href="#solutions" className="hover:text-paper transition-colors">
              Solutions
            </a>
            <a href="#why" className="hover:text-paper transition-colors">
              Why OCSI
            </a>
            <a href="#contact" className="hover:text-paper transition-colors">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-md bg-crimson px-5 py-2.5 font-semibold text-paper hover:bg-ember transition-colors"
          >
            Request a quote
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header> */}

      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden min-h-[560px]">
        {/*
          Photo panel sits directly against the <section> (full viewport
          width, no padding) instead of inside the padded max-w-7xl grid.
          That's the only way it stays flush with the true right edge at
          every screen size — nesting it inside max-w-7xl caps it at
          1280px and leaves a gap on wider screens, which is why it
          "didn't fit."
        */}
        <div
          className="hidden lg:block absolute inset-y-0 right-0 left-[38%] bg-cover bg-center"
          style={{
            backgroundImage: "url(/heli3.png)",
            clipPath: "polygon(24% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          {/* diagonal red tint, strongest at the seam, fading into the photo */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(115deg, rgba(196,30,40,0.9) 0%, rgba(196,30,40,0.5) 16%, rgba(196,30,40,0) 34%)",
            }}
          />
        </div>

        {/* Text column, layered above the full-bleed photo */}
        <div className="relative z-10 mx-auto max-w-8xl grid lg:grid-cols-12">
          <div className="lg:col-span-6 flex flex-col justify-center px-6 lg:px-24 min-h-[480px]">
            <div className="mb-5 mt-4">
              <p className="text-xs font-extrabold tracking-[0.18em] text-crimson uppercase">
                Authorized HELI Partner
              </p>

              <div className=" flex items-center gap-3">
                <img
                  src="/helilogo.png"
                  className="h-16 font-black tracking-tight text-crimson"
                ></img>
                <span className="h-8 w-px bg-ink/20" />

                <div className="text-[10px] font-semibold uppercase leading-tight tracking-wide text-ink/60">
                  Forklifts & Warehouse
                  <br />
                  Material Handling Equipment
                </div>
              </div>
            </div>
            <h1 className="xl:max-w-6xl w-full text-3xl font-black leading-[0.92] tracking-[-0.045em] sm:text-6xl lg:text-[1.6rem] xl:text-[4rem]">
              Warehouses move
              <br className="md:hidden lg:inline" /> on equipment that
              <br className="md:hidden lg:inline" />{" "}
              <span className="text-crimson">never stops moving.</span>
            </h1>

            <p className="mt-6 text-ink/60 text-lg max-2xl lg:max-w-lg leading-relaxed">
              Optichain Solutions, Inc. supplies, services, and finances Heli
              forklifts alongside racking, cold chain, and warehouse automation
              built for Philippine operations that can't afford downtime.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md bg-crimson px-6 py-3.5 font-semibold text-paper hover:bg-ember transition-colors"
              >
                Talk to our fleet team
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#equipment"
                className="inline-flex items-center gap-2 rounded-md border border-ink/20 px-6 py-3.5 font-semibold text-ink hover:border-crimson hover:text-crimson transition-colors"
              >
                View the Heli lineup
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Mobile/tablet photo, stacked below the text (no diagonal, keeps it simple below lg) */}
          <div
            className="lg:hidden -mx-6 mt-2 h-64 bg-cover bg-center"
            style={{ backgroundImage: "url(/heli3.png)" }}
          />

          {/* Spacer column keeps the text capped at 6/12 on large screens */}
          <div className="hidden lg:block lg:col-span-6" />
        </div>
      </section>

      {/* ---------- STATS STRIP ---------- */}
      <section className="border-t border-ink/10 bg-slate-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-ink/10 gap-8 sm:gap-0">
          <Stat
            icon={<PhilippinesMark className="w-7 h-7 text-crimson" />}
            title="Nationwide parts & service"
            subtitle="Fast, reliable support, anywhere."
          />
          <Stat
            icon={<ElectricMark className="w-7 h-7 text-crimson" />}
            title="Electric, IC & warehouse-class units"
            subtitle="For every load, every industry."
            className="sm:pl-8"
          />
          <Stat
            icon={<ShieldCheck className="w-7 h-7 text-crimson" />}
            title="Backed by Prime Sales Inc since 2019"
            subtitle="A trusted partner in your growth."
            className="sm:pl-8"
          />
        </div>
      </section>
    </div>
  );
}

function Stat({ icon, title, subtitle, className = "" }) {
  return (
    <div className={`flex items-start gap-4 pt-8 sm:pt-0 ${className}`}>
      <div className="shrink-0">{icon}</div>
      <div>
        <p className="font-semibold text-ink leading-snug">{title}</p>
        <p className="text-ink/50 text-sm mt-0.5">{subtitle}</p>
      </div>
    </div>
  );
}

// Simple abstract archipelago mark (stylized, not geographically literal)
function PhilippinesMark({ className = "" }) {
  return <img src="/ph.png" alt="" className="h-8 w-8" />;
}

function ElectricMark({ className = "" }) {
  return <img src="/electric-icon.png" alt="" className="h-8 w-8" />;
}
