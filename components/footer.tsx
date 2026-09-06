import { Wordmark } from "@/components/wordmark";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="overflow-hidden px-6 pt-8 pb-16 text-center md:px-10">
      <Wordmark
        as="p"
        className="text-[18vw] leading-none text-foreground/[0.06] select-none md:text-[8rem]"
      />
      <p className="mt-6 text-[10px] tracking-[0.28em] text-faint uppercase">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  );
}
