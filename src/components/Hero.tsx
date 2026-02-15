import Image from "next/image";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center px-6">
      {/* Radial glow behind logo */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent-blue) 0%, transparent 70%)",
        }}
      />

      {/* Logo */}
      <div className="logo-glow relative z-10 mb-8">
        <Image
          src="/logo.png"
          alt="Bartlett Labs"
          width={220}
          height={220}
          priority
          className="rounded-full"
        />
      </div>

      {/* Wordmark */}
      <h1 className="text-metallic relative z-10 font-heading text-3xl tracking-[0.35em] sm:text-4xl md:text-5xl">
        BARTLETT LABS
      </h1>

      {/* Tagline */}
      <p className="relative z-10 mt-5 text-lg font-light tracking-wide text-silver sm:text-xl">
        Engineering Tomorrow&apos;s Solutions
      </p>

      <ScrollIndicator />
    </section>
  );
}
