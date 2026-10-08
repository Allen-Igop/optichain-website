import { useState } from "react";
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

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire this up to your email service or CRM endpoint.
    setSent(true);
  }
  const RED = "#E30613";
  return (
    <section className="relative overflow-hidden">
      {/* Background warehouse image */}
      <div className="absolute inset-0">
        <img
          src="/images/warehouse-background.jpg"
          alt=""
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-white/90" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* LEFT CONTACT */}
          <div>
            <h2 className="max-w-xl text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
              Get a fleet quote this week.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-slate-500 sm:text-lg">
              Tell us your load capacity, environment, and shift pattern. We'll
              recommend a haul unit and a service plan to match.
            </p>

            {/* PHONE */}
            <div className="mt-10 flex gap-4">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                style={{
                  backgroundColor: "#FDEBEC",
                  color: RED,
                }}
              >
                <Phone size={18} />
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Phone
                </div>

                <div className="mt-1 text-sm font-medium">
                  +632 8820-0704 / +6397 136-5289
                </div>
              </div>
            </div>

            {/* EMAIL */}
            <div className="mt-7 flex gap-4">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                style={{
                  backgroundColor: "#FDEBEC",
                  color: RED,
                }}
              >
                <Mail size={18} />
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Email
                </div>

                <div className="mt-1 text-sm font-medium">
                  sales@optichainsolutions.com
                </div>
              </div>
            </div>

            {/* OFFICE */}
            <div className="mt-7 flex gap-4">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                style={{
                  backgroundColor: "#FDEBEC",
                  color: RED,
                }}
              >
                <MapPin size={18} />
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Office
                </div>

                <div className="mt-1 max-w-md text-sm leading-6">
                  Prime Cargohouse Center in Parañaque is located at Km. 15 East
                  Service Road, Marcelo Ave. 2, Parañaque, Metro Manila
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8">
            <form className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FormInput label="Full Name" placeholder="Your full name" />

                <FormInput label="Company" placeholder="Company name" />

                <FormInput
                  label="Email"
                  placeholder="you@company.com"
                  type="email"
                />

                <FormInput label="Phone" placeholder="+63 9XX XXX XXXX" />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
                  What do you need?
                </label>

                <textarea
                  rows="5"
                  placeholder="Load capacity, operating environment, shift count..."
                  className="w-full resize-none rounded-md border border-slate-200 bg-white px-4 py-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613]"
                />
              </div>

              <button
                type="submit"
                className="group flex items-center gap-3 rounded-md px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
                style={{ backgroundColor: RED }}
              >
                Send request
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
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
