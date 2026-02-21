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
      <main className="relative z-10 pt-32 pb-16 px-6">
        <div className="mx-auto max-w-2xl">
          {/* Page header */}
          <div className="fade-in-section mb-12 text-center">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Contact
            </h1>
            <div className="section-divider mx-auto mt-4 w-16" />
          </div>

          {/* Booking CTA */}
          <div className="fade-in-section mb-12 text-center">
            <p className="text-lg text-silver">
              The fastest way to get started is a quick call.
            </p>
            <div className="mt-6">
              <CalendlyButton className="btn-green">
                Book a 15-Min Efficiency Audit
              </CalendlyButton>
            </div>
          </div>

          {/* Divider */}
          <div className="fade-in-section mb-12 flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-text-muted uppercase tracking-widest">
              or send a message
            </span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Form */}
          <div className="fade-in-section mb-12">
            <ContactForm />
          </div>

          {/* Footer info */}
          <div className="fade-in-section text-center space-y-2">
            <p className="text-sm text-silver">
              <strong className="text-navy">Response time:</strong>{" "}
              Within 24 hours
            </p>
            <p className="text-sm text-silver">
              <strong className="text-navy">Location:</strong> Houston,
              TX (remote-friendly)
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
