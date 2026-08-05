import type { SiteContent } from "@/content/types";

export function Benefits({ content }: { content: SiteContent }) {
  const b = content.benefits;
  if (!b?.items?.length) return null;
  return (
    <section id="vorteile" className="scroll-mt-24 border-t border-line bg-sand py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-semibold sm:text-4xl">{b.heading}</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {b.items.map((it, i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 leading-relaxed text-stonewarm">{it.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
