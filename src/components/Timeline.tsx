import { motion } from "motion/react";

type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  bullets: string[];
};

type EducationItem = {
  institute: string;
  degree: string;
  duration: string;
  score?: string;
};

type TimelineItem = ExperienceItem | EducationItem;

function isEducation(item: TimelineItem): item is EducationItem {
  return "institute" in item;
}

export default function Timeline({
  id,
  title,
  items,
}: {
  id: string;
  title: string;
  items: TimelineItem[];
}) {
  return (
    <section id={id} className="py-14">
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45 }}
        className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
      >
        {title}
      </motion.h2>

      <div className="mt-8 space-y-6 border-l border-zinc-200 pl-6 dark:border-white/10">
        {items.map((it, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="
              relative rounded-2xl border border-zinc-200 bg-white/80 p-5 shadow-sm backdrop-blur
              dark:border-white/10 dark:bg-white/5
            "
          >
            {/* timeline dot */}
            <span className="absolute -left-[33px] top-6 h-4 w-4 rounded-full bg-indigo-500/70 ring-4 ring-zinc-50 dark:ring-zinc-950" />

            {/* duration */}
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {it.duration}
            </p>

            {/* title + org */}
            {isEducation(it) ? (
              <>
                <h3 className="mt-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {it.degree}
                </h3>
                <p className="mt-1 text-zinc-700 dark:text-zinc-300">
                  {it.institute}
                </p>
                {it.score && (
                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                    Score: {it.score}
                  </p>
                )}
              </>
            ) : (
              <>
                <h3 className="mt-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {it.role}
                </h3>
                <p className="mt-1 text-zinc-700 dark:text-zinc-300">
                  {it.company}
                </p>
              </>
            )}

            {/* bullets only if present */}
            {"bullets" in it && it.bullets?.length > 0 && (
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                {it.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}

            {/* subtle accent */}
            <span className="mt-5 block h-1 w-10 rounded-full bg-indigo-500/60 opacity-60" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
