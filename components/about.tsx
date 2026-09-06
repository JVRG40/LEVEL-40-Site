import { ReductionMark } from "@/components/reduction-mark";
import { about } from "@/lib/site";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-cream px-6 py-24 text-ink md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <ReductionMark className="mx-auto h-5 w-36" tone="ink" />
        <h2
          id="about-heading"
          className="mt-10 text-[11px] tracking-[0.36em] uppercase"
        >
          {about.heading}
        </h2>

        <div className="mt-10 flex flex-col gap-7">
          {about.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="font-display text-xl leading-[1.65] font-light text-ink/85 md:text-[1.45rem] md:leading-[1.7]"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <p className="mt-10 font-display text-xl leading-snug font-light text-ink md:text-2xl">
          {about.close}
        </p>

        <blockquote className="mt-14">
          <p className="font-display text-2xl leading-snug font-light text-balance text-ink italic md:text-[1.85rem]">
            {about.quote}
          </p>
          <footer className="mt-5 text-[11px] tracking-[0.28em] text-ink/50 uppercase">
            Jose Vila
          </footer>
        </blockquote>

        <p className="mx-auto mt-14 max-w-2xl text-sm leading-relaxed text-ink/65 md:text-[0.95rem] md:leading-7">
          {about.principalNote}
        </p>
      </div>
    </section>
  );
}
