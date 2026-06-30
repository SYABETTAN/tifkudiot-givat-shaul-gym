"use client";

import { Section } from "@/components/ui/Section";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Activity, Heart, Repeat, Zap } from "lucide-react";

const benefits = [
  { icon: ArrowUpRight, text: "לקום ולזוז בקלות רבה יותר" },
  { icon: Activity, text: "להרגיש ביטחון בתנועה" },
  { icon: Zap, text: "לחזק את הגוף בהדרגה" },
  { icon: Repeat, text: "לשפר יציבות וניידות" },
  { icon: Heart, text: "להפחית תחושת כבדות" },
  { icon: Repeat, text: "לבנות שגרה שאפשר להתמיד בה" },
];

export function FunctionalMethod() {
  const reduceMotion = useReducedMotion();

  return (
    <Section
      id="method"
      light
      eyebrow="לא רק כושר. תפקוד."
      title="תיפקודיות — כי המטרה היא לתפקד טוב יותר"
      subtitle="תיפקודיות שם במרכז את מה שחשוב באמת: איך הגוף זז, איך הוא מתחזק, ואיך בונים מסגרת שאפשר להתמיד בה."
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg leading-relaxed text-graphite/85 md:text-xl">
            המטרה היא לא רק להזיע. המטרה היא לצאת מהאימון עם גוף שמרגיש יציב יותר, חזק יותר ומוכן יותר ליומיום.
          </p>
          <p className="mt-6 text-base leading-relaxed text-graphite/70">
            זה לא עניין של הבטחות מוגזמות — אלא של אימון חכם, ברור ומעשי שמתאים לחיים האמיתיים.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((item, index) => (
            <motion.div
              key={item.text}
              className="flex items-start gap-3 rounded-2xl border border-navy/8 bg-white/60 p-4 shadow-sm"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="rounded-xl bg-orange/10 p-2 text-orange">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="text-sm font-medium leading-relaxed text-navy md:text-base">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
