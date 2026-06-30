"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";
import { type ReactNode, useRef } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  hover3d?: boolean;
};

export function Card({ children, className, hover3d = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={cn(
        "glass-card relative overflow-hidden rounded-3xl p-6 md:p-8",
        className
      )}
      onMouseMove={(e) => {
        if (!hover3d || reduceMotion || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        ref.current.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
      }}
      onMouseLeave={() => {
        if (!ref.current) return;
        ref.current.style.transform = "";
      }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-orange/5 via-transparent to-blue/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      {children}
    </motion.div>
  );
}
