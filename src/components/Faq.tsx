import Link from "next/link";
import type { SiteContent } from "@/content/types";

export function Faq({ content, onlyHome = false, showAllButton = false }: { content: SiteContent; onlyHome?: boolean; showAllButton?: boolean }) {
  const f = content.faq;
  if (!f?.items?.length) return null;
  const items = onlyHome ? f.items.filter((i) => i.showOnHome) : f.items;
  if (!items.length) return null;
  const l = content.locale;

  return (
    <section id="faq" className="scroll-mt-24 border-t border-line py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-semibold sm:text-4xl">{f.heading}</h2>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {items.map((item, i) => (
            <details key={i} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium text-bark">
                {item.question}
                <span className="ml-4 text-clay transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 whitespace-pre-line leading-relaxed text-stonewarm">{item.answer}</p>
            </details>
          ))}
        </div>
        {showAllButton && (
          <div className="mt-10">
            <Link href={`/${l}/faq`} className="inline-block rounded-full border border-line px-6 py-3 text-sm font-medium text-bark transition-colors hover:border-clay hover:text-clay">
              {l === "en" ? "All FAQ" : "Alle FAQ"}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
