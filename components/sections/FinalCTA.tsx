"use client";

import { businessData } from "@/lib/business-data";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export function FinalCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-graphite to-navy py-24 md:py-32"
    >
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <motion.h2
          className="text-3xl font-black text-off-white md:text-5xl"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          רוצה להתחיל לזוז נכון יותר?
        </motion.h2>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-concrete/80 md:text-xl"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          הדרך הכי פשוטה להתחיל היא לשלוח הודעה, לשאול שאלה ולקבוע מה מתאים לך.
        </motion.p>
        <motion.p
          className="mx-auto mt-3 max-w-xl text-base text-concrete/60"
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          רוצה לבדוק אם זה מתאים לך? שיחה קצרה או הודעת WhatsApp מספיקות כדי להתחיל.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
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
    </section>
  );
}
