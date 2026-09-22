"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const LINES = ["AI-ВИДЕО", "ДЛЯ БРЕНДОВ"];

export default function Hero() {
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const subRef = useRef<HTMLParagraphElement>(null);
  const cueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const play = () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.fromTo(
        lineRefs.current,
        { yPercent: 110 },
        { yPercent: 0, duration: 1.1, stagger: 0.12 }
      )
        .fromTo(
          subRef.current,
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          cueRef.current,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.6 },
          "-=0.3"
        );
    };

    window.addEventListener("preloader-done", play);
    return () => window.removeEventListener("preloader-done", play);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 md:px-12">
      <h1 className="font-display leading-[0.9] text-[clamp(3rem,11vw,9rem)] text-[var(--foreground)]">
        {LINES.map((line, i) => (
          <span key={line} className="split-line">
            <span
              ref={(el) => {
                lineRefs.current[i] = el;
              }}
              className="block"
            >
              {line}
            </span>
          </span>
        ))}
      </h1>
      <p
        ref={subRef}
        className="mt-8 max-w-md text-base leading-relaxed text-[var(--muted)] md:text-lg"
      >
        Кинематографичные фешн-ролики и нарративные короткометражки для
        Reels, Shorts и TikTok. От сценария до готового кадра — на нейросетях.
      </p>
      <div
        ref={cueRef}
        className="absolute bottom-10 left-6 flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--muted)] md:left-12"
      >
        <span className="h-px w-8 bg-[var(--muted)]" />
        Скролл
      </div>
    </section>
  );
}
