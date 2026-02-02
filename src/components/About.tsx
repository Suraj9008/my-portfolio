import { motion } from "motion/react";

type AboutProps = {
  data: {
    summary: string;
    links: {
      github: string;
      linkedin: string;
    };
  };
};

export default function About({ data }: AboutProps) {
  return (
    <section id="about" className="py-14">
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45 }}
        className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="
          mt-7 rounded-3xl border border-zinc-200 bg-white/80 p-6 shadow-sm backdrop-blur
          dark:border-white/10 dark:bg-white/5
        "
      >
        <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">
          {data.summary}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
          <a
            href={data.links.github}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 py-2
              font-medium text-zinc-900 shadow-sm hover:bg-zinc-50
              dark:border-white/15 dark:bg-white/10 dark:text-zinc-100 dark:hover:bg-white/15
            "
          >
            GitHub
          </a>

          <a
            href={data.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 py-2
              font-medium text-zinc-900 shadow-sm hover:bg-zinc-50
              dark:border-white/15 dark:bg-white/10 dark:text-zinc-100 dark:hover:bg-white/15
            "
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
