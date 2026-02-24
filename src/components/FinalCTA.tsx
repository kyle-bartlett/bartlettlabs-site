"use client";

import { Lock, EyeOff, ShieldAlert } from "lucide-react";
import AuditButton from "./AuditButton";

const pricing = [
  {
    name: "The Lead Wrangler",
    price: "Starting at $500/mo",
    description: "24/7 lead response, SMS follow-up, and booking automation.",
    features: [
      "AI-powered SMS & chat response",
      "Automatic lead qualification",
      "Calendar booking integration",
      "Weekly performance report",
    ],
    highlighted: true,
  },
  {
    name: "Weekend Recovery",
    price: "Starting at $750/mo",
    description: "Invoicing, scheduling, and admin automation.",
    features: [
      "Automated invoice generation",
      "Smart scheduling system",
      "Data sync across tools",
      "Monthly optimization call",
    ],
    highlighted: false,
  },
  {
    name: "The Custom Lab Build",
    price: "Custom Quote",
    description: "Full engineering engagement for complex operations.",
    features: [
      "Custom AI system design",
      "Multi-tool integration",
      "Dedicated engineering support",
      "Complete training & handoff",
    ],
    highlighted: false,
  },
];

export default function FinalCTA() {
  return (
    <section className="relative">
      {/* Security Badge Section */}
      <div className="bg-navy text-white py-16 px-6">
        <div className="container-bl">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="flex-1">
              <h2 className="text-3xl font-bold font-heading mb-4">
                Your Data Stays in Your Shop.
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                I&rsquo;m an engineer, not a data broker. The systems I build
                for you are walled off. Your customer names, pricing, and
                internal processes are never used to train public AI models.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Lock className="text-burnt-orange mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-bold">Encrypted &amp; Local</p>
                    <p className="text-sm text-zinc-400">
                      Enterprise-grade encryption for every automation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <EyeOff className="text-sage-green mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-bold">No Data Training</p>
                    <p className="text-sm text-zinc-400">
                      Your data is never &lsquo;fed&rsquo; back into public AI
                      models.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-none p-8 bg-white/5 rounded-2xl border border-white/10 text-center">
              <div className="inline-block p-4 rounded-full bg-burnt-orange/20 mb-4">
                <ShieldAlert className="text-burnt-orange" size={48} />
              </div>
              <p className="text-sm font-mono tracking-widest uppercase mb-1">
                Security First
              </p>
              <p className="text-xs text-zinc-500 italic">
                Hand-Built in Texas
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 px-6">
        <div className="container-bl">
          <div className="fade-in-section mb-12 text-center">
            <p className="label-mono text-burnt-orange mb-3">Pricing</p>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl max-w-lg mx-auto">
              Honest pricing. No surprises.
            </h2>
            <p className="text-silver mt-4 max-w-xl mx-auto">
              Every project gets a fixed-scope quote. You know what you&rsquo;re
              paying before we start.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 flex flex-col border ${
                  tier.highlighted
                    ? "bg-navy text-white border-burnt-orange shadow-lg"
                    : "bg-white text-navy border-zinc-200"
                }`}
              >
                <h3 className="font-heading text-xl font-bold mb-2">
                  {tier.name}
                </h3>
                <p
                  className={`text-2xl font-bold font-heading mb-4 ${
                    tier.highlighted ? "text-burnt-orange" : "text-burnt-orange"
                  }`}
                >
                  {tier.price}
                </p>
                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    tier.highlighted ? "text-zinc-300" : "text-silver"
                  }`}
                >
                  {tier.description}
                </p>

                <ul className="space-y-2 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2 text-sm ${
                        tier.highlighted ? "text-zinc-300" : "text-silver"
                      }`}
                    >
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-burnt-orange" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <AuditButton
                  className={`w-full text-center py-3 px-6 rounded-lg font-bold text-sm border-2 transition-colors inline-flex items-center justify-center ${
                    tier.highlighted
                      ? "bg-burnt-orange border-burnt-orange text-white hover:bg-burnt-orange-dark hover:border-burnt-orange-dark"
                      : "border-navy text-navy hover:bg-navy hover:text-white"
                  }`}
                >
                  Let&rsquo;s Talk
                </AuditButton>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
