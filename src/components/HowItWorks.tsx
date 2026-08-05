import type { SiteContent } from "@/content/types";

export function HowItWorks({ content }: { content: SiteContent }) {
  const h = content.howItWorks;
  if (!h?.steps?.length) return null;
  return (
    <section id="so-gehts" className="scroll-mt-24 border-t border-line py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-semibold sm:text-4xl">{h.heading}</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {h.steps.map((s, i) => (
            <div key={i}>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-clay text-cream font-semibold">{i + 1}</div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-stonewarm">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
