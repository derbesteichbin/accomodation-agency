import type { SiteContent } from "@/content/types";

export function Testimonials({ content }: { content: SiteContent }) {
  return (
    <section className="scroll-mt-24 border-t border-line py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-semibold sm:text-4xl">{content.ui.testimonials}</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {content.testimonials.map((t, i) => (
            <figure key={i} className="rounded-2xl border border-line bg-sand p-7">
              <blockquote className="text-lg leading-relaxed text-bark">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-stonewarm">
                {t.author}{t.role ? `, ${t.role}` : ""}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
