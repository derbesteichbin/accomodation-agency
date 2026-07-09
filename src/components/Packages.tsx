import type { SiteContent } from "@/content/types";
import { BookButton } from "@/components/BookButton";

export function Packages({ content }: { content: SiteContent }) {
  if (!content.packages?.length) return null;

  return (
    <section id="packages" className="scroll-mt-24 border-t border-line py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-semibold sm:text-4xl">Pakete</h2>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {content.packages.map((pkg, i) => (
            <div
              key={i}
              className={
                pkg.featured
                  ? "flex flex-col rounded-3xl border-2 border-clay bg-white p-8"
                  : "flex flex-col rounded-3xl border border-line bg-white p-8"
              }
            >
              {pkg.featured && (
                <span className="mb-4 self-start rounded-full bg-clay px-3 py-1 text-xs font-medium uppercase tracking-wide text-cream">
                  Beliebt
                </span>
              )}
              <h3 className="text-xl font-semibold">{pkg.name}</h3>
              <p className="mt-2 text-3xl font-semibold text-bark">{pkg.price}</p>
              {pkg.description && (
                <p className="mt-3 text-sm leading-relaxed text-stonewarm">{pkg.description}</p>
              )}
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {pkg.features.map((f, j) => (
                  <li key={j} className="flex gap-3">
                    <span aria-hidden className="mt-1 text-clay">—</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <BookButton
                calLink={content.bookingCalLink}
                className={
                  pkg.featured
                    ? "mt-8 w-full cursor-pointer rounded-full bg-clay px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-clay-dark"
                    : "mt-8 w-full cursor-pointer rounded-full border border-line px-6 py-3 text-sm font-medium text-bark transition-colors hover:border-clay hover:text-clay"
                }
              >
                Jetzt buchen
              </BookButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
