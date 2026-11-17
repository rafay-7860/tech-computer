"use client";

import { RepairForm } from "@/components/RepairForm";
import { motion } from "framer-motion";

export function RepairInquiry() {
  return (
    <section id="repair-inquiry" className="relative overflow-hidden section-pad">
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-electric/15 blur-3xl" />
      <div className="container-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold tracking-[0.22em] text-cyan">
            REPAIR INQUIRY
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl tracking-wide text-white sm:text-4xl">
            WHAT DEVICE NEEDS ATTENTION?
          </h2>
          <p className="mt-4 text-sm text-silver/80 sm:text-base">
            Share your device details and we will prepare a WhatsApp inquiry for
            Tech971. Responses come directly from the shop.
          </p>
        </motion.div>

        <div className="mx-auto mt-10 max-w-4xl">
          <RepairForm />
        </div>
      </div>
    </section>
  );
}
