"use client";

import { businessData } from "@/lib/business-data";
import { Section } from "@/components/ui/Section";
import {
  Dumbbell,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Building2,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const badges = [
  { icon: Building2, label: "מכון כושר" },
  { icon: Dumbbell, label: "אימון פונקציונלי" },
  { icon: MapPin, label: "מרכז ספיר" },
  { icon: MapPin, label: "גבעת שאול" },
  { icon: Phone, label: "טלפון זמין", href: `tel:${businessData.phone.tel}` },
  { icon: MessageCircle, label: "WhatsApp", href: businessData.whatsapp.url },
  { icon: Navigation, label: "ניווט מהיר", href: businessData.directions.url },
];

export function PracticalInfo() {
  const reduceMotion = useReducedMotion();

  return (
    <Section
      id="info"
      light
      eyebrow="מידע מעשי"
      title="כל מה שצריך כדי ליצור קשר"
      subtitle="פרטים בסיסיים על בסיס מידע ציבורי — ללא הבטחות שלא אושרו."
    >
      <div className="flex flex-wrap gap-3">
        {badges.map((badge, index) => {
          const content = (
            <>
              <badge.icon className="h-4 w-4 text-orange" aria-hidden="true" />
              {badge.label}
            </>
          );

          return (
            <motion.div
              key={badge.label}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              {badge.href ? (
                <a
                  href={badge.href}
                  className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-4 py-2.5 text-sm font-semibold text-navy shadow-sm transition-all hover:border-orange/30 hover:shadow-md"
                >
                  {content}
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-4 py-2.5 text-sm font-semibold text-navy shadow-sm">
                  {content}
                </span>
              )}
            </motion.div>
          );
        })}
      </div>

      <motion.p
        className="mt-8 text-sm text-graphite/60"
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        שעות פעילות, מחירים ופרטים נוספים — פרטים נוספים יתווספו בקרוב
      </motion.p>
    </Section>
  );
}
