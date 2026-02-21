"use client";

import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const json = await res.json();
        setErrorMessage(json?.errors?.[0]?.message ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="card p-8 text-center">
        <div className="mb-4 text-3xl text-accent-green">&#10003;</div>
        <h3 className="font-heading text-lg font-semibold text-navy">
          Message Sent
        </h3>
        <p className="mt-3 text-silver">
          Thanks for reaching out. We&apos;ll reply within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-secondary mt-6"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-8 space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm text-silver">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-navy placeholder-text-muted outline-none transition-colors focus:border-accent-blue"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="business" className="mb-1.5 block text-sm text-silver">
            Business Name
          </label>
          <input
            type="text"
            id="business"
            name="business"
            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-navy placeholder-text-muted outline-none transition-colors focus:border-accent-blue"
            placeholder="Your company"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm text-silver">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-navy placeholder-text-muted outline-none transition-colors focus:border-accent-blue"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm text-silver">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-navy placeholder-text-muted outline-none transition-colors focus:border-accent-blue"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-silver">
          What are you trying to automate? *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-navy placeholder-text-muted outline-none transition-colors focus:border-accent-blue resize-y"
          placeholder="Tell us about your workflow, pain points, or what you'd like to build..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
