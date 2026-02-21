import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CalendlyButton from "@/components/CalendlyButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Healthcare & Clinics | Bartlett Labs — AI Automation | Houston, TX",
  description:
    "AI automation for Houston clinics and healthcare practices. Patient scheduling, records, and follow-up workflows — delivered in 1 week.",
};

const useCases = [
  {
    title: "Patient scheduling & reminders",
    description:
      "AI-powered booking that handles appointment requests, sends confirmations, and reduces no-shows with automated reminders via SMS and email.",
  },
  {
    title: "Intake form automation",
    description:
      "Digital intake forms that pre-populate records, verify insurance eligibility, and flag missing information — before the patient arrives.",
  },
  {
    title: "Follow-up & care coordination",
    description:
      "Automated post-visit follow-ups, prescription reminders, and referral tracking. Keep patients engaged without adding admin burden.",
  },
];

export default function HealthcarePage() {
  return (
    <>
      <Header />
      <main className="relative pt-16 pb-16 px-6">
        <div className="container-bl">
          <div className="fade-in-section mb-16 pt-8">
            <Link href="/#industries" className="label-mono text-silver hover:text-accent-blue transition-colors mb-4 inline-block">
              &larr; All Industries
            </Link>
            <p className="label-mono text-accent-blue mb-3">Healthcare & Clinics</p>
            <h1 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl max-w-xl">
              AI automation for healthcare &amp;&nbsp;clinics.
            </h1>
            <p className="mt-4 text-lg text-silver max-w-xl">
              Patient scheduling, records, and follow-up workflows for clinics and practices — delivered in 1 week.
            </p>
          </div>

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

          <div className="fade-in-section mb-16">
            <p className="label-mono text-accent-blue mb-3">Client Results</p>
            <div className="card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-bg-secondary border border-border flex items-center justify-center">
                  <span className="label-mono text-silver">?</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">Your story here</p>
                  <p className="text-xs text-text-muted">Healthcare · Houston, TX</p>
                </div>
              </div>
              <p className="text-base leading-relaxed text-silver italic">
                &ldquo;Case studies and testimonials from healthcare clients will appear here as we grow our portfolio.&rdquo;
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
