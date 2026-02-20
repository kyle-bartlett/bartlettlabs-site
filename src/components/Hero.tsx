import Image from "next/image";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section
      className="relative px-6"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      {/* Radial glow behind logo */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent-blue) 0%, transparent 70%)",
        }}
      />

      {/* Logo */}
      <div className="logo-glow relative z-10" style={{ marginBottom: "24px" }}>
        <Image
          src="/logo-emblem.png"
          alt="Bartlett Labs"
          width={400}
          height={400}
          priority
          className="logo-emblem"
          style={{
            width: "clamp(220px, 30vw, 400px)",
            height: "auto",
            display: "block",
          }}
        />
      </div>

      {/* Wordmark */}
      <h1
        className="text-metallic relative z-10 font-heading text-3xl tracking-[0.35em] sm:text-4xl md:text-5xl"
        style={{ marginBottom: "12px" }}
      >
        BARTLETT LABS
      </h1>

      {/* Tagline */}
      <p className="relative z-10 text-lg font-light tracking-wide text-silver sm:text-xl">
        Engineering Tomorrow&apos;s Solutions
      </p>

      <ScrollIndicator />
    </section>
  );
}
