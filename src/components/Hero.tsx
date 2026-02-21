import Image from "next/image";
import CalendlyButton from "./CalendlyButton";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center px-6 text-center"
      style={{ minHeight: "100svh" }}
    >
      {/* Logo emblem */}
      <div className="relative z-10 mb-8">
        <Image
          src="/logo-emblem.png"
          alt="Bartlett Labs"
          width={220}
          height={220}
          priority
          style={{
            width: "clamp(160px, 14vw, 220px)",
            height: "auto",
            display: "block",
          }}
        />
      </div>

      {/* Headline */}
      <h1 className="relative z-10 font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl md:text-5xl max-w-3xl leading-tight">
        Stop Doing the &ldquo;Busy Work&rdquo; That&rsquo;s Killing Your Growth.
      </h1>

      {/* Sub-headline */}
      <p className="relative z-10 mt-5 max-w-2xl text-base leading-relaxed text-silver sm:text-lg">
        We build custom AI assistants and automation workflows that handle your
        leads, scheduling, and data entry. Get your time back and scale without
        adding headcount.
      </p>

      {/* CTAs */}
      <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4">
        <CalendlyButton className="btn-green">
          Book a 15-Min Efficiency Audit
        </CalendlyButton>
        <a href="#demo" className="btn-secondary">
          See it in Action
        </a>
      </div>

      {/* Trust line */}
      <p className="relative z-10 mt-6 text-sm text-text-muted">
        Proudly building in Houston, Texas &bull; Fixed-scope quotes in 24 hours.
      </p>
    </section>
  );
}
