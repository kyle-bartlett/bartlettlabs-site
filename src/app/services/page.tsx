import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CalendlyButton from "@/components/CalendlyButton";

export const metadata: Metadata = {
  title: "Services | Bartlett Labs — AI Automation & Business Systems | Houston, TX",
  description:
    "Websites, AI assistants, and internal automation sprints for Houston small businesses. Fixed-scope quotes in 24 hours.",
};

const services = [
  {
    id: "lead-capture",
    title: "Website + Lead Capture System",
    description:
      "A modern, mobile-first website with built-in forms, analytics tracking, and automated email follow-up sequences. Designed to convert visitors into leads without manual effort.",
    whoItsFor:
      "Small businesses that need a professional online presence and an automated way to capture and nurture leads.",
    deliverables: [
      "Custom-designed responsive website",
      "Contact forms with CRM integration",
      "Analytics dashboard (traffic, conversions)",
      "Automated email follow-up sequences",
      "SEO fundamentals (meta tags, sitemap, speed)",
    ],
    timeline: "1 week",
    clientProvides:
      "Logo, brand colors, copy direction (or we draft it), and access to your domain registrar.",
  },
  {
    id: "ai-assistant",
    title: "AI Assistant (Chat + SMS + Call)",
    description:
      "A custom-trained AI assistant that answers FAQs, qualifies leads, and books appointments\u2014deployed across your website, SMS, and phone. Available 24/7 without adding headcount.",
    whoItsFor:
      "Service businesses that lose leads to slow response times or spend too many hours answering the same questions.",
    deliverables: [
      "Custom-trained AI (your services, pricing, FAQs)",
      "Website chat widget",
      "SMS and/or voice channel setup",
      "Dashboard with conversation analytics",
      "Escalation rules for human handoff",
    ],
    timeline: "1 week",
    clientProvides:
      "FAQ document or knowledge base, desired tone/personality, and phone number (if applicable).",
  },
  {
    id: "automation",
    title: "Internal Automation Sprint",
    description:
      "We audit your internal workflows and automate the repetitive parts\u2014reporting, scheduling, data syncing, notifications\u2014so your team focuses on high-value work instead of manual tasks.",
    whoItsFor:
      "Operations teams drowning in spreadsheets, manual data entry, or disconnected tools.",
    deliverables: [
      "Process audit and automation map",
      "Custom integrations (CRM, email, sheets, Slack, etc.)",
      "Automated reporting dashboards",
      "Training session and documentation",
      "30-day post-launch support",
    ],
    timeline: "1 week",
    clientProvides:
      "Access to the tools/platforms you currently use and a walkthrough of your existing workflows.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="relative pt-16 pb-16 px-6">
        <div className="container-bl">
          {/* Page header */}
          <div className="fade-in-section mb-20 pt-8">
            <p className="label-mono text-accent-blue mb-3">Services</p>
            <h1 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl max-w-lg">
              What we build.
            </h1>
            <p className="mt-4 text-lg text-silver max-w-lg">
              Fixed-scope quotes in 24 hours. No hourly billing, no surprises.
            </p>
          </div>

          {/* Service sections */}
          <div className="space-y-20">
            {services.map((s) => (
              <div key={s.title} id={s.id} className="fade-in-section scroll-mt-24">
                <h2 className="font-heading text-xl font-bold tracking-tight text-navy sm:text-2xl">
                  {s.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-silver max-w-2xl">
                  {s.description}
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div className="card p-6">
                    <h3 className="label-mono text-accent-blue mb-2">
                      Who it&apos;s for
                    </h3>
                    <p className="text-sm text-silver">{s.whoItsFor}</p>
                  </div>
                  <div className="card p-6">
                    <h3 className="label-mono text-accent-blue mb-2">
                      Timeline
                    </h3>
                    <p className="text-sm text-silver">{s.timeline}</p>
                    <h3 className="label-mono text-accent-blue mt-4 mb-2">
                      What you provide
                    </h3>
                    <p className="text-sm text-silver">
                      {s.clientProvides}
                    </p>
                  </div>
                </div>

                <div className="mt-6 card p-6">
                  <h3 className="label-mono text-accent-blue mb-3">
                    Deliverables
                  </h3>
                  <ul className="space-y-2 text-sm text-silver">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2">
                        <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary text-xs">
                    Get a Quote
                  </Link>
                  <CalendlyButton className="btn-secondary text-xs">
                    Book a Call
                  </CalendlyButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
