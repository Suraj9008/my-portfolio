export default function Footer({ name }: { name: string }) {
  return (
    <footer className="border-t border-zinc-800 py-8">
      <div className="mx-auto max-w-6xl px-5 text-sm text-zinc-400">
        © {new Date().getFullYear()} {name}. All rights reserved.
      </div>
    </footer>
  );
}
