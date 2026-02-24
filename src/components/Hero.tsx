import AuditButton from "./AuditButton";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="relative bg-bg-primary pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container-bl">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-center">
          {/* Left column — text */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex flex-wrap gap-2">
              {["Purdue Engineering", "AI Automation", "Crosby, TX"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="label-mono inline-block rounded-full border border-border px-3 py-1 text-silver"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>

            <h1 className="font-heading text-4xl font-bold tracking-tight text-navy leading-[1.1] sm:text-5xl lg:text-6xl">
              World-class systems.
              <br />
              Small-town values.
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-silver">
              I&rsquo;m an Industrial Engineer who grew up in a family Ford
              dealership. I build the sturdy, automated systems that give local
              business owners their Sundays back.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 pt-2">
              <AuditButton className="btn-primary">
                Request a 10-Minute Efficiency Audit
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </AuditButton>
              <a href="#services" className="btn-secondary">
                See How It Works
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right column — 3D LEGO Baseplate */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
