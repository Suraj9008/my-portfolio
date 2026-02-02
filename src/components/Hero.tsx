import { motion } from "motion/react";

type HeroProps = {
  data: {
    name: string;
    role: string;
    location: string;
    summary: string;
  };
};

export default function Hero({ data }: HeroProps) {
  return (
    <section id="home" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          rounded-3xl border border-zinc-200 bg-white/80 p-8 shadow-sm backdrop-blur
          md:p-12
          dark:border-white/10 dark:bg-white/5
        "
      >
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-sm text-zinc-500 dark:text-zinc-400"
        >
          Hello, I’m
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.45 }}
          className="
            mt-2 text-4xl font-bold tracking-tight text-zinc-900
            md:text-6xl
            dark:text-zinc-100
          "
        >
          {data.name}
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.45 }}
          className="
            mt-3 text-lg text-zinc-700
            md:text-xl
            dark:text-zinc-300
          "
        >
          {data.role} • {data.location}
        </motion.p>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="
            mt-6 max-w-2xl leading-relaxed
            text-zinc-700
            dark:text-zinc-300
          "
        >
          {data.summary}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="
              rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white
              shadow-sm hover:bg-indigo-500
            "
          >
            Hire Me
          </a>

          <a
            href="#projects"
            className="
              rounded-2xl border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold
              text-zinc-900 hover:bg-zinc-50
              dark:border-white/15 dark:bg-white/10 dark:text-zinc-100 dark:hover:bg-white/15
            "
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="
              text-sm font-medium text-zinc-600 hover:text-zinc-900
              dark:text-zinc-400 dark:hover:text-zinc-100
            "
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
