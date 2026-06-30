"use client";

import { Section } from "@/components/ui/Section";
import { CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const audience = [
  "מי שלא יודע איך להתחיל",
  "מי שחוזר לכושר אחרי תקופה",
  "מי שרוצה להתחזק בלי להרגיש אבוד",
  "מי שמחפש אימון פרקטי ולא רק מכשירים",
  "מי שגר או עובד באזור גבעת שאול",
  "ציבור דתי/מסורתי שמחפש מקום נוח ומכבד",
];

export function ForWho() {
  const reduceMotion = useReducedMotion();

  return (
    <Section
      id="for-who"
      light
      eyebrow="למי זה מתאים"
      title="אימון שמתחיל מהצורך שלך — לא מתבנית קבועה"
      subtitle="תיפקודיות מתאים לאנשים שרוצים לזוז, להתחזק ולבנות שגרה — בלי לחץ מיותר."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {audience.map((item, index) => (
          <motion.div
            key={item}
            className="flex items-start gap-3 rounded-2xl border border-navy/8 bg-white/70 p-5"
            initial={reduceMotion ? false : { opacity: 0, x: index % 2 === 0 ? -16 : 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange" aria-hidden="true" />
            <p className="font-medium text-navy">{item}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-8 rounded-2xl border border-olive/20 bg-olive/10 p-5 md:p-6"
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-sm leading-relaxed text-graphite/80 md:text-base">
          <strong className="text-navy">לפי מידע ציבורי,</strong> המקום מתאים גם לציבור דתי. מומלץ לוודא ישירות מול המקום את הפרטים הרלוונטיים.
        </p>
      </motion.div>
    </Section>
  );
}
