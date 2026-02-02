import { motion } from "motion/react";

type Project = {
  title: string;
  tag: string;
  duration?: string;
  description?: string; // in your portfolio.ts
  desc?: string;        // fallback (if some old data uses desc)
  highlights: string[];
  tech: string[];
  github?: string;
  live?: string;
};

type ProjectsProps = {
  items: Project[];
};

export default function Projects({ items }: ProjectsProps) {
  return (
    <section id="projects" className="py-14">
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45 }}
        className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
      >
        Projects
      </motion.h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {items.map((p, idx) => {
          const summary = p.description ?? p.desc ?? "";

          return (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="
                group rounded-3xl border border-zinc-200 bg-white/80 p-6 shadow-sm backdrop-blur
                transition-transform duration-200
                hover:-translate-y-1 hover:shadow-md
                dark:border-white/10 dark:bg-white/5
              "
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {p.tag}{p.duration ? ` • ${p.duration}` : ""}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    {p.title}
                  </h3>
                </div>

                {/* subtle accent dot */}
                <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-indigo-500/70 opacity-60 transition-opacity group-hover:opacity-100" />
              </div>

              {summary ? (
                <p className="mt-3 leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {summary}
                </p>
              ) : null}

              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                {p.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="
                      rounded-full border border-zinc-300 bg-white px-3 py-1 text-xs text-zinc-700
                      dark:border-white/15 dark:bg-white/10 dark:text-zinc-200
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>

              {(p.github || p.live) && (
                <div className="mt-5 flex flex-wrap gap-3">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-900
                        hover:bg-zinc-50
                        dark:border-white/15 dark:bg-white/10 dark:text-zinc-100 dark:hover:bg-white/15
                      "
                    >
                      GitHub
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white
                        hover:bg-indigo-500
                      "
                    >
                      Live
                    </a>
                  )}
                </div>
              )}
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
