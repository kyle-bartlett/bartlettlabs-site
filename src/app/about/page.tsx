import type { Metadata } from "next";
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
      <main className="relative z-10 pt-32 pb-16 px-6">
        <div className="mx-auto max-w-4xl">
          {/* Page header */}
          <div className="fade-in-section mb-16 text-center">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              About
            </h1>
            <div className="section-divider mx-auto mt-4 w-16" />
          </div>

          {/* Photo + Mission */}
          <div className="fade-in-section mb-16 grid gap-10 sm:grid-cols-3 items-start">
            {/* Headshot placeholder */}
            <div className="sm:col-span-1">
              <div className="flex items-center justify-center rounded-xl bg-gray-100 aspect-square">
                <span className="text-sm text-text-muted">Photo coming soon</span>
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
            <h2 className="font-heading text-xl font-bold tracking-tight text-navy sm:text-2xl text-center mb-10">
              Why Bartlett Labs
            </h2>

            <div className="grid gap-6 sm:grid-cols-3">
              {differentiators.map((d) => (
                <div key={d.title} className="card p-6 text-center">
                  <h3 className="font-heading text-base font-semibold text-accent-blue">
                    {d.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-silver">
                    {d.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Houston focus */}
          <div className="fade-in-section text-center">
            <p className="text-sm text-text-muted">
              Proudly serving the Houston metro area and remote clients
              nationwide.
            </p>
            <div className="mt-8">
              <CalendlyButton className="btn-green">
                Book a 15-Min Efficiency Audit
              </CalendlyButton>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
