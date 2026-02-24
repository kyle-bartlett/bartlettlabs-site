"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Calendar,
  Activity,
  ShieldCheck,
} from "lucide-react";
import AuditButton from "./AuditButton";

const services = [
  {
    title: "The Lead Wrangler",
    description:
      "24/7 SMS/Chat response so you never miss a job while you're under a hood or in the field.",
    icon: <MessageSquare className="w-8 h-8 text-burnt-orange" />,
    gridSpan: "md:col-span-2",
    tag: "Lead Capture",
    dark: true,
  },
  {
    title: "Weekend Recovery",
    description:
      "Automating the 'Sunday Paperwork' — invoicing and scheduling handled while you're off the clock.",
    icon: <Calendar className="w-8 h-8 text-sage-green" />,
    gridSpan: "md:col-span-1",
    tag: "Admin Sync",
    dark: false,
  },
  {
    title: "The Custom Lab Build",
    description:
      "High-end engineering for complex operations that have outgrown off-the-shelf software.",
    icon: <Activity className="w-8 h-8 text-burnt-orange" />,
    gridSpan: "md:col-span-1",
    tag: "Custom Engine",
    dark: false,
  },
  {
    title: "Digital Vault",
    description:
      "Enterprise-grade security. Your data stays in your shop and never trains public AI models.",
    icon: <ShieldCheck className="w-8 h-8 text-sage-green" />,
    gridSpan: "md:col-span-2",
    tag: "Security First",
    dark: true,
  },
];

const springConfig = { mass: 1, stiffness: 170, damping: 26 };

export default function Services() {
  return (
    <section id="services" className="relative py-20 px-6">
      <div className="container-bl">
        <div className="fade-in-section mb-12 text-center">
          <p className="label-mono text-burnt-orange mb-3">What We Build</p>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl max-w-lg mx-auto">
            Your Workshop Toolbox
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", ...springConfig }}
              className={`p-8 rounded-2xl border border-zinc-200 shadow-sm flex flex-col justify-between ${service.gridSpan} ${
                service.dark
                  ? "bg-navy text-white"
                  : "bg-white text-navy"
              }`}
            >
              <div>
                <div className="mb-4">{service.icon}</div>
                <span className="label-mono opacity-70">{service.tag}</span>
                <h3 className="text-2xl font-bold mt-2 mb-4 font-heading">
                  {service.title}
                </h3>
                <p className="text-lg leading-relaxed opacity-90">
                  {service.description}
                </p>
              </div>

              <AuditButton
                className={`mt-8 w-fit px-6 py-2 rounded-lg font-bold text-sm border-2 inline-flex items-center gap-2 transition-colors ${
                  service.dark
                    ? "border-burnt-orange text-burnt-orange hover:bg-burnt-orange hover:text-white"
                    : "border-navy text-navy hover:bg-navy hover:text-white"
                }`}
              >
                Learn More
              </AuditButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
