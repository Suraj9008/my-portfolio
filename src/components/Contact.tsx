import { motion } from "motion/react";

type ContactData = {
  address: string;
  phone: string;
  email: string;
};

type ContactProps = {
  data: ContactData;
};

export default function Contact({ data }: ContactProps) {
  return (
    <section id="contact" className="py-14">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45 }}
        className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
      >
        Get In Touch
      </motion.h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="
            rounded-3xl border border-zinc-200 bg-white/80 p-6 shadow-sm backdrop-blur
            dark:border-white/10 dark:bg-white/5
          "
        >
          <p className="text-zinc-700 dark:text-zinc-300">
            <span className="font-medium text-zinc-900 dark:text-zinc-100">
              Address:
            </span>{" "}
            {data.address}
          </p>

          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            <span className="font-medium text-zinc-900 dark:text-zinc-100">
              Phone:
            </span>{" "}
            <a
              href={`tel:${data.phone}`}
              className="hover:underline"
            >
              {data.phone}
            </a>
          </p>

          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            <span className="font-medium text-zinc-900 dark:text-zinc-100">
              Email:
            </span>{" "}
            <a
              href={`mailto:${data.email}`}
              className="hover:underline"
            >
              {data.email}
            </a>
          </p>
        </motion.div>

        {/* Contact Form (UI only) */}
        <motion.form
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          onSubmit={(e) => e.preventDefault()}
          className="
            rounded-3xl border border-zinc-200 bg-white/80 p-6 shadow-sm backdrop-blur
            dark:border-white/10 dark:bg-white/5
          "
        >
          <input
            className="
              w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm
              outline-none focus:border-indigo-500
              dark:border-white/15 dark:bg-zinc-950 dark:text-zinc-100
            "
            placeholder="Your Name"
          />

          <input
            className="
              mt-3 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm
              outline-none focus:border-indigo-500
              dark:border-white/15 dark:bg-zinc-950 dark:text-zinc-100
            "
            placeholder="Your Email"
          />

          <textarea
            className="
              mt-3 h-28 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm
              outline-none focus:border-indigo-500
              dark:border-white/15 dark:bg-zinc-950 dark:text-zinc-100
            "
            placeholder="Message"
          />

          <button
            type="submit"
            className="
              mt-4 w-full rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white
              hover:bg-indigo-500
            "
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
