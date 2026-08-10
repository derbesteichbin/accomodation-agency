import type { SiteContent } from "@/content/types";

export function Support({ content }: { content: SiteContent }) {
  const s = content.support;
  if (!s?.heading && !s?.email) return null;
  return (
    <section id="support" className="scroll-mt-24 border-t border-line bg-sand py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">{s.heading}</h2>
        {s.body && <p className="mt-4 leading-relaxed text-stonewarm">{s.body}</p>}
        <div className="mt-8 flex flex-col items-center gap-2">
          {s.email && (
            <a href={`mailto:${s.email}`} className="text-lg font-medium text-clay hover:text-clay-dark">{s.email}</a>
          )}
          {s.phone && (
            <a href={`tel:${s.phone.replace(/\s+/g, "")}`} className="text-stonewarm hover:text-clay">{s.phone}</a>
          )}
        </div>
      </div>
    </section>
  );
}
