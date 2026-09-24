export default function About() {
  return (
    <section id="about" className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-semibold text-ink">
            Part of the Prime Group family, built around one brand.
          </h2>
        </div>
        <div className="lg:col-span-7 lg:col-start-6 space-y-5 text-ink/70 leading-relaxed">
          <p>
            Optichain Solutions, Inc. (OCSI) is the material handling arm of
            Prime Group, standing alongside Prime Sales Inc. to give Philippine
            operations another dependable route to the equipment that keeps a
            warehouse floor running. Where our sister company has spent decades
            on racking, cold chain, and warehouse automation, OCSI is built
            specifically around Heli forklifts and the fleet support that
            surrounds them.
          </p>
          <p>
            Same engineering discipline, same after-sales commitment, a
            different equipment line — so clients can choose the forklift brand
            that fits their operation without leaving the Prime Group network of
            parts, technicians, and project engineers.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 pt-4">
            <div className="border-l-2 border-crimson pl-5">
              <p className="text-sm font-semibold text-ink">Group heritage</p>
              <p className="text-sm text-ink/60 mt-1">
                Backed by Prime Group's intralogistics experience since 2019.
              </p>
            </div>
            <div className="border-l-2 border-crimson pl-5">
              <p className="text-sm font-semibold text-ink">Equipment focus</p>
              <p className="text-sm text-ink/60 mt-1">
                Heli forklifts, warehouse trucks, and the racking and cold chain
                systems they serve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
