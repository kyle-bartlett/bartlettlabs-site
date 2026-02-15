export default function About() {
  return (
    <section id="about" className="relative z-10 py-24 px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        {/* Text side */}
        <div className="fade-in-section">
          <h2 className="font-heading text-2xl tracking-[0.2em] text-text-primary sm:text-3xl">
            OUR PHILOSOPHY
          </h2>
          <div className="section-divider mt-6 w-24" />

          <p className="mt-8 text-lg leading-relaxed text-silver">
            Bartlett Labs operates at the intersection of creativity and
            technology. We don&apos;t believe in silos &mdash; our publishing
            informs our commerce, our AI research powers our software, and
            every division strengthens the others.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-silver">
            We&apos;re AI-native by design, embedding intelligent automation
            into everything we build. Not as a buzzword, but as a
            foundational principle that lets a lean team operate with
            outsized impact.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-silver">
            The future belongs to those who build it. We intend to be among
            them.
          </p>
        </div>

        {/* Abstract visual side */}
        <div className="fade-in-section flex items-center justify-center">
          <div className="relative h-80 w-80">
            {/* Layered abstract circles */}
            <div
              className="absolute inset-0 rounded-full opacity-20"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, var(--color-accent-blue), transparent 60%)",
              }}
            />
            <div
              className="absolute inset-4 rounded-full opacity-15"
              style={{
                background:
                  "radial-gradient(circle at 70% 60%, var(--color-accent-light), transparent 60%)",
              }}
            />
            <div
              className="absolute inset-8 rounded-full border border-silver/10"
            />
            <div
              className="absolute inset-16 rounded-full border border-accent-blue/20"
            />
            <div
              className="absolute inset-24 rounded-full border border-accent-light/15"
            />
            {/* Center glow dot */}
            <div className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-blue shadow-[0_0_20px_var(--color-accent-blue)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
