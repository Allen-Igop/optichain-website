// components/TrustedPartners.jsx

const PARTNERS = [
  {
    name: "SM",
    logo: "/sm1.png",
  },
  {
    name: "Robinsons",
    logo: "/robinsons1.png",
  },
  {
    name: "Ayala",
    logo: "/ayala1.png",
  },
  {
    name: "Jollibee",
    logo: "/jolli1.png",
  },
  {
    name: "Puregold",
    logo: "/puregold1.png",
  },
  {
    name: "Landco",
    logo: "/landco.png",
  },
  {
    name: "Metrobank",
    logo: "/metrobank.png",
  },
];

export default function TrustedPartners() {
  return (
    <section className="border-b border-white/20 bg-diagonal-fade ">
      <div className="mx-auto max-w-[1600px] px-6 py-7 sm:px-10 lg:px-14">
        {/* Heading */}
        <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
          Trusted across Philippine operations
        </p>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-7 lg:gap-x-10">
          {PARTNERS.map((partner, index) => (
            <div
              key={partner.name}
              className="flex min-h-[42px] flex-1 items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="max-h-20 max-w-[130px]brightness-300 object-contain transition duration-300 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
