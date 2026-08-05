import type { SiteContent } from "@/content/types";

export function Addons({ content }: { content: SiteContent }) {
  const addons = content.addons ?? [];
  if (!addons.length) return null;

  return (
    <section id="zusatzleistungen" className="scroll-mt-24 border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold sm:text-4xl">{content.ui.addons}</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {addons.map((a, i) => (
            <div key={i} className="flex items-start justify-between gap-4 rounded-2xl border border-line bg-sand p-6">
              <div>
                <h3 className="font-semibold">{a.name}</h3>
                {a.description && (
                  <p className="mt-1 text-sm leading-relaxed text-stonewarm">{a.description}</p>
                )}
              </div>
              {a.price && <span className="shrink-0 text-sm font-medium text-clay">{a.price}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
