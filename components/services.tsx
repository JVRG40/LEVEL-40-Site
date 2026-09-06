import { services } from "@/lib/site";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="services-heading"
          className="text-center text-[11px] tracking-[0.36em] text-foreground uppercase"
        >
          Our Services
        </h2>

        <ul className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {services.map((item, index) => (
            <li
              key={item.title}
              className={`lg:px-8 lg:py-2 ${
                index > 0 ? "lg:border-l lg:border-line" : "lg:pl-0"
              } ${index === services.length - 1 ? "lg:pr-0" : ""}`}
            >
              <h3 className="text-[12px] leading-relaxed tracking-[0.2em] text-foreground uppercase">
                {item.title}
              </h3>
              <p className="mt-5 font-display text-lg leading-relaxed font-light text-muted">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
