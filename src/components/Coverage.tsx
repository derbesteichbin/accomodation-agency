import type { SiteContent } from "@/content/types";

export function Coverage({ content }: { content: SiteContent }) {
  const c = content.coverage;
  if (!c?.heading && !c?.areas?.length) return null;
  return (
    <section id="gebiete" className="scroll-mt-24 border-t border-line bg-sand py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-semibold sm:text-4xl">{c.heading}</h2>
        {c.body && <p className="mt-4 max-w-2xl leading-relaxed text-stonewarm">{c.body}</p>}
        {c.areas?.length > 0 && (
          <ul className="mt-8 flex flex-wrap gap-3">
            {c.areas.map((area, i) => (
              <li key={i} className="rounded-full border border-line bg-cream px-4 py-2 text-sm">{area}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
