import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CalendlyButton from "@/components/CalendlyButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Distribution & Logistics | Bartlett Labs — AI Automation | Houston, TX",
  description:
    "AI automation for distribution and logistics companies. Inventory, routing, order processing, and warehouse workflows — delivered in 1 week.",
};

const solutions = [
  {
    title: "Order processing automation",
    description:
      "Automatically route incoming orders to the right warehouse, generate pick lists, and update customers with real-time tracking.",
  },
  {
    title: "Inventory sync & alerts",
    description:
      "Keep inventory counts in sync across locations. Get automated reorder alerts before you run out — no more stockouts or overstocking.",
  },
  {
    title: "Route optimization & dispatch",
    description:
      "AI-optimized delivery routes that factor in traffic, priority, and vehicle capacity. Dispatchers get recommendations, not busy work.",
  },
];

export default function DistributionPage() {
  return (
    <>
      <Header />
      <main className="relative pt-16 pb-16 px-6">
        <div className="container-bl">
          <div className="fade-in-section mb-16 pt-8">
            <Link href="/#industries" className="label-mono text-silver hover:text-accent-blue transition-colors mb-4 inline-block">
              &larr; All Industries
            </Link>
            <p className="label-mono text-accent-blue mb-3">Distribution & Logistics</p>
            <h1 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl max-w-xl">
              AI automation for distribution &amp; logistics.
            </h1>
            <p className="mt-4 text-lg text-silver max-w-xl">
              Inventory, routing, order processing, and warehouse workflows — built and delivered in 1 week.
            </p>
          </div>

          <div className="fade-in-section mb-16">
            <p className="label-mono text-accent-blue mb-3">What We Automate</p>
            <div className="grid gap-6 sm:grid-cols-3">
              {solutions.map((uc) => (
                <div key={uc.title} className="card p-6">
                  <h3 className="font-heading text-sm font-semibold text-navy mb-2">
                    {uc.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-silver">
                    {uc.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-in-section mb-16">
            <p className="label-mono text-accent-blue mb-3">Client Results</p>
            <div className="card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-bg-secondary border border-border flex items-center justify-center">
                  <span className="label-mono text-silver">?</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">Your story here</p>
                  <p className="text-xs text-text-muted">Distribution · Houston, TX</p>
                </div>
              </div>
              <p className="text-base leading-relaxed text-silver italic">
                &ldquo;Case studies and testimonials from distribution clients will appear here as we grow our portfolio.&rdquo;
              </p>
            </div>
          </div>

          <div className="fade-in-section mb-16">
            <p className="label-mono text-accent-blue mb-3">See It In Action</p>
            <div className="aspect-video rounded-xl bg-bg-secondary border border-border flex items-center justify-center">
              <div className="text-center">
                <p className="label-mono text-text-muted mb-2">Demo Video</p>
                <p className="text-xs text-text-muted">Coming soon</p>
              </div>
            </div>
          </div>

          <div className="fade-in-section">
            <CalendlyButton className="btn-primary">
              Book a 15-Min Efficiency Audit
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
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
