"use client";

import dynamic from "next/dynamic";
import { businessData } from "@/lib/business-data";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { MapPin, MessageCircle, Phone, ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const FunctionalMotionScene = dynamic(
  () =>
    import("@/components/three/FunctionalMotionScene").then(
      (mod) => mod.FunctionalMotionScene
    ),
  { ssr: false, loading: () => <div className="hero-glow absolute inset-0 rounded-[2rem] border border-white/10" /> }
);

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-navy pb-24 pt-8 md:pb-16">
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="concrete-texture pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[calc(100svh-6rem)] max-w-6xl flex-col justify-center px-5 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.p
              className="mb-4 text-sm font-semibold tracking-wide text-amber"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {businessData.tagline}
            </motion.p>

            <motion.h1
              className="text-5xl font-black leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="gradient-text block">{businessData.name}</span>
              <span className="mt-2 block text-2xl font-bold text-concrete md:text-3xl">
                {businessData.tagline}
              </span>
            </motion.h1>

            <motion.p
              className="mt-3 text-lg text-olive md:text-xl"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              אימון פונקציונלי בירושלים
            </motion.p>

            <motion.p
              className="mt-6 max-w-xl text-xl leading-relaxed text-off-white/90 md:text-2xl"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              אימון פונקציונלי בגבעת שאול — לזוז טוב יותר, להתחזק נכון ולהחזיר לגוף תחושה של שליטה.
            </motion.p>

            <motion.p
              className="mt-4 max-w-xl text-base leading-relaxed text-concrete/75 md:text-lg"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              תיפקודיות הוא מקום לאנשים שרוצים אימון חכם, ברור ומעשי — כזה שמחזק את הגוף לא רק למכון, אלא לחיים עצמם.
            </motion.p>

            <motion.p
              className="mt-4 flex items-center gap-2 text-sm text-concrete/60"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <MapPin className="h-4 w-4 text-orange" aria-hidden="true" />
              {businessData.address.full}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <MagneticButton
                href={businessData.whatsapp.url}
                variant="primary"
                size="lg"
                aria-label="שליחת WhatsApp"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                {businessData.whatsapp.label}
              </MagneticButton>
              <MagneticButton
                href={`tel:${businessData.phone.tel}`}
                variant="secondary"
                size="lg"
                aria-label="התקשר עכשיו"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                התקשר עכשיו
              </MagneticButton>
              <MagneticButton
                href={businessData.directions.url}
                variant="ghost"
                size="lg"
                aria-label="ניווט למכון"
              >
                <MapPin className="h-5 w-5" aria-hidden="true" />
                {businessData.directions.label}
              </MagneticButton>
            </motion.div>
          </div>

          <motion.div
            className="relative aspect-square w-full max-w-lg justify-self-center lg:max-w-none"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <FunctionalMotionScene />
            <div className="pointer-events-none absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-orange/20 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute -left-4 -top-4 h-20 w-20 rounded-full bg-blue/15 blur-3xl" aria-hidden="true" />
          </motion.div>
        </div>

        <motion.a
          href="#why"
          className="mt-12 flex flex-col items-center gap-2 text-concrete/50 transition-colors hover:text-orange md:mt-16"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          aria-label="גלול למטה"
        >
          <span className="text-xs tracking-widest">גלול</span>
          <ChevronDown className="scroll-cue h-6 w-6" aria-hidden="true" />
        </motion.a>
      </div>
    </section>
  );
}
