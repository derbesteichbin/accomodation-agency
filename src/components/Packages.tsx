"use client";

import { useState } from "react";
import type { SiteContent } from "@/content/types";
import { BookButton } from "@/components/BookButton";

// Farb-Kennzeichnung der Stufen NACH POSITION (0 = erste Stufe).
// Hier kannst du Farben jederzeit anpassen. Es sind normale Tailwind-Klassen.
const TIER_BADGE: { label: string; badge: string }[] = [
  { label: "text-stonewarm", badge: "bg-line text-bark" },                 // Stufe 1: schlicht
  { label: "text-amber-700", badge: "bg-amber-200 text-amber-900" },       // Stufe 2: Gold
  { label: "text-slate-500", badge: "bg-slate-200 text-slate-700" },       // Stufe 3: Platin/Silber
  { label: "text-clay", badge: "bg-clay text-cream" },                     // Stufe 4: kräftig
];
function tierStyle(i: number) {
  return TIER_BADGE[i] ?? TIER_BADGE[TIER_BADGE.length - 1];
}

// Liest die erste Fotozahl aus den Features (z.B. "25 professionell bearbeitete Immobilienfotos" -> 25). Sonst null.
function photoCount(features: string[]): number | null {
  for (const f of features) {
    const m = f.match(/(\d+)\s*[^\d]*[Ff]oto/);
    if (m) return parseInt(m[1], 10);
  }
  return null;
}
// Wandelt einen Preis-String wie "€595" oder "595 EUR" in eine Zahl. Sonst null.
function priceValue(price: string): number | null {
  const m = price.replace(/\./g, "").match(/(\d+)(?:,(\d+))?/);
  if (!m) return null;
  return parseFloat(m[2] ? `${m[1]}.${m[2]}` : m[1]);
}

export function Packages({ content }: { content: SiteContent }) {
  const groups = content.packageGroups ?? [];
  const [active, setActive] = useState(0);

  if (!groups.length) return null;

  const labels: Record<string, string> = {
    wohnung: content.locale === "en" ? "Apartment" : "Wohnung",
    haus: content.locale === "en" ? "House" : "Haus",
  };

  const group = groups[active] ?? groups[0];

  return (
    <section id="packages" className="scroll-mt-24 border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold sm:text-4xl">{content.ui.packages}</h2>

        {groups.length > 1 && (
          <div className="mt-8 inline-flex rounded-full border border-line p-1">
            {groups.map((g, i) => (
              <button
                key={g.propertyType}
                onClick={() => setActive(i)}
                className={
                  i === active
                    ? "cursor-pointer rounded-full bg-clay px-6 py-2 text-sm font-medium text-cream"
                    : "cursor-pointer rounded-full px-6 py-2 text-sm font-medium text-stonewarm transition-colors hover:text-clay"
                }
              >
                {labels[g.propertyType] ?? g.propertyType}
              </button>
            ))}
          </div>
        )}

        {group.intro && (
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-stonewarm">{group.intro}</p>
        )}

        <div className="mt-12 space-y-16">
          {group.categories.map((cat, ci) => {
            const perPhoto = cat.tiers.map((t) => {
              const n = photoCount(t.features);
              const p = priceValue(t.price);
              return n && p ? p / n : null;
            });
            const baseline = perPhoto[0] ?? null;
            return (
            <div key={ci}>
              <h3 className="text-xl font-semibold text-bark">{cat.categoryName}</h3>
              <div className="mt-6 grid gap-8 lg:grid-cols-3">
                {cat.tiers.map((tier, ti) => (
                  <div
                    key={ti}
                    className={
                      tier.featured
                        ? "flex flex-col rounded-3xl border-2 border-clay bg-sand p-8"
                        : "flex flex-col rounded-3xl border border-line bg-sand p-8"
                    }
                  >
                    <div className="mb-4 flex flex-wrap items-center gap-2">
                      {tier.featured && (
                        <span className="rounded-full bg-clay px-3 py-1 text-xs font-medium uppercase tracking-wide text-cream">
                          {content.ui.popular}
                        </span>
                      )}
                      {tier.name && (
                        <span className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide ${tierStyle(ti).badge}`}>
                          {tier.name}
                        </span>
                      )}
                    </div>
                    <h4 className={`text-lg font-semibold ${tierStyle(ti).label}`}>{tier.name}</h4>
                    {tier.price && (
                      <p className="mt-2 text-3xl font-semibold text-bark">{tier.price}</p>
                    )}
                    {perPhoto[ti] !== null && baseline !== null && perPhoto[ti]! < baseline && (() => {
                      const save = Math.round((1 - perPhoto[ti]! / baseline) * 100);
                      return save > 0 ? (
                        <p className="mt-1 text-xs font-medium text-emerald-600">
                          −{save}% {content.locale === "en" ? "per photo" : "pro Foto"}
                        </p>
                      ) : null;
                    })()}
                    {tier.description && (
                      <p className="mt-3 text-sm leading-relaxed text-stonewarm">{tier.description}</p>
                    )}
                    <ul className="mt-6 flex-1 space-y-3 text-sm">
                      {tier.features.map((f, fi) => (
                        <li key={fi} className="flex gap-3">
                          <span aria-hidden className="mt-1 text-clay">—</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <BookButton
                      calLink={content.bookingCalLink}
                      className={
                        tier.featured
                          ? "mt-8 w-full cursor-pointer rounded-full bg-clay px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-clay-dark"
                          : "mt-8 w-full cursor-pointer rounded-full border border-line px-6 py-3 text-sm font-medium text-bark transition-colors hover:border-clay hover:text-clay"
                      }
                    >
                      {content.ui.book}
                    </BookButton>
                  </div>
                ))}
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
