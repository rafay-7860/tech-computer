"use client";

import { motion } from "framer-motion";
import {
  Laptop,
  MapPin,
  MessageCircle,
  MessageSquare,
  Smartphone,
  Cpu,
} from "lucide-react";

const features = [
  {
    title: "Computer & Laptop Repair Focus",
    description:
      "Dedicated attention to computer and laptop repair inquiries and troubleshooting support.",
    Icon: Laptop,
  },
  {
    title: "Mobile Phone Repair Assistance",
    description:
      "Help with smartphone repair questions, assessments, and related technical concerns.",
    Icon: Smartphone,
  },
  {
    title: "Electronics Troubleshooting",
    description:
      "Support for general electronics inspection and repair inquiry guidance.",
    Icon: Cpu,
  },
  {
    title: "Customer Communication",
    description:
      "Clear discussion about your device issue, assessment options, and next steps.",
    Icon: MessageSquare,
  },
  {
    title: "Convenient Dubai Location",
    description:
      "Located at Al Khaleej Center near Sharaf DG Metro Station in Al Raffa, Dubai.",
    Icon: MapPin,
  },
  {
    title: "Direct WhatsApp Contact",
    description:
      "Reach Tech971 quickly on WhatsApp for repair inquiries and assistance.",
    Icon: MessageCircle,
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-midnight/50 section-pad">
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-electric/10 blur-3xl" />
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold tracking-[0.22em] text-cyan">
            WHY TECH971
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl tracking-wide text-white sm:text-4xl">
            TECH SUPPORT THAT PUTS YOUR DEVICE FIRST
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              whileHover={{ y: -6 }}
              className="glass group rounded-3xl p-6 transition hover:shadow-[0_20px_50px_rgba(22,119,255,0.15)]"
            >
              <div className="mb-4 inline-flex rounded-2xl border border-electric/30 bg-electric/10 p-3 text-cyan transition group-hover:scale-110">
                <feature.Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-silver/85">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
