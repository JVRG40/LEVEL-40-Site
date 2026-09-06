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
  return (
    <a
      href={href}
      className={`ghost-btn ${invert ? "ghost-btn-invert border-ink text-ink" : "text-foreground"} ${className}`}
    >
      {children}
    </a>
  );
}
