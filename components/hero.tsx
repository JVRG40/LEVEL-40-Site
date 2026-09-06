import { GhostButton } from "@/components/ghost-button";
import { Tagline, Wordmark } from "@/components/wordmark";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-wordmark"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6 text-center"
    >
      <div className="flex flex-col items-center">
        <h1 id="hero-wordmark" className="rise">
          <Wordmark
            as="span"
            className="block text-[18vw] leading-none md:text-[9.5rem] lg:text-[11rem]"
          />
          <span className="sr-only"> — {site.tagline}</span>
        </h1>
        <Tagline className="rise rise-1 mt-7 text-foreground" />
        <p className="rise rise-2 mx-auto mt-10 max-w-md font-display text-xl leading-snug font-light text-balance text-muted md:text-2xl">
          {site.headline}
        </p>
        <div className="rise rise-3 mt-12">
          <GhostButton href="#about">Learn more</GhostButton>
        </div>
      </div>
    </section>
  );
}
