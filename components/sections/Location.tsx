"use client";

import { businessData } from "@/lib/business-data";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Section } from "@/components/ui/Section";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export function Location() {
  const reduceMotion = useReducedMotion();

  return (
    <Section
      id="location"
      eyebrow="איך מגיעים"
      title="מרכז ספיר, גבעת שאול, ירושלים"
      subtitle="פרטי מיקום לפי מידע ציבורי"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-card rounded-3xl p-8">
            <div className="mb-6 inline-flex rounded-2xl bg-orange/15 p-4 text-orange">
              <MapPin className="h-8 w-8" aria-hidden="true" />
            </div>
            <address className="not-italic">
              <p className="text-2xl font-bold text-off-white md:text-3xl">
                {businessData.address.full}
              </p>
              <p className="mt-3 text-concrete/70">
                {businessData.address.neighborhood}, {businessData.address.city}
              </p>
            </address>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <MagneticButton
                href={businessData.directions.url}
                variant="primary"
                aria-label="ניווט למכון ב-Google Maps"
              >
                <MapPin className="h-5 w-5" aria-hidden="true" />
                {businessData.directions.label}
              </MagneticButton>
              <MagneticButton
                href={`tel:${businessData.phone.tel}`}
                variant="secondary"
                aria-label="התקשר עכשיו"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                {businessData.phone.display}
              </MagneticButton>
              <MagneticButton
                href={businessData.whatsapp.url}
                variant="ghost"
                aria-label="שליחת WhatsApp"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                WhatsApp
              </MagneticButton>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-graphite"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="hero-glow absolute inset-0" aria-hidden="true" />
          <div className="relative flex h-full min-h-[280px] flex-col items-center justify-center p-8 text-center">
            <div className="mb-6 h-32 w-32 rounded-full border-2 border-dashed border-orange/30 p-4">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-orange/10">
                <MapPin className="h-10 w-10 text-orange" aria-hidden="true" />
              </div>
            </div>
            <p className="text-lg font-semibold text-off-white">גבעת שאול, ירושלים</p>
            <p className="mt-2 text-sm text-concrete/60">
              מפת מיקום מדויקת — פרטים נוספים יתווספו בקרוב
            </p>
            <a
              href={businessData.directions.url}
              className="mt-6 text-sm font-medium text-amber underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              פתיחה ב-Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
