// components/TrustedPartners.jsx

const PARTNERS = [
  {
    name: "SM",
    logo: "/Clients/1.png",
  },
  {
    name: "Robinsons",
    logo: "/Clients/2.png",
  },
  {
    name: "Ayala",
    logo: "/Clients/3.png",
  },
  {
    name: "Jollibee",
    logo: "/Clients/4.png",
  },
  {
    name: "Puregold",
    logo: "/Clients/5.png",
  },
  {
    name: "Landco",
    logo: "/Clients/6.png",
  },
  {
    name: "Metrobank",
    logo: "/Clients/7.png",
  },
  {
    name: "Metrobank",
    logo: "/Clients/8.png",
  },
  {
    name: "Metrobank",
    logo: "/Clients/9.png",
  },
  {
    name: "Metrobank",
    logo: "/Clients/10.png",
  },

  {
    name: "Metrobank",
    logo: "/Clients/11.png",
  },
  {
    name: "Metrobank",
    logo: "/Clients/12.png",
  },
  {
    name: "Metrobank",
    logo: "/Clients/13.png",
  },
  {
    name: "Metrobank",
    logo: "/Clients/14.png",
  },
  {
    name: "Metrobank",
    logo: "/Clients/15.png",
  },
];

export default function TrustedPartners() {
  return (
    <section className="border border-black">
      <div className="mx-auto max-w-[1600px] px-6 py-7 sm:px-10 lg:px-14">
        <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.18em] text-CRIMSON">
          Trusted across Philippine operations
        </p>

        {/* 15 logos: 5 cols = 3 even rows on every screen size */}
        <div className="grid grid-cols-3 items-center gap-x-4 gap-y-7 sm:grid-cols-5 lg:gap-x-10">
          {PARTNERS.map((partner) => (
            <div
              key={partner.logo}
              className="flex min-h-[42px] items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="max-h-24 w-full max-w-[40px] object-contain brightness-300 transition duration-300 hover:opacity-100 lg:max-w-[80px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
