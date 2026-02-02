import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

type StatItem = {
  label: string;
  value: string; // e.g. "3+", "5+", "Computop"
};

type StatsProps = {
  items: StatItem[];
};

/**
 * Extracts numeric part from a value like "3+", "12+", "5"
 * If value is non-numeric (e.g. "Computop"), animation is skipped.
 */
function parseNumber(value: string) {
  const match = value.match(/\d+/);
  return match ? Number(match[0]) : null;
}

export default function Stats({ items }: StatsProps) {
  return (
    <section className="py-14">
      <div className="grid gap-6 md:grid-cols-4">
        {items.map((item, idx) => (
          <StatCard key={item.label} item={item} delay={idx * 0.08} />
        ))}
      </div>
    </section>
  );
}

function StatCard({
  item,
  delay,
}: {
  item: StatItem;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const target = parseNumber(item.value);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || target === null) return;

    let current = 0;
    const duration = 900; // ms
    const stepTime = 16;
    const steps = Math.ceil(duration / stepTime);
    const increment = target / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay }}
      className="
        group rounded-3xl border border-zinc-200 bg-white/80 p-6 shadow-sm backdrop-blur
        transition-transform duration-200
        hover:-translate-y-1 hover:shadow-md
        dark:border-white/10 dark:bg-white/5
      "
    >
      <div className="flex items-baseline gap-1">
        <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          {target === null ? item.value : count}
        </div>
        {target !== null && item.value.endsWith("+") && (
          <span className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            +
          </span>
        )}
      </div>

      <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {item.label}
      </div>

      {/* subtle accent underline */}
      <span className="mt-4 block h-1 w-10 rounded-full bg-indigo-500/60 opacity-60 transition-opacity group-hover:opacity-100" />
    </motion.div>
  );
}
