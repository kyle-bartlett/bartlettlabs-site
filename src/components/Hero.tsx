import Image from "next/image";
import Link from "next/link";
import CalendlyButton from "./CalendlyButton";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center px-6 text-center"
      style={{ minHeight: "100vh" }}
    >
      {/* Radial glow behind logo */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent-blue) 0%, transparent 70%)",
        }}
      />

      {/* Logo emblem */}
      <div className="logo-glow relative z-10 mb-6">
        <Image
          src="/logo-emblem.png"
          alt="Bartlett Labs"
          width={400}
          height={400}
          priority
          style={{
            width: "clamp(180px, 30vw, 320px)",
            height: "auto",
            display: "block",
          }}
        />
      </div>

      {/* Headline */}
      <h1 className="text-metallic relative z-10 font-heading text-2xl tracking-[0.15em] sm:text-3xl md:text-4xl max-w-3xl">
        AI automation for Houston businesses.
      </h1>

      {/* Subheadline */}
      <p className="relative z-10 mt-4 max-w-2xl text-base font-light leading-relaxed text-silver sm:text-lg">
        Websites, chatbots, and internal workflows that save time, capture
        leads, and reduce manual work&mdash;built fast and maintained.
      </p>

      {/* CTAs */}
      <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4">
        <CalendlyButton className="btn-primary">
          Book a 15-min call
        </CalendlyButton>
        <Link href="/services" className="btn-secondary">
          View services
        </Link>
      </div>

      {/* Trust microcopy */}
      <p className="relative z-10 mt-6 text-xs tracking-wider text-text-muted uppercase">
        Houston-based &middot; Reply within 24 hours
      </p>

      {/* Bullets */}
      <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-silver">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-blue" />
          Automations &amp; integrations
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-blue" />
          AI chat &amp; voice assistants
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-blue" />
          Websites + analytics
        </span>
      </div>
    </section>
  );
}
