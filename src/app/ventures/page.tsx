import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ventures | Bartlett Labs",
  description:
    "Bartlett Labs ventures in digital publishing and commerce.",
};

const ventures = [
  {
    title: "Digital Publishing",
    description:
      "Original content across diverse categories, from illustrated works to narrative fiction. Our autonomous publishing pipeline brings ideas from concept to reader using AI-assisted workflows and modern distribution channels.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 stroke-accent-blue" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        <path d="M8 7h6" />
        <path d="M8 11h4" />
      </svg>
    ),
  },
  {
    title: "Commerce",
    description:
      "Curated product lines brought to life through modern print-on-demand infrastructure. Quality merchandise designed and fulfilled at scale, powered by data-driven product selection and automated operations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 stroke-accent-blue" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
];

export default function VenturesPage() {
  return (
    <>
      <Header />
      <main className="relative z-10 pt-32 pb-16 px-6">
        <div className="mx-auto max-w-4xl">
          {/* Page header */}
          <div className="fade-in-section mb-16 text-center">
            <h1 className="font-heading text-3xl tracking-[0.2em] text-text-primary sm:text-4xl">
              VENTURES
            </h1>
            <div className="section-divider mx-auto mt-6 w-24" />
            <p className="mt-6 text-lg text-silver">
              Beyond client services, Bartlett Labs operates its own product
              lines in publishing and commerce.
            </p>
          </div>

          {/* Venture cards */}
          <div className="grid gap-8 sm:grid-cols-2">
            {ventures.map((v) => (
              <div
                key={v.title}
                className="glass-card fade-in-section rounded-xl p-8"
              >
                <div className="mb-4">{v.icon}</div>
                <h2 className="font-heading text-lg tracking-wider text-text-primary">
                  {v.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-silver">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
