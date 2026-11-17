"use client";

import { DeviceCard } from "@/components/DeviceCard";
import { devices } from "@/data/devices";
import { motion } from "framer-motion";

export function Devices() {
  return (
    <section id="devices" className="relative overflow-hidden bg-midnight/40 section-pad">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/50 to-transparent" />
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold tracking-[0.22em] text-cyan">
            DEVICE CATEGORIES
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl tracking-wide text-white sm:text-4xl">
            WE HELP KEEP YOUR TECHNOLOGY RUNNING
          </h2>
          <p className="mt-4 text-sm text-silver/80 sm:text-base">
            Submit a repair inquiry for common device categories. Device model
            support is confirmed after discussion with the shop.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {devices.map((device, index) => (
            <DeviceCard key={device.id} device={device} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
