"use client";

import { useEffect, useState } from "react";
import { Wordmark } from "@/components/wordmark";
import { nav } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color] duration-300 ${
        scrolled
          ? "border-b border-line bg-background/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:h-20 md:px-10">
        <a href="#top" aria-label="LEVEL40 home">
          <Wordmark className="text-lg md:text-xl" />
        </a>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-5 sm:gap-8 md:gap-10">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[10px] tracking-[0.28em] text-foreground/80 uppercase transition-colors duration-200 hover:text-foreground sm:text-[11px]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
