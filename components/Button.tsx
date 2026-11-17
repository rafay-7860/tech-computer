"use client";

import { cn } from "@/lib/utils";
import type { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
};

export function Button({
  children,
  variant = "primary",
  href,
  className,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-deep-black disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0",
    variant === "primary" &&
      "bg-gradient-to-r from-electric to-cyan text-white shadow-[0_10px_30px_rgba(22,119,255,0.35)] hover:shadow-[0_14px_40px_rgba(34,211,238,0.35)]",
    variant === "secondary" &&
      "glass text-white hover:border-cyan/40 hover:bg-white/10",
    variant === "ghost" && "bg-transparent text-silver hover:text-white",
    className
  );

  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={styles}
        onClick={onClick}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={styles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
