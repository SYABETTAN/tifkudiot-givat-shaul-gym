"use client";

import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { Dumbbell, MapPin, Shield, Target } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const cards = [
  {
    icon: Target,
    title: "אימון פונקציונלי ומעשי",
    description: "תנועה שמחזקת את הגוף ליומיום — לא רק למכון.",
  },
  {
    icon: MapPin,
    title: "מיקום נוח בגבעת שאול",
    description: "מרכז ספיר, ירושלים — קרוב לבית ולעבודה.",
  },
  {
    icon: Dumbbell,
    title: "תנועה, כוח ויציבות",
    description: "שילוב של חיזוק, שליטה וטווח תנועה בגישה ברורה.",
  },
  {
    icon: Shield,
    title: "מתאים למי שרוצה מסגרת ברורה",
    description: "אימון מובנה, בלי להרגיש אבוד — צעד אחר צעד.",
  },
];

export function WhyTifkudiot() {
  const reduceMotion = useReducedMotion();

  return (
    <Section
      id="why"
      eyebrow="למה תיפקודיות"
      title="כושר שמרגישים גם מחוץ למכון"
      subtitle="לא רק עוד אימון. תנועה חכמה, חיזוק הדרגתי ושגרה שעוזרת לגוף לעבוד טוב יותר."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="group h-full">
              <div className="mb-5 inline-flex rounded-2xl bg-orange/15 p-3 text-orange">
                <card.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-off-white">{card.title}</h3>
              <p className="mt-3 leading-relaxed text-concrete/75">
                {card.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
