"use client";

import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";
import { motion } from "framer-motion";

export function Services() {
  return (
    <section id="services" className="relative section-pad">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold tracking-[0.22em] text-cyan">
            REPAIR SERVICES
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl tracking-wide text-white sm:text-4xl">
            EXPERT REPAIR SERVICES FOR YOUR DEVICES
          </h2>
          <p className="mt-4 text-sm text-silver/80 sm:text-base">
            Suggested service categories for computer, mobile, and electronics
            repair inquiries. Actual support depends on your device and assessment.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
