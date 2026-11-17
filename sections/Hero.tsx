"use client";

import { Button } from "@/components/Button";
import { CircuitBackground } from "@/components/CircuitBackground";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cpu, MonitorSmartphone, Wrench } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const floatingIcons = [
  { Icon: Cpu, className: "left-[8%] top-[28%]", delay: 0.2 },
  { Icon: MonitorSmartphone, className: "right-[12%] top-[22%]", delay: 0.4 },
  { Icon: Wrench, className: "right-[18%] bottom-[24%]", delay: 0.6 },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen overflow-hidden pt-28"
    >
      <CircuitBackground />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(22,119,255,0.18),transparent_55%)]" />

      <motion.div style={{ y, opacity }} className="container-shell relative grid items-center gap-12 px-4 pb-20 pt-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-cyan"
          >
            TECH971 | COMPUTER & MOBILE REPAIR | DUBAI
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="font-[family-name:var(--font-display)] text-4xl leading-tight tracking-wide text-white sm:text-5xl lg:text-6xl"
          >
            YOUR DEVICES.{" "}
            <span className="text-gradient">OUR EXPERTISE.</span>{" "}
            RELIABLE REPAIR.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-silver/90 sm:text-lg"
          >
            From computers and laptops to mobile phones and electronics, contact
            Tech971 for device repair inquiries and technical assistance in Dubai.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="#repair-inquiry">BOOK A REPAIR</Button>
            <Button href="#services" variant="secondary">
              EXPLORE SERVICES
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-10 grid max-w-lg gap-3 sm:grid-cols-2"
          >
            <div className="glass rounded-2xl p-4">
              <p className="text-xs tracking-[0.16em] text-cyan">DUBAI LOCATION</p>
              <p className="mt-1 text-sm text-silver">Near Sharaf DG Metro</p>
            </div>
            <div className="glass rounded-2xl p-4">
              <p className="text-xs tracking-[0.16em] text-cyan">DIRECT CONTACT</p>
              <p className="mt-1 text-sm text-silver">WhatsApp & Call Ready</p>
            </div>
          </motion.div>
        </div>

        <div className="relative">
          {floatingIcons.map(({ Icon, className, delay }) => (
            <motion.div
              key={className}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: delay + 0.4, duration: 0.5 }}
              className={`absolute z-20 hidden rounded-2xl border border-white/15 bg-midnight/80 p-3 text-cyan shadow-xl backdrop-blur md:block ${className} animate-float`}
            >
              <Icon className="h-5 w-5" />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, clipPath: "inset(12% 12% 12% 12%)" }}
            animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_30px_80px_rgba(22,119,255,0.25)]"
          >
            <div className="relative aspect-[4/5] sm:aspect-[5/6]">
              <Image
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=80"
                alt="Technician repairing electronics on a modern workspace"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-electric/10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -bottom-6 left-4 right-4 glass rounded-2xl p-4 sm:left-8 sm:right-auto sm:max-w-xs"
          >
            <p className="text-xs tracking-[0.16em] text-cyan">REPAIR FOCUS</p>
            <p className="mt-1 text-sm text-white">
              Computers, mobiles & electronics — inquire about your device today.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
