"use client";

import { motion } from "framer-motion";
import { Timer, Zap, CheckCircle2 } from "lucide-react";

const results = [
  {
    title: "The SMS Lead-Responder",
    metric: "100% Response Rate",
    detail: "Built to respond to new leads in under 2 minutes.",
    status: "Beta Testing Complete",
    icon: <Timer className="text-burnt-orange" />,
  },
  {
    title: "Invoicing Automation",
    metric: "8+ Hours Saved",
    detail: "Automated the manual Sunday paperwork for service fleets.",
    status: "Prototype Active",
    icon: <Zap className="text-sage-green" />,
  },
];

export default function Proof() {
  return (
    <section className="relative py-20 px-6">
      <div className="container-bl">
        <div className="fade-in-section mb-12 text-center">
          <p className="label-mono text-burnt-orange mb-3">Proven Systems</p>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl max-w-lg mx-auto underline decoration-burnt-orange decoration-4 underline-offset-8">
            The Bartlett Guarantee
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {results.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl border-l-8 border-navy shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 opacity-10">
                <CheckCircle2 size={80} />
              </div>

              <div className="flex items-center gap-3 mb-4">
                {item.icon}
                <span className="font-mono text-xs font-bold uppercase tracking-tighter text-text-muted">
                  {item.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-navy mb-2">
                {item.title}
              </h3>
              <div className="text-4xl font-black text-burnt-orange mb-4 font-heading">
                {item.metric}
              </div>
              <p className="text-silver leading-relaxed italic border-t border-zinc-100 pt-4">
                &ldquo;{item.detail}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
