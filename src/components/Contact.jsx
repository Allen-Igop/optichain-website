import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire this up to your email service or CRM endpoint.
    setSent(true);
  }

  return (
    <section id="contact" className="relative bg-ink py-24 overflow-hidden">
      <div
        className="absolute inset-y-0 right-0 w-[25%] bg-crimson/80 opacity-70 hidden lg:block"
        style={{
          clipPath: "polygon(45% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <h2 className="text-3xl sm:text-4xl font-semibold text-paper mb-5">
            Get a fleet quote this week.
          </h2>
          <p className="text-paper/60 leading-relaxed mb-10 max-w-sm">
            Tell us your load capacity, environment, and shift pattern. We'll
            recommend a Heli unit and a service plan to match.
          </p>

          <dl className="space-y-6 text-sm">
            <div>
              <dt className="text-paper/40 uppercase tracking-wide text-xs mb-1">
                Phone
              </dt>
              <dd className="text-paper/85">[Add OCSI contact number]</dd>
            </div>
            <div>
              <dt className="text-paper/40 uppercase tracking-wide text-xs mb-1">
                Email
              </dt>
              <dd className="text-paper/85">[Add OCSI email address]</dd>
            </div>
            <div>
              <dt className="text-paper/40 uppercase tracking-wide text-xs mb-1">
                Office
              </dt>
              <dd className="text-paper/85">[Add OCSI office address]</dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          {sent ? (
            <div className="bg-paper/5 border border-paper/15 p-10">
              <p className="text-paper font-semibold text-lg">
                Request received.
              </p>
              <p className="text-paper/60 mt-2 text-sm">
                A member of our fleet team will reach out shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full name" name="name" required />
                <Field label="Company" name="company" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wide text-paper/40 mb-2">
                  What do you need?
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Load capacity, operating environment, unit count..."
                  className="w-full bg-transparent border border-paper/20 px-4 py-3 text-paper placeholder:text-paper/30 focus:outline-none focus:border-ember text-sm"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center rounded-sm bg-crimson px-7 py-3.5 font-semibold text-paper hover:bg-ember transition-colors"
              >
                Send request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required }) {
  return (
    <div>
      <label
        className="block text-xs uppercase tracking-wide text-paper/40 mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border border-paper/20 px-4 py-3 text-paper placeholder:text-paper/30 focus:outline-none focus:border-ember text-sm"
      />
    </div>
  );
}
