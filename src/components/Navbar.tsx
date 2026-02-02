type NavbarProps = {
    name: string;
    theme: "light" | "dark";
    onToggleTheme: () => void;
};

export default function Navbar({ name, theme, onToggleTheme }: NavbarProps) {
    const links = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#skills", label: "Skills" },
        { href: "#experience", label: "Experience" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-zinc-950/70">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
                <a
                    href="#home"
                    className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
                >
                    {name}
                </a>

                <div className="flex items-center gap-4">
                    <nav className="hidden gap-6 md:flex">
                        {links.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                            >
                                {l.label}
                            </a>
                        ))}
                    </nav>

                    <button
                        onClick={onToggleTheme}
                        aria-label="Toggle theme"
                        className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm hover:bg-zinc-50 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:hover:bg-white/10"
                    >
                        {theme === "dark" ? "🌙" : "☀️"}
                    </button>
                </div>
            </div>
        </header>
    );
}
