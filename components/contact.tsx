import { GhostButton } from "@/components/ghost-button";
import { mailtoHref, site } from "@/lib/site";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-line px-6 py-24 text-center md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="contact-heading"
          className="font-display text-4xl leading-tight font-light text-balance text-foreground italic md:text-6xl"
        >
          Let’s talk about what’s next.
        </h2>

        <div className="mt-12">
          <GhostButton href={mailtoHref()}>Contact</GhostButton>
        </div>

        <div className="mt-16 flex flex-col items-center gap-3">
          <p className="font-display text-2xl font-light">{site.principal}</p>
          <p className="text-[11px] tracking-[0.28em] text-faint uppercase">
            {site.title}
          </p>
          <address className="mt-4 flex flex-col items-center gap-2 not-italic text-sm tracking-wide text-muted">
            <a
              href={mailtoHref()}
              className="transition-colors hover:text-foreground"
            >
              {site.email}
            </a>
            <a
              href={site.phoneHref}
              className="transition-colors hover:text-foreground"
            >
              {site.phone}
            </a>
            <a
              href={site.url}
              className="transition-colors hover:text-foreground"
            >
              {site.domain}
            </a>
          </address>
        </div>
      </div>
    </section>
  );
}
