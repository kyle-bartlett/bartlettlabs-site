import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CalendlyButton from "@/components/CalendlyButton";

export const metadata: Metadata = {
  title: "About | Bartlett Labs — AI Automation & Business Systems | Houston, TX",
  description:
    "Houston-based AI automation partner. We build practical tools that save time, not slide decks that gather dust.",
};

const differentiators = [
  {
    title: "Speed",
    description:
      "Most projects launch in 10 days, not months. We scope tightly, build fast, and iterate based on real usage.",
  },
  {
    title: "Business Outcomes",
    description:
      "Every engagement starts with a measurable goal: time saved, leads captured, errors eliminated. Technology is the means, not the end.",
  },
  {
    title: "Owner-Friendly",
    description:
      "No jargon, no vendor lock-in. You get clear documentation, training, and full ownership of everything we build.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="relative pt-16 pb-16 px-6">
        <div className="container-bl">
          {/* Page header */}
          <div className="fade-in-section mb-16 pt-8">
            <p className="label-mono text-accent-blue mb-3">About</p>
            <h1 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl max-w-lg">
              Your local Houston partner for AI&nbsp;automation.
            </h1>
          </div>

          {/* Photo + Mission */}
          <div className="fade-in-section mb-16 grid gap-10 sm:grid-cols-3 items-start">
            {/* Headshot */}
            <div className="sm:col-span-1">
              <div className="rounded-xl overflow-hidden aspect-square">
                <Image
                  src="/kyle-bartlett.png"
                  alt="Kyle Bartlett — Founder of Bartlett Labs"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            </div>

            {/* Mission text */}
            <div className="sm:col-span-2">
              <p className="text-lg leading-relaxed text-silver">
                Bartlett Labs is your local Houston partner for AI automation and
                business systems. We help small businesses eliminate repetitive
                work by building practical tools&mdash;websites that capture leads
                automatically, AI assistants that answer customers 24/7, and
                internal automations that replace spreadsheet gymnastics with
                one-click workflows.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-silver">
                We&apos;re not here to sell the AI hype. We&apos;re business logic
                solvers who happen to use AI. If it doesn&apos;t save you time or
                make you money, we don&apos;t build it.
              </p>
            </div>
          </div>

          {/* Differentiators */}
          <div className="fade-in-section mb-16">
            <p className="label-mono text-accent-blue mb-3">Why Us</p>
            <h2 className="font-heading text-xl font-bold tracking-tight text-navy sm:text-2xl mb-10">
              Why Bartlett Labs
            </h2>

            <div className="grid gap-6 sm:grid-cols-3">
              {differentiators.map((d) => (
                <div key={d.title} className="card p-6">
                  <h3 className="font-heading text-sm font-semibold text-navy mb-2">
                    {d.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-silver">
                    {d.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Houston focus */}
          <div className="fade-in-section">
            <p className="text-sm text-text-muted mb-6">
              Proudly serving the Houston metro area and remote clients
              nationwide.
            </p>
            <CalendlyButton className="btn-primary">
              Book a 15-Min Efficiency Audit
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
            </CalendlyButton>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
