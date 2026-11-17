"use client";

import { BUSINESS } from "@/lib/utils";
import { MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function ContactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="glass glow-blue rounded-3xl p-6 sm:p-8"
    >
      <h3 className="font-[family-name:var(--font-display)] text-lg tracking-[0.14em] text-white">
        {BUSINESS.shortName}
      </h3>
      <p className="mt-2 text-sm text-silver/85">{BUSINESS.name}</p>

      <div className="mt-6 space-y-4 text-sm text-silver">
        <a
          href={`tel:${BUSINESS.phoneTel}`}
          className="flex items-start gap-3 transition hover:text-cyan"
        >
          <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
          {BUSINESS.phone}
        </a>
        <p className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
          {BUSINESS.address}
        </p>
        <a
          href={BUSINESS.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-cyan transition hover:text-white"
        >
          Open Google Maps
        </a>
      </div>

      <div className="mt-8">
        <WhatsAppButton label="WhatsApp Contact" className="w-full" />
      </div>
    </motion.div>
  );
}
