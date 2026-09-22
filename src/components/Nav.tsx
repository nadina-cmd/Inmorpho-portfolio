"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-6 md:px-12">
      <Link href="/" className="font-display text-xl tracking-wide">
        INMORPHO
      </Link>
      <nav className="flex items-center gap-6 text-sm uppercase tracking-widest text-[var(--muted)]">
        <a href="#work" className="transition-colors hover:text-[var(--foreground)]">
          Работы
        </a>
        <Link
          href="/interiors"
          data-hover
          className="opacity-60 transition-colors hover:text-[var(--foreground)] hover:opacity-100"
        >
          Интерьеры
        </Link>
        <a
          href="mailto:nadina@inmorphostudio.com"
          className="transition-colors hover:text-[var(--foreground)]"
        >
          Контакт
        </a>
      </nav>
    </header>
  );
}
