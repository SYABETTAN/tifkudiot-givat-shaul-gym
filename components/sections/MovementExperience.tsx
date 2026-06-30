"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const scenes = [
  {
    step: "01",
    title: "להבין את הגוף",
    text: "מתחילים ממה שהגוף שלך צריך עכשיו.",
    accent: "from-orange/20 to-transparent",
    glow: "bg-orange/30",
  },
  {
    step: "02",
    title: "לבנות בסיס",
    text: "בונים יציבות, טווח תנועה ושליטה.",
    accent: "from-blue/20 to-transparent",
    glow: "bg-blue/25",
  },
  {
    step: "03",
    title: "להתחזק בהדרגה",
    text: "מחזקים בלי למהר ובלי לקפוץ מעל שלבים.",
    accent: "from-amber/20 to-transparent",
    glow: "bg-amber/25",
  },
  {
    step: "04",
    title: "להפוך את זה לשגרה",
    text: "יוצרים שגרה שאפשר באמת להתמיד בה.",
    accent: "from-olive/20 to-transparent",
    glow: "bg-olive/20",
  },
];

export function MovementExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="movement"
      ref={containerRef}
      className="relative bg-navy"
      aria-label="הדרך לתנועה טובה יותר"
    >
      <div className="sticky top-0 flex min-h-[100svh] flex-col justify-center overflow-hidden py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="mb-3 text-sm font-semibold text-amber">הדרך לתנועה טובה יותר</p>
          <h2 className="max-w-2xl text-3xl font-bold text-off-white md:text-5xl">
            ארבעה שלבים. תנועה אחת ברורה.
          </h2>
        </div>

        <div className="relative mt-12">
          {scenes.map((scene, index) => {
            const start = index / scenes.length;
            const end = (index + 1) / scenes.length;

            return (
              <ScenePanel
                key={scene.step}
                scene={scene}
                start={start}
                end={end}
                scrollYProgress={scrollYProgress}
                reduceMotion={!!reduceMotion}
              />
            );
          })}
        </div>

        <motion.div
          className={`mx-auto mt-8 h-1 w-48 overflow-hidden rounded-full bg-white/10 ${reduceMotion ? "opacity-0" : ""}`}
          aria-hidden="true"
        >
          <motion.div
            className="h-full origin-right bg-gradient-to-l from-orange to-amber"
            style={{ scaleX: progressScale }}
          />
        </motion.div>
      </div>

      <div className="h-[300vh]" aria-hidden="true" />
    </section>
  );
}

function ScenePanel({
  scene,
  start,
  end,
  scrollYProgress,
  reduceMotion,
}: {
  scene: (typeof scenes)[number];
  start: number;
  end: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  reduceMotion: boolean;
}) {
  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.05, end - 0.05, end],
    reduceMotion ? [1, 1, 1, 1] : [0, 1, 1, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [start, end],
    reduceMotion ? [0, 0] : [40, -40]
  );
  const scale = useTransform(
    scrollYProgress,
    [start, end],
    reduceMotion ? [1, 1] : [0.95, 1.02]
  );

  return (
    <motion.div
      className="absolute inset-x-0 top-0 flex items-center justify-center px-5 md:px-8"
      style={{ opacity, y, scale }}
    >
      <div className="relative mx-auto grid max-w-4xl items-center gap-8 md:grid-cols-[auto_1fr]">
        <div
          className={cn(
            "relative flex h-32 w-32 items-center justify-center rounded-full border border-white/10 md:h-40 md:w-40",
            "bg-gradient-to-br",
            scene.accent
          )}
        >
          <span className="text-4xl font-black text-off-white/20 md:text-5xl">
            {scene.step}
          </span>
          <div
            className={cn(
              "absolute inset-4 rounded-full blur-2xl",
              scene.glow
            )}
            aria-hidden="true"
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-off-white md:text-4xl">
            {scene.title}
          </h3>
          <p className="mt-4 text-lg leading-relaxed text-concrete/80 md:text-xl">
            {scene.text}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
