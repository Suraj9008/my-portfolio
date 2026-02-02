import { motion } from "motion/react";

type SkillsProps = {
  items: {
    languages: string[];
    frontend: string[];
    backend: string[];
    databases: string[];
    architecture: string[];
    payments: string[];
    tools: string[];
  };
};

export default function Skills({ items }: SkillsProps) {
  const groups = [
    { title: "Languages", list: items.languages },
    { title: "Frontend", list: items.frontend },
    { title: "Backend", list: items.backend },
    { title: "Databases", list: items.databases },
    { title: "Architecture", list: items.architecture },
    { title: "Payments", list: items.payments },
    { title: "Tools", list: items.tools },
  ];

  return (
    <section id="skills" className="py-14">
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45 }}
        className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
      >
        Skills
      </motion.h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {groups.map((group, idx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.04 }}
            className="
              group rounded-3xl border border-zinc-200 bg-white/80 p-6 shadow-sm backdrop-blur
              transition-transform duration-200
              hover:-translate-y-1 hover:shadow-md
              dark:border-white/10 dark:bg-white/5
            "
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {group.title}
              </h3>

              {/* small accent bar */}
              <span className="h-2 w-10 rounded-full bg-indigo-500/60 opacity-60 transition-opacity group-hover:opacity-100" />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {group.list.map((skill) => (
                <span
                  key={skill}
                  className="
                    rounded-full border border-zinc-300 bg-white px-3 py-1 text-sm text-zinc-700
                    shadow-[0_1px_0_rgba(0,0,0,0.03)]
                    transition
                    hover:-translate-y-0.5 hover:border-indigo-300
                    dark:border-white/15 dark:bg-white/10 dark:text-zinc-200 dark:hover:border-white/30
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
