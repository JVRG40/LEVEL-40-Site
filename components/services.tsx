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

        <ul className="mt-16 grid gap-12 md:grid-cols-2 md:gap-0 lg:grid-cols-4">
          {services.map((item, index) => (
            <li
              key={item.title}
              className={`md:px-8 md:py-2 ${
                index > 0 ? "md:border-l md:border-line" : ""
              } ${index === 0 ? "md:pl-0" : ""} ${
                index === services.length - 1 ? "lg:pr-0" : ""
              }`}
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
