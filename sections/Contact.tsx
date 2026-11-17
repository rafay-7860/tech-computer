"use client";

import { ContactCard } from "@/components/ContactCard";
import { ContactForm } from "@/components/ContactForm";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="relative section-pad">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold tracking-[0.22em] text-cyan">
            CONTACT
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl tracking-wide text-white sm:text-4xl">
            GET IN TOUCH WITH TECH971
          </h2>
          <p className="mt-4 text-sm text-silver/80 sm:text-base">
            Call, message on WhatsApp, or send an inquiry about your device.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <ContactCard />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
