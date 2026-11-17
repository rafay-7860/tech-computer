"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  {
    step: "01",
    title: "CONTACT US",
    description:
      "Tell us about your computer, mobile, or electronic device issue.",
  },
  {
    step: "02",
    title: "DEVICE ASSESSMENT",
    description:
      "Discuss the issue and arrange an assessment with the repair shop.",
  },
  {
    step: "03",
    title: "REPAIR INFORMATION",
    description:
      "Get information about the recommended repair and quotation.",
  },
  {
    step: "04",
    title: "CUSTOMER COLLECTION",
    description:
      "Coordinate collection with the shop after the repair is completed.",
  },
];

export function RepairProcess() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !lineRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const tween = gsap.fromTo(
      lineRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: lineRef.current.parentElement,
          start: "top 70%",
          end: "bottom 50%",
          scrub: true,
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section className="relative section-pad">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold tracking-[0.22em] text-cyan">
            REPAIR PROCESS
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl tracking-wide text-white sm:text-4xl">
            HOW OUR REPAIR PROCESS WORKS
          </h2>
        </motion.div>

        <div className="relative mt-14">
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-white/10 lg:block">
            <div
              ref={lineRef}
              className="h-full origin-left bg-gradient-to-r from-electric via-cyan to-electric"
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-4">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.45 }}
                className="relative"
              >
                <div className="mb-4 flex items-center gap-4 lg:block">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan/30 bg-deep-black text-lg font-bold text-cyan shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                    {item.step}
                  </div>
                  {index < steps.length - 1 ? (
                    <div className="h-12 w-px bg-gradient-to-b from-electric to-cyan lg:hidden" />
                  ) : null}
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-silver/85">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
