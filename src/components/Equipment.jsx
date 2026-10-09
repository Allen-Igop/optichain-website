const EQUIPMENT = [
  {
    title: "Forklifts",
    subtitle: "HELI Forklifts",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH4w5gUq_sZXC5srFmN-Id0YuCGCtCSHBKvRiG95pmnwrfjJh1sFcFmpE&s=10",
  },
  {
    title: "Electric Forklifts",
    subtitle: "More Efficiency",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbUdHhAOAuqaLAFsjqomXdqevFILwA8IZ35oUwa559_c5BD5k1rIzHWhuS&s=10",
  },
  {
    title: "Warehouse Equipment",
    subtitle: "Racking & Automation",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2y7YyUBN3ixWLxYkWjHJL5VE0335rULmmwVK4I_Ik-BocaH9Gb5XfAPOi&s=10  2",
  },
  {
    title: "Reach Trucks",
    subtitle: "High Storage Solutions",
    image:
      "https://image.made-in-china.com/365f3j00yzTMvbtIZqoZ/Heli-New-High-Config-2-5t-3t-Electric-Li-ion-Lithium-Forklift-Cpd25-Cpd30.webp",
  },
];

export default function Equipment() {
  return (
    <section id="equipment" className="bg-paper py-4 sm:py-4 lg:py-8">
      <div className="mx-auto max-w-8xl px-6 lg:px-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.5fr] lg:items-end">
          {/* Heading */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-crimson">
              Equipment
            </p>

            <h2 className="max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.035em] sm:text-6 xl">
              Built for the way your operation actually works.
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-ink/60">
              From forklifts to warehouse equipment, we provide the right
              solution for your industry, space, and daily operations.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-3 rounded-md bg-crimson px-6 py-3.5 text-sm font-bold text-white transition hover:bg-ink"
            >
              Explore Equipment
              <span>→</span>
            </a>
          </div>

          {/* Equipment Grid */}
          <div className="grid gap-3 sm:grid-cols-2">
            {EQUIPMENT.map((item) => (
              <a
                href="#contact"
                key={item.title}
                className="group relative min-h-[220px] overflow-hidden rounded-lg bg-ink"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold">{item.title}</h3>

                  <p className="mt-1 text-sm text-white/70">{item.subtitle}</p>

                  <span className="mt-3 inline-block text-sm font-bold text-white transition group-hover:text-crimson">
                    Explore →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
