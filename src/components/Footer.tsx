export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-16 md:px-12">
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-tight">
            ЕСТЬ ИДЕЯ
            <br />
            ДЛЯ РОЛИКА?
          </h2>
          <a
            href="mailto:nadina@inmorphostudio.com"
            data-hover
            className="mt-4 inline-block text-lg text-[var(--accent)] underline underline-offset-4"
          >
            nadina@inmorphostudio.com
          </a>
        </div>
        <div className="text-sm text-[var(--muted)]">
          <p>© {new Date().getFullYear()} Inmorpho</p>
          <p className="mt-1">Раздел «Интерьеры» — скоро</p>
        </div>
      </div>
    </footer>
  );
}
