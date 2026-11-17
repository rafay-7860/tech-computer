"use client";

import { Button } from "@/components/Button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BUSINESS } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="relative section-pad">
      <div className="container-shell grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, clipPath: "inset(10% 10% 10% 10% round 24px)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round 24px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-white/10"
        >
          <div className="relative aspect-[4/5] sm:aspect-[5/4]">
            <Image
              src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=1400&q=80"
              alt="Technical repair workspace with computer hardware tools"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-deep-black/70 via-transparent to-electric/20" />
          </div>
          <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl p-4">
            <p className="text-xs tracking-[0.16em] text-cyan">AL KHALEEJ CENTER</p>
            <p className="mt-1 text-sm text-white">Al Raffa, Dubai</p>
          </div>
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold tracking-[0.22em] text-cyan"
          >
            ABOUT TECH971
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-3 font-[family-name:var(--font-display)] text-3xl tracking-wide text-white sm:text-4xl"
          >
            YOUR LOCAL TECHNOLOGY REPAIR DESTINATION IN DUBAI
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="mt-5 text-base leading-relaxed text-silver/90"
          >
            Tech971 Computers, Mobiles & Electronics Repairing provides a
            convenient contact point for customers seeking computer, mobile phone,
            and electronics repair assistance in Dubai. Visit our shop at Al
            Khaleej Center or contact our team about your device requirements.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-silver"
          >
            <p className="font-medium text-white">Location</p>
            <p className="mt-2 leading-relaxed">{BUSINESS.address}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24 }}
            className="mt-6 flex flex-col gap-3 sm:flex-row"
          >
            <Button href={`tel:${BUSINESS.phoneTel}`}>Call Now</Button>
            <WhatsAppButton label="WhatsApp" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
