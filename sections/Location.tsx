"use client";

import { Button } from "@/components/Button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BUSINESS } from "@/lib/utils";
import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";

export function Location() {
  return (
    <section className="relative bg-midnight/40 section-pad">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold tracking-[0.22em] text-cyan">
            STORE LOCATION
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl tracking-wide text-white sm:text-4xl">
            VISIT TECH971 IN DUBAI
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass glow-blue rounded-3xl p-6 sm:p-8"
          >
            <h3 className="text-lg font-semibold text-white">{BUSINESS.name}</h3>
            <div className="mt-6 space-y-4 text-sm text-silver">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                {BUSINESS.address}
              </p>
              <a
                href={`tel:${BUSINESS.phoneTel}`}
                className="flex items-center gap-3 transition hover:text-cyan"
              >
                <Phone className="h-4 w-4 text-cyan" />
                {BUSINESS.phone}
              </a>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                href={BUSINESS.mapsUrl}
                className="sm:flex-1"
              >
                Get Directions
              </Button>
              <Button href={`tel:${BUSINESS.phoneTel}`} variant="secondary" className="sm:flex-1">
                Call Now
              </Button>
              <WhatsAppButton label="WhatsApp" className="sm:flex-1" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="overflow-hidden rounded-3xl border border-white/10 bg-deep-black"
          >
            <iframe
              title="Tech971 location on Google Maps"
              src="https://www.google.com/maps?q=Al+Khaleej+Center+Al+Raffa+Dubai&output=embed"
              className="h-full min-h-[360px] w-full border-0 grayscale-[20%] contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="border-t border-white/10 p-4 text-center text-sm">
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan transition hover:text-white"
              >
                Open exact location in Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
