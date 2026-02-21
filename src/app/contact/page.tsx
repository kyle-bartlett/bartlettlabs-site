import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CalendlyButton from "@/components/CalendlyButton";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Bartlett Labs — AI Automation & Business Systems | Houston, TX",
  description:
    "Book a 15-minute call or send us a message. Houston-based, remote-friendly. Reply within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="relative pt-16 pb-16 px-6">
        <div className="container-bl max-w-2xl">
          {/* Page header */}
          <div className="fade-in-section mb-12 pt-8">
            <p className="label-mono text-accent-blue mb-3">Contact</p>
            <h1 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Let&rsquo;s talk.
            </h1>
          </div>

          {/* Booking CTA */}
          <div className="fade-in-section mb-12">
            <p className="text-lg text-silver mb-6">
              The fastest way to get started is a quick call.
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

          {/* Divider */}
          <div className="fade-in-section mb-12 flex items-center gap-4">
            <div className="flex-1 border-dashed-b" />
            <span className="label-mono text-text-muted">or send a message</span>
            <div className="flex-1 border-dashed-b" />
          </div>

          {/* Form */}
          <div className="fade-in-section mb-12">
            <ContactForm />
          </div>

          {/* Footer info */}
          <div className="fade-in-section space-y-2">
            <p className="text-sm text-silver">
              <strong className="text-navy">Response time:</strong> Within 24
              hours
            </p>
            <p className="text-sm text-silver">
              <strong className="text-navy">Location:</strong> Houston, TX
              (remote-friendly)
            </p>
            <p className="text-sm text-silver">
              <strong className="text-navy">Email:</strong>{" "}
              <a
                href="mailto:kyle@bartlettlabs.io"
                className="text-accent-blue hover:underline"
              >
                kyle@bartlettlabs.io
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
