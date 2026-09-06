type GhostButtonProps = {
  href: string;
  children: React.ReactNode;
  invert?: boolean;
  className?: string;
};

export function GhostButton({
  href,
  children,
  invert = false,
  className = "",
}: GhostButtonProps) {
  const tone = invert
    ? "border-ink text-ink hover:bg-ink hover:text-cream"
    : "border-foreground text-foreground hover:bg-foreground hover:text-background";

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center border px-10 py-3 text-[11px] tracking-[0.32em] uppercase transition-colors duration-300 ${tone} ${className}`}
    >
      {children}
    </a>
  );
}
