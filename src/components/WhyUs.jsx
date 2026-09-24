const REASONS = [
  {
    number: "01",
    title: "Nationwide Support",
    text: "Parts and service support for operations across the Philippines.",
  },
  {
    number: "02",
    title: "HELI Expertise",
    text: "Authorized material handling equipment backed by trained support.",
  },
  {
    number: "03",
    title: "Prime Sales Backing",
    text: "Experience and infrastructure behind every unit we provide.",
  },
  {
    number: "04",
    title: "Flexible Solutions",
    text: "Equipment, service, and financing under one partner.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-ocsi"
      className="relative overflow-hidden bg-ink py-20 text-paper sm:py-24 lg:py-28"
    >
      {/* Red accent */}
      <div
        className="absolute right-0 top-0 h-full w-[25%] bg-crimson/80 opacity-70"
        style={{
          clipPath: "polygon(45% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-crimson">
              Why OCSI
            </p>

            <h2 className="mt-4 max-w-lg text-4xl font-black leading-[0.95] tracking-[-0.035em] sm:text-5xl">
              More than equipment.
              <br />A partner built around uptime.
            </h2>
          </div>

          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {REASONS.map((item) => (
              <div key={item.number}>
                <span className="text-sm font-bold text-crimson">
                  {item.number}
                </span>

                <h3 className="mt-3 text-lg font-bold">{item.title}</h3>

                <p className="mt-2 text-sm leading-6 text-paper/50">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
