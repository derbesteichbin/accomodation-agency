import type { SiteContent } from "@/content/types";

export function Portfolio({ content }: { content: SiteContent }) {
  return (
    <section id="portfolio" className="scroll-mt-24 border-t border-line py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-semibold sm:text-4xl">Portfolio</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.gallery.map((img, i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden rounded-2xl bg-sand">
              {img.src && (
                <img src={img.src} alt={img.alt} className="h-full w-full object-cover" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
