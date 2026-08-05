import type { SiteContent } from "@/content/types";

export function AboutMe({ content }: { content: SiteContent }) {
  const a = content.aboutMe;
  if (!a?.heading && !a?.body) return null;
  return (
    <section id="ueber-mich" className="scroll-mt-24 border-t border-line py-24">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 sm:grid-cols-2 sm:items-center">
        {a.image?.src && (
          <div className="aspect-square overflow-hidden rounded-3xl bg-sand">
            <img src={a.image.src} alt={a.image.alt} className="h-full w-full object-cover" />
          </div>
        )}
        <div>
          <h2 className="text-3xl font-semibold sm:text-4xl">{a.heading}</h2>
          <p className="mt-4 whitespace-pre-line leading-relaxed text-stonewarm">{a.body}</p>
        </div>
      </div>
    </section>
  );
}
