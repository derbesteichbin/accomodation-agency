"use client";

import { useState } from "react";
import type { SiteContent } from "@/content/types";
import { BookButton } from "@/components/BookButton";

export function SingleServices({ content }: { content: SiteContent }) {
  const groups = content.singleServices ?? [];
  const [active, setActive] = useState(0);
  if (!groups.length) return null;

  const labels: Record<string, string> = {
    wohnung: content.locale === "en" ? "Apartment" : "Wohnung",
    haus: content.locale === "en" ? "House" : "Haus",
  };
  const group = groups[active] ?? groups[0];

  return (
    <section id="einzelleistungen" className="scroll-mt-24 border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold sm:text-4xl">{content.ui.singleServices}</h2>

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

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {group.items.map((it, i) => (
            <div key={i} className="flex flex-col rounded-3xl border border-line bg-sand p-8">
              <h3 className="text-lg font-semibold">{it.name}</h3>
              {it.price && <p className="mt-2 text-2xl font-semibold text-bark">{it.price}</p>}
              {it.description && (
                <p className="mt-3 flex-1 text-sm leading-relaxed text-stonewarm">{it.description}</p>
              )}
              <BookButton
                calLink={content.bookingCalLink}
                className="mt-6 w-full cursor-pointer rounded-full border border-line px-6 py-3 text-sm font-medium text-bark transition-colors hover:border-clay hover:text-clay"
              >
                {content.ui.book}
              </BookButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
