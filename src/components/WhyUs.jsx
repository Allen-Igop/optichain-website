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

export default function WhyUs() {
  return (
    <section className="bg-white text-[#10233F]">
      {/* =====================================================
          SOLUTIONS
      ====================================================== */}

      {/* =====================================================
          WHY OCSI
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#F7F8FA]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-28">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            {/* LEFT */}
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span
                  className="text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ color: RED }}
                >
                  Why OCSI
                </span>

                <span
                  className="h-[2px] w-9"
                  style={{ backgroundColor: RED }}
                />
              </div>

              <h2 className="max-w-xl text-4xl font-extrabold leading-[1.03] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                More than equipment.
                <br />A partner built around uptime.
              </h2>
            </div>

            {/* RIGHT */}
            <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2">
              {reasons.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.number} className="group">
                    {/* ICON */}
                    <div
                      className="mb-5 flex h-12 w-12 items-center justify-center rounded-full"
                      style={{
                        color: RED,
                        backgroundColor: "#FDEBEC",
                      }}
                    >
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

                    <div
                      className="mb-2 text-sm font-bold"
                      style={{ color: RED }}
                    >
                      {item.number}
                    </div>

                    <h3 className="text-xl font-bold">{item.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT / QUOTE
      ====================================================== */}
    </section>
  );
}

/* ============================================================
   FORM INPUT
============================================================ */

function FormInput({ label, placeholder, type = "text" }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613]"
      />
    </div>
  );
}
