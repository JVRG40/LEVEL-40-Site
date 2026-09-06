type WordmarkProps = {
  className?: string;
  as?: "p" | "span" | "div";
};

export function Wordmark({ className = "", as: Tag = "span" }: WordmarkProps) {
  return (
    <Tag
      className={`font-display font-normal tracking-[0.14em] text-current uppercase ${className}`}
    >
      LEVEL40
    </Tag>
  );
}

export function Tagline({ className = "" }: { className?: string }) {
  return (
    <p
      className={`text-[10px] tracking-[0.42em] text-current uppercase sm:text-[11px] ${className}`}
    >
      Where Vision Meets Execution
    </p>
  );
}
