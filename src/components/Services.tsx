import type { SiteContent } from "@/content/types";

export function Services({ content }: { content: SiteContent }) {
  return (
    <section id="services" className="scroll-mt-24 border-t border-line bg-sand py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-semibold sm:text-4xl">Services</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {content.services.map((s, i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-stonewarm">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
