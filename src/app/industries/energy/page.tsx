import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CalendlyButton from "@/components/CalendlyButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Energy Services | Bartlett Labs — AI Automation | Houston, TX",
  description:
    "AI automation for Houston energy services companies. Field ops, dispatch, compliance, and reporting workflows — built and delivered in 1 week.",
};

const useCases = [
  {
    title: "Field dispatch automation",
    description:
      "Automated job assignment, route optimization, and real-time crew updates — no more radio tag or spreadsheet juggling.",
  },
  {
    title: "Compliance document generation",
    description:
      "Auto-populate safety reports, inspection logs, and regulatory filings from field data. Always audit-ready.",
  },
  {
    title: "Equipment tracking & maintenance alerts",
    description:
      "Automated maintenance scheduling based on runtime hours, with SMS alerts to field supervisors before issues escalate.",
  },
];

export default function EnergyPage() {
  return (
    <>
      <Header />
      <main className="relative pt-16 pb-16 px-6">
        <div className="container-bl">
          <div className="fade-in-section mb-16 pt-8">
            <Link href="/#industries" className="label-mono text-silver hover:text-accent-blue transition-colors mb-4 inline-block">
              &larr; All Industries
            </Link>
            <p className="label-mono text-accent-blue mb-3">Energy Services</p>
            <h1 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl max-w-xl">
              AI automation for Houston energy&nbsp;companies.
            </h1>
            <p className="mt-4 text-lg text-silver max-w-xl">
              Field ops, dispatch, compliance, and reporting workflows — built and delivered in 1 week.
            </p>
          </div>

          {/* Use cases */}
          <div className="fade-in-section mb-16">
            <p className="label-mono text-accent-blue mb-3">What We Automate</p>
            <div className="grid gap-6 sm:grid-cols-3">
              {useCases.map((uc) => (
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

          {/* Testimonials placeholder */}
          <div className="fade-in-section mb-16">
            <p className="label-mono text-accent-blue mb-3">Client Results</p>
            <div className="card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-bg-secondary border border-border flex items-center justify-center">
                  <span className="label-mono text-silver">?</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">Your story here</p>
                  <p className="text-xs text-text-muted">Energy Services · Houston, TX</p>
                </div>
              </div>
              <p className="text-base leading-relaxed text-silver italic">
                &ldquo;Case studies and testimonials from energy services clients will appear here as we grow our portfolio.&rdquo;
              </p>
            </div>
          </div>

          {/* Media placeholder */}
          <div className="fade-in-section mb-16">
            <p className="label-mono text-accent-blue mb-3">See It In Action</p>
            <div className="aspect-video rounded-xl bg-bg-secondary border border-border flex items-center justify-center">
              <div className="text-center">
                <p className="label-mono text-text-muted mb-2">Demo Video</p>
                <p className="text-xs text-text-muted">Coming soon</p>
              </div>
            </div>
          </div>

          {/* CTA */}
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
