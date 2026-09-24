export default function Hero() {
  return (
    <section id="top" className="relative bg-paper pt-20 overflow-hidden">
      {/*
        Full-bleed diagonal red panel.
        This sits directly against the <section> (which has no horizontal
        padding), NOT inside the padded max-w-7xl grid below. That's what
        pins it to the true left/right/top/bottom edges of the section at
        every viewport width — the grid column approach couldn't do this
        because it was constrained by the container's padding and max-width.
      */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 left-[38%] sm:left-[45%] lg:left-[54%]"
        style={{
          clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      >
        <div className="absolute inset-0 bg-diagonal-fade" />
        <div className="absolute inset-0 flex items-center justify-center pl-16">
          <img src="heli.png" alt="" className="max-h-[70%] w-auto" />
        </div>
      </div>

      {/* Content grid, layered above the full-bleed panel */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-12 min-h-[640px]">
        {/* Text column */}
        <div className="lg:col-span-7 flex flex-col justify-center py-20">
          <p className="text-ember font-semibold tracking-wide text-sm mb-5">
            Heli-authorized material handling partner in the Philippines
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.05] font-semibold text-ink max-w-xl">
            Warehouses move on the equipment that never stops moving.
          </h1>
          <p className="mt-6 text-ink/80 text-lg max-w-lg leading-relaxed font-body">
            Optichain Solutions, Inc. supplies, services, and finances Heli
            forklifts alongside racking, cold chain, and warehouse automation
            built for Philippine operations that can't afford downtime.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center rounded-sm bg-crimson px-7 py-3.5 font-semibold text-paper hover:bg-ember transition-colors"
            >
              Talk to our fleet team
            </a>
            <a
              href="#equipment"
              className="inline-flex items-center rounded-sm border border-ink/25 px-7 py-3.5 font-semibold text-ink/90 hover:border-ember hover:text-ember transition-colors"
            >
              View the Heli lineup
            </a>
          </div>

          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4 text-ink/50 text-sm">
            <span>Nationwide parts &amp; service</span>
            <span>Electric, IC &amp; warehouse-class units</span>
            <span>Backed by Prime Group since 2019</span>
          </div>
        </div>

        {/* Empty spacer column so the text column doesn't run under the red panel on large screens */}
        <div className="hidden lg:block lg:col-span-5" />
      </div>
    </section>
  );
}
