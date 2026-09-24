const SOLUTIONS = [
  {
    number: "01",
    title: "Material Handling",
    text: "Forklifts and equipment designed to keep products moving safely and efficiently.",
  },
  {
    number: "02",
    title: "Warehouse Operations",
    text: "Equipment and systems designed for high-density storage and daily warehouse demands.",
  },
  {
    number: "03",
    title: "Cold Chain",
    text: "Reliable equipment solutions for temperature-controlled environments.",
  },
  {
    number: "04",
    title: "Warehouse Automation",
    text: "Technology and equipment that help operations improve productivity and reduce downtime.",
  },
];

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="bg-ink py-20 text-paper sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-crimson">
              Solutions
            </p>

            <h2 className="mt-4 max-w-lg text-4xl font-black leading-[0.95] tracking-[-0.035em] sm:text-5xl">
              Equipment that works around your operation.
            </h2>

            <p className="mt-6 max-w-md leading-7 text-paper/55">
              Every warehouse has different demands. OCSI combines equipment,
              service, and practical solutions around the way your operation
              actually works.
            </p>
          </div>

          <div className="divide-y divide-paper/10 border-y border-paper/10">
            {SOLUTIONS.map((item) => (
              <div
                key={item.number}
                className="grid gap-5 py-7 sm:grid-cols-[70px_1fr] sm:items-start"
              >
                <span className="text-sm font-bold text-crimson">
                  {item.number}
                </span>

                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>

                  <p className="mt-2 max-w-xl leading-6 text-paper/55">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
