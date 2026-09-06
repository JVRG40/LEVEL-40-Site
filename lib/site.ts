export const site = {
  name: "LEVEL40",
  tagline: "Where Vision Meets Execution",
  domain: "www.level-forty.com",
  url: "https://www.level-forty.com",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "jose.vila@level-forty.com",
  phone: "+34 689 810 598",
  phoneHref: "tel:+34689810598",
  principal: "Jose Vila",
  title: "Managing Director",
  headline:
    "Global advisory and management consulting for leaders who move markets.",
  contactSubject: "LEVEL40 — confidential discussion",
} as const;

export const nav = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
] as const;

export const about = {
  heading: "About LEVEL40",
  paragraphs: [
    "LEVEL40 is a global advisory and management consulting firm for high-stakes transformation and strategic growth. We partner with CEOs, Boards, and private equity sponsors when operational complexity, performance, or the operating model is under pressure.",
    "We turn vision into actionable strategy — whether driven by stalled growth, eroded margins, regulatory pressure, or cross-border expansion — and remain accountable through execution.",
  ],
  close:
    "We work where the stakes are high, timelines are tight, and outcomes matter.",
  quote: "Advising at the summit—where clarity shapes action.",
  principalNote:
    "Jose Vila, Managing Director, is engaged in interim and permanent Executive Committee roles for PE-backed and corporate businesses — leading cost-base resets, operating-model transformation, and performance improvement under Board and investor scrutiny.",
} as const;

export const services = [
  {
    title: "Strategic Vision & Execution",
    body: "Actionable strategies that connect long-term value creation to a clear path of execution — so the organisation knows what to do next, and who owns it.",
  },
  {
    title: "Enterprise Transformation",
    body: "Complex programmes spanning cost optimisation, target operating models, and delivery discipline. Measurable results, not recommendations left on the table.",
  },
  {
    title: "Regulatory & Structural Restructuring",
    body: "Mission-critical restructuring, carve-outs, and organisational redesign in regulated, closely scrutinised environments.",
  },
  {
    title: "Cross-Border Execution",
    body: "Global growth strategies and operating-model alignment across jurisdictions — the same standard of accountability in every market.",
  },
] as const;

export function mailtoHref() {
  const subject = encodeURIComponent(site.contactSubject);
  return `mailto:${site.email}?subject=${subject}`;
}
