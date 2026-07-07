import type { SiteContent } from "@/content/types";

export function About({ content }: { content: SiteContent }) {
  return (
    <section id="about" className="scroll-mt-24 border-t border-line bg-sand py-24">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 sm:grid-cols-2 sm:items-center">
        <div className="aspect-square overflow-hidden rounded-3xl bg-cream">
          {content.about.image.src && (
            <img src={content.about.image.src} alt={content.about.image.alt} className="h-full w-full object-cover" />
          )}
        </div>
        <div>
          <h2 className="text-3xl font-semibold sm:text-4xl">{content.about.heading}</h2>
          <p className="mt-4 leading-relaxed text-stonewarm">{content.about.body}</p>
        </div>
      </div>
    </section>
  );
}
