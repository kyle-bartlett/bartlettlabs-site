"use client";

import Script from "next/script";
import { motion } from "framer-motion";
import { ClipboardCheck, Shield } from "lucide-react";

const springConfig = { mass: 1, stiffness: 170, damping: 26 };

export default function DiagnosticAudit() {
  return (
    <section id="audit" className="py-20 px-6 border-t border-zinc-200">
      <div className="container-bl max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springConfig}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-sage-green/10 text-sage-green mb-4 border border-sage-green/20"
          >
            <ClipboardCheck size={16} />
            <span className="text-xs font-bold uppercase tracking-widest">
              Shop Diagnostic
            </span>
          </motion.div>

          <h2 className="text-3xl font-bold text-navy font-heading mb-4 sm:text-4xl">
            Find the Leaks in Your Business
          </h2>
          <p className="text-lg text-silver max-w-2xl mx-auto">
            I&rsquo;m an Industrial Engineer who isn&rsquo;t afraid to get my
            hands dirty. Schedule a free 10-minute audit to get a custom
            automation blueprint for your shop floor.
          </p>
        </div>

        {/* GHL Booking Embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl border border-zinc-200 overflow-hidden relative"
        >
          {/* Top Blueprint Bar */}
          <div className="h-2 bg-navy w-full" />

          <div className="p-1 min-h-[600px]">
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/tnWattFiELBGpctlleU8"
              style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "600px" }}
              scrolling="no"
              id="dafuQebEYA0qSIt6qY2i_1771884803700"
              title="Schedule Your Efficiency Audit"
            />
          </div>

          {/* Security Footer */}
          <div className="bg-zinc-50 p-4 border-t border-zinc-200 flex items-center justify-center gap-4">
            <Shield className="text-sage-green w-5 h-5" />
            <p className="text-xs text-silver font-medium">
              Enterprise-Grade Privacy: Your data is never used to train public
              AI models. Period.
            </p>
          </div>
        </motion.div>
      </div>

      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </section>
  );
}
