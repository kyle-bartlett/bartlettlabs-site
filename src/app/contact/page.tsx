import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CalendlyButton from "@/components/CalendlyButton";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Bartlett Labs",
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
            <h1 className="font-heading text-3xl tracking-[0.2em] text-text-primary sm:text-4xl">
              CONTACT
            </h1>
            <div className="section-divider mx-auto mt-6 w-24" />
          </div>

          {/* Booking CTA */}
          <div className="fade-in-section mb-12 text-center">
            <p className="text-lg text-silver">
              The fastest way to get started is a quick call.
            </p>
            <div className="mt-6">
              <CalendlyButton className="btn-primary">
                Book a 15-min call
              </CalendlyButton>
            </div>
          </div>

          {/* Divider */}
          <div className="fade-in-section mb-12 flex items-center gap-4">
            <div className="section-divider flex-1" />
            <span className="text-xs text-text-muted uppercase tracking-widest">
              or send a message
            </span>
            <div className="section-divider flex-1" />
          </div>

          {/* Form */}
          <div className="fade-in-section mb-12">
            <ContactForm />
          </div>

          {/* Footer info */}
          <div className="fade-in-section text-center space-y-2">
            <p className="text-sm text-silver">
              <strong className="text-text-primary">Response time:</strong>{" "}
              Within 24 hours
            </p>
            <p className="text-sm text-silver">
              <strong className="text-text-primary">Location:</strong> Houston,
              TX (remote-friendly)
            </p>
            <p className="text-sm text-silver">
              <strong className="text-text-primary">Email:</strong>{" "}
              <a
                href="mailto:kyle@bartlettlabs.io"
                className="text-accent-light hover:underline"
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
