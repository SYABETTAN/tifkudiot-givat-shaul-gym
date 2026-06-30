"use client";

import { businessData } from "@/lib/business-data";
import { Section } from "@/components/ui/Section";
import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

const faqs = [
  {
    question: "איפה תיפקודיות נמצא?",
    answer: "במרכז ספיר, באזור גבעת שאול בירושלים, לפי המידע הציבורי.",
  },
  {
    question: "איך יוצרים קשר?",
    answer: `אפשר להתקשר למספר ${businessData.phone.display} או לשלוח WhatsApp.`,
  },
  {
    question: "האם זה מכון כושר רגיל?",
    answer:
      "השם והמידע הציבורי מצביעים על דגש פונקציונלי — תנועה, כוח ותפקוד. את סוגי האימונים המדויקים כדאי לאשר מול המקום.",
  },
  {
    question: "האם המקום מתאים לציבור דתי?",
    answer:
      "באחת הביקורות הציבוריות צוין שהמקום מתאים לציבור דתי, אך מומלץ לוודא ישירות מול המקום את הפרטים הרלוונטיים.",
  },
  {
    question: "האם יש שעות פעילות?",
    answer:
      "קיימים פרטים ציבוריים, אך כדי לא להציג מידע לא מדויק, מומלץ לאשר את שעות הפעילות ישירות מול המקום.",
  },
  {
    question: "האם האתר הזה רשמי?",
    answer:
      "לא. זו הדגמה ראשונית שנבנתה על בסיס מידע ציבורי בלבד וניתן להפוך אותה לאתר רשמי לאחר אישור בעל העסק.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  return (
    <Section
      id="faq"
      light
      eyebrow="שאלות נפוצות"
      title="יש שאלה? הנה תשובות בסיסיות"
    >
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-navy/8 bg-white shadow-sm"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-right font-semibold text-navy transition-colors hover:bg-navy/5"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                {faq.question}
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-orange transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-4 leading-relaxed text-graphite/80">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
