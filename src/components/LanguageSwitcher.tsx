"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales } from "@/i18n";

export function LanguageSwitcher({ current }: { current: string }) {
  const pathname = usePathname();

  function pathFor(locale: string) {
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/") || `/${locale}`;
  }

  return (
    <div className="flex items-center gap-1 text-sm">
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i > 0 && <span className="text-line">/</span>}
          <Link
            href={pathFor(l)}
            prefetch={true}
            aria-current={l === current ? "true" : undefined}
            className={
              l === current
                ? "font-medium text-bark"
                : "text-stonewarm transition-colors hover:text-clay"
            }
          >
            {l.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );
}
