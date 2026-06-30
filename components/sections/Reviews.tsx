"use client";

import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { Quote, Star } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const publicReviewPoints = ["מתאים לציבור דתי", "מתקנים מעניינים"];

const siteChecklist = [
  "שעות פעילות מעודכנות",
  "סוגי אימונים",
  "תמונות אמיתיות מהמקום",
  "אפשרות לקביעת אימון ניסיון",
  "שאלות ותשובות",
  "חיבור מהיר ל-WhatsApp",
];

export function Reviews() {
  const reduceMotion = useReducedMotion();

  return (
    <Section
      id="reviews"
      eyebrow="מה אנשים מחפשים"
      title="מה אנשים מחפשים במקום כזה?"
      subtitle="מקום נוח, אימון ברור, מתקנים מעניינים ואווירה שמתאימה לאנשים שרוצים לזוז באמת."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card hover3d={false}>
            <Quote className="mb-4 h-8 w-8 text-orange/60" aria-hidden="true" />
            <p className="text-lg leading-relaxed text-concrete/85">
              מקום שבו אפשר להרגיש בנוח, לזוז בצורה ברורה, ולגלות מתקנים שמעניינים — בלי לחץ מיותר.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {publicReviewPoints.map((point) => (
                <span
                  key={point}
                  className="inline-flex items-center gap-1.5 rounded-full bg-orange/15 px-3 py-1.5 text-sm font-medium text-amber"
                >
                  <Star className="h-3.5 w-3.5" aria-hidden="true" />
                  {point}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-concrete/50">מתוך ביקורת ציבורית</p>
          </Card>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="mb-4 text-xl font-bold text-off-white">
            מה חשוב להציג באתר הרשמי?
          </h3>
          <ul className="space-y-3">
            {siteChecklist.map((item, index) => (
              <motion.li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/5 px-4 py-3 text-concrete/85"
                initial={reduceMotion ? false : { opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange/20 text-xs font-bold text-orange">
                  {index + 1}
                </span>
                {item}
              </motion.li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-concrete/50">
            פרטים נוספים יתווספו בקרוב
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
