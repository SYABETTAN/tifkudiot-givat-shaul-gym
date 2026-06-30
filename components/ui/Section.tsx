"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";
import { type ReactNode } from "react";

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
  light?: boolean;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
};

export function Section({
  id,
  children,
  className,
  light = false,
  eyebrow,
  title,
  subtitle,
}: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id={id}
      className={cn(
        light ? "section-light" : "section-dark",
        "relative overflow-hidden py-20 md:py-28",
        className
      )}
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {(eyebrow || title || subtitle) && (
          <motion.div
            className="mb-12 max-w-3xl"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {eyebrow && (
              <p
                className={cn(
                  "mb-3 text-sm font-semibold tracking-wide",
                  light ? "text-orange" : "text-amber"
                )}
              >
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                className={cn(
                  "text-3xl font-bold leading-tight md:text-4xl lg:text-5xl",
                  light ? "text-navy" : "text-off-white"
                )}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={cn(
                  "mt-4 text-lg leading-relaxed md:text-xl",
                  light ? "text-graphite/80" : "text-concrete/80"
                )}
              >
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
