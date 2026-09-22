import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Интерьеры — Inmorpho",
  description: "Раздел о дизайне интерьеров скоро откроется.",
};

export default function InteriorsPage() {
  return (
    <div className="flex min-h-screen flex-1 flex-col bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <span className="text-xs uppercase tracking-widest text-[var(--accent)]">
          Скоро
        </span>
        <h1 className="font-display mt-4 text-[clamp(2.5rem,8vw,6rem)] leading-none">
          ИНТЕРЬЕРЫ
        </h1>
        <p className="mt-6 max-w-md text-[var(--muted)]">
          Раздел с проектами по дизайну интерьера в разработке. А пока
          посмотрите работы по AI-видео.
        </p>
        <Link
          href="/"
          data-hover
          className="mt-8 text-sm uppercase tracking-widest text-[var(--accent)] underline underline-offset-4"
        >
          На главную
        </Link>
      </main>
    </div>
  );
}
