import { useEffect, useState } from "react";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Stats from "./components/Stats";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { portfolio } from "./data/portfolio";

type Theme = "light" | "dark";

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    return saved ?? (document.documentElement.classList.contains("dark") ? "dark" : "light");
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div
      className="
        min-h-screen
        bg-[radial-gradient(60rem_60rem_at_20%_-10%,rgba(99,102,241,0.16),transparent),radial-gradient(55rem_55rem_at_90%_10%,rgba(236,72,153,0.12),transparent),radial-gradient(55rem_55rem_at_40%_110%,rgba(34,197,94,0.10),transparent)]
        bg-zinc-50 text-zinc-900
        dark:bg-[radial-gradient(60rem_60rem_at_20%_-10%,rgba(99,102,241,0.22),transparent),radial-gradient(55rem_55rem_at_90%_10%,rgba(236,72,153,0.16),transparent),radial-gradient(55rem_55rem_at_40%_110%,rgba(34,197,94,0.12),transparent)]
        dark:bg-zinc-950 dark:text-zinc-100
      "
    >
      {/* animated background blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <Navbar name={portfolio.name} theme={theme} onToggleTheme={toggleTheme} />

      <main className="mx-auto max-w-6xl px-5">
        <Hero data={portfolio} />
        <About data={portfolio} />
        <Skills items={portfolio.skills} />
        <Stats items={portfolio.stats} />
        <Timeline id="experience" title="Experience" items={portfolio.experience} />
        <Timeline id="education" title="Education" items={portfolio.education} />
        <Projects items={portfolio.projects} />
        <Contact data={portfolio.contact} />
      </main>

      <Footer name={portfolio.name} />
    </div>
  );
}
