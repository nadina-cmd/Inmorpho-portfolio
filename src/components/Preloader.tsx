"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const [count, setCount] = useState(0);
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const counter = { value: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        window.dispatchEvent(new Event("preloader-done"));
      },
    });

    tl.to(counter, {
      value: 100,
      duration: 1.8,
      ease: "power2.inOut",
      onUpdate: () => setCount(Math.round(counter.value)),
    })
      .to(numberRef.current, { opacity: 0, duration: 0.3 })
      .to(
        panelRef.current,
        { yPercent: -100, duration: 0.9, ease: "power4.inOut" },
        "-=0.1"
      )
      .to(overlayRef.current, { autoAlpha: 0, duration: 0.01 });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[var(--background)]"
    >
      <div
        ref={panelRef}
        className="absolute inset-0 flex items-center justify-center bg-[var(--background)]"
      >
        <div
          ref={numberRef}
          className="font-display text-[clamp(4rem,12vw,9rem)] leading-none text-[var(--foreground)]"
        >
          {count}
        </div>
      </div>
    </div>
  );
}
