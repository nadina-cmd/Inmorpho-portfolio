"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const CASES = [
  {
    id: "01",
    title: "Editorial Motion",
    tag: "Фешн-видео / Reels",
    gradient: "linear-gradient(135deg, #2a2a28, #6b5a3e)",
  },
  {
    id: "02",
    title: "Short Film — Silence",
    tag: "Нарративный ролик",
    gradient: "linear-gradient(135deg, #1c1c1c, #3f3f3f)",
  },
  {
    id: "03",
    title: "Campaign Loop",
    tag: "AI-кампания для бренда",
    gradient: "linear-gradient(135deg, #26221c, #8a7350)",
  },
  {
    id: "04",
    title: "Texture Study",
    tag: "Fashion / Street",
    gradient: "linear-gradient(135deg, #201f1d, #4a463d)",
  },
];

export default function CaseGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const cards = containerRef.current?.querySelectorAll("[data-case-card]");
    if (!cards) return;

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { autoAlpha: 0, y: 60 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section id="work" ref={containerRef} className="px-6 py-32 md:px-12">
      <div className="mb-16 flex items-end justify-between">
        <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-none">
          РАБОТЫ
        </h2>
        <span className="text-sm text-[var(--muted)]">
          {CASES.length} проекта
        </span>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {CASES.map((c) => (
          <article
            key={c.id}
            data-case-card
            data-hover
            className="group relative aspect-[4/5] overflow-hidden rounded-sm"
          >
            <div
              className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
              style={{ background: c.gradient }}
            />
            <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/30" />
            <div className="relative flex h-full flex-col justify-between p-6">
              <span className="font-display text-sm text-[var(--foreground)]/70">
                {c.id}
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-[var(--accent)]">
                  {c.tag}
                </p>
                <h3 className="font-display mt-1 text-2xl md:text-3xl">
                  {c.title}
                </h3>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
