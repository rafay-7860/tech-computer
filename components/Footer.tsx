"use client";

import { Logo } from "@/components/Logo";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BUSINESS, NAV_LINKS } from "@/lib/utils";
import { services } from "@/data/services";
import { MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-midnight">
      <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-electric/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-cyan/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="container-shell section-pad relative grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]"
      >
        <div>
          <Logo />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-silver/80">
            Tech971 Computers, Mobiles & Electronics Repairing is your local
            contact point in Dubai for computer, mobile phone, and electronics
            repair assistance.
          </p>
          <div className="mt-6">
            <WhatsAppButton label="Chat on WhatsApp" />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.18em] text-white">
            QUICK NAVIGATION
          </h3>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-silver transition hover:text-cyan"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.18em] text-white">
            REPAIR SERVICES
          </h3>
          <ul className="mt-4 space-y-2">
            {services.map((service) => (
              <li key={service.id}>
                <a
                  href="#services"
                  className="text-sm text-silver transition hover:text-cyan"
                >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <div className="container-shell border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 text-sm text-silver/80 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-2">
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="inline-flex items-center gap-2 transition hover:text-cyan"
            >
              <Phone className="h-4 w-4" />
              {BUSINESS.phone}
            </a>
            <p className="flex max-w-xl items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              {BUSINESS.address}
            </p>
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-cyan transition hover:text-white"
            >
              Open in Google Maps
            </a>
          </div>
          <p className="text-xs tracking-wide text-silver/60">
            © {new Date().getFullYear()} TECH971 Computers, Mobiles & Electronics
            Repairing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
