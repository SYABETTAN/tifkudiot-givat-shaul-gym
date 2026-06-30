"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";
import { type ReactNode, useRef } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  "aria-label"?: string;
};

const variantStyles = {
  primary: "bg-orange text-white hover:bg-amber border-orange/30",
  secondary: "bg-blue text-white hover:bg-blue/90 border-blue/30",
  ghost: "bg-white/5 text-off-white hover:bg-white/10 border-white/10",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-base",
  lg: "px-6 py-3.5 text-base",
};

export function MagneticButton({
  href,
  children,
  className,
  variant = "primary",
  size = "md",
  "aria-label": ariaLabel,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      ref={ref}
      href={href}
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border font-semibold shadow-lg transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-navy",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      whileHover={reduceMotion ? undefined : { scale: 1.03 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      onMouseMove={(e) => {
        if (reduceMotion || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        ref.current.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
      }}
      onMouseLeave={() => {
        if (!ref.current) return;
        ref.current.style.transform = "";
      }}
    >
      {children}
    </motion.a>
  );
}
