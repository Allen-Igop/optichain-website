import React from "react";
import {
  Settings,
  ShieldCheck,
  Handshake,
  Lightbulb,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

const RED = "#E30613";

const solutions = [
  {
    number: "01",
    title: "Material Handling",
    description:
      "Forklifts and equipment designed to keep products moving safely and efficiently.",
  },
  {
    number: "02",
    title: "Warehouse Operations",
    description:
      "Equipment and systems designed for high-density storage and daily warehouse demands.",
  },
  {
    number: "03",
    title: "Cold Chain",
    description:
      "Reliable equipment solutions for temperature-controlled environments.",
  },
  {
    number: "04",
    title: "Warehouse Automation",
    description:
      "Technology and equipment that help operations improve productivity and reduce downtime.",
  },
];

const reasons = [
  {
    number: "01",
    title: "Nationwide Support",
    description:
      "Parts and service support for operations across the Philippines.",
    icon: Settings,
  },
  {
    number: "02",
    title: "OEM Expertise",
    description:
      "Authorized access to leading equipment brands by trained support.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Prime Sales Backing",
    description:
      "Experience and infrastructure behind every solution we provide.",
    icon: Handshake,
  },
  {
    number: "04",
    title: "Flexible Solutions",
    description: "Equipment, service, and financing under one partner.",
    icon: Lightbulb,
  },
];

export default function Solutions() {
  return (
    <section className="bg-white text-[#10233F]">
      {/* =====================================================
          SOLUTIONS
      ====================================================== */}
      <section className="relative overflow-hidden border-t border-gray-100">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-28">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            {/* LEFT */}
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span
                  className="text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ color: RED }}
                >
                  Solutions
                </span>

                <span
                  className="h-[2px] w-9"
                  style={{ backgroundColor: RED }}
                />
              </div>

              <h2 className="max-w-xl text-4xl font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                Equipment that works around your operation.
              </h2>

              <p className="mt-7 max-w-lg text-base leading-7 text-slate-500 sm:text-lg">
                Every warehouse has different demands. OCSI combines equipment,
                service, and practical solutions around the way your operation
                actually works.
              </p>

              {/* IMAGE */}
              {/* IMAGE WITH RED SIDE ACCENT */}
              {/* IMAGE WITH RED EDGE ACCENT */}
              <div className="relative mt-10 h-[280px] sm:h-[340px]">
                {/* RED SLANTED SHAPE (bleeds off the left edge of the screen) */}
                <div
                  className="pointer-events-none absolute top-0 h-full bg-[#E30613]"
                  style={{
                    right: "calc(100% - (-80px))", // right edge sits just left of the image
                    width: "100vw", // long enough to run off-screen
                    transform: "skewX(-15deg)",
                    borderRadius: "0 20px 20px 0",
                  }}
                />

                {/* SLANTED IMAGE WITH ROUNDED CORNERS */}
                <div
                  className="absolute inset-y-0 left-[-60px] right-0 overflow-hidden"
                  style={{
                    transform: "skewX(-15deg)",
                    borderRadius: "22px",
                  }}
                >
                  <img
                    src="/heli3.png"
                    alt="HELI forklift inside warehouse"
                    className="absolute inset-y-0 h-full w-full object-cover object-center"
                    style={{
                      left: "-12%",
                      width: "124%",
                      maxWidth: "none",
                      transform: "skewX(15deg)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* RIGHT - SOLUTION LIST */}
            <div className="lg:pt-1">
              {solutions.map((item) => (
                <div
                  key={item.number}
                  className="group border-t border-slate-200 py-8 last:border-b"
                >
                  <div className="grid grid-cols-[50px_1fr] gap-5 sm:grid-cols-[65px_1fr]">
                    <span className="text-lg font-bold" style={{ color: RED }}>
                      {item.number}
                    </span>

                    <div>
                      <h3 className="text-xl font-bold transition-colors group-hover:text-[#E30613] sm:text-2xl">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY OCSI
      ====================================================== */}
    </section>
  );
}

/* ============================================================
   FORM INPUT
============================================================ */
