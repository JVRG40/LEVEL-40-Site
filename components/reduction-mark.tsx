export function ReductionMark({
  className = "",
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "cream";
}) {
  const stroke = tone === "ink" ? "#0a0a0a" : "#e0ddd5";

  return (
    <svg
      viewBox="0 0 168 28"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <rect x="1" y="4" width="20" height="20" fill={stroke} />
      <rect
        x="49"
        y="4"
        width="20"
        height="20"
        stroke={stroke}
        strokeWidth="1.25"
      />
      <path
        d="M97 5.5V22.5M97 5.5H115.5V14H97"
        stroke={stroke}
        strokeWidth="1.15"
      />
      <path d="M147 5V23" stroke={stroke} strokeWidth="1.2" />
    </svg>
  );
}
