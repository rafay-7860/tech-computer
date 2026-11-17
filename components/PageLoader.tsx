"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const timer = window.setTimeout(
      () => setVisible(false),
      prefersReduced ? 200 : 1600
    );

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-deep-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="relative flex flex-col items-center gap-6">
            <div className="absolute inset-0 -z-10 blur-3xl">
              <div className="mx-auto h-40 w-40 rounded-full bg-electric/30" />
            </div>

            <svg className="loader-ring h-20 w-20" viewBox="0 0 50 50">
              <circle
                className="loader-path"
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke="url(#loaderGradient)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="loaderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1677FF" />
                  <stop offset="100%" stopColor="#22D3EE" />
                </linearGradient>
              </defs>
            </svg>

            <div className="text-center">
              <p className="font-[family-name:var(--font-display)] text-lg tracking-[0.28em] text-white">
                TECH<span className="text-cyan">971</span>
              </p>
              <p className="mt-2 text-xs tracking-[0.22em] text-silver/70">
                INITIALIZING REPAIR SYSTEMS
              </p>
              <div className="mx-auto mt-4 h-px w-40 shimmer-line rounded-full" />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
