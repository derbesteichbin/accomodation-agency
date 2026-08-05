"use client";

import { useState } from "react";
import Link from "next/link";
import type { SiteContent } from "@/content/types";
import { BookButton } from "@/components/BookButton";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header({ content }: { content: SiteContent }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const l = content.locale;
  const de = l === "de";

  const leistungen = [
    { label: de ? "Pakete" : "Packages", href: `/${l}/leistungen#packages` },
    { label: de ? "Einzelleistungen" : "Individual services", href: `/${l}/leistungen#einzelleistungen` },
    { label: de ? "Zusatzleistungen" : "Add-ons", href: `/${l}/leistungen#zusatzleistungen` },
  ];
  const ueber = [
    { label: de ? "Über mich" : "About me", href: `/${l}/ueber-uns#ueber-mich` },
    { label: de ? "Vorteile" : "Benefits", href: `/${l}/ueber-uns#vorteile` },
    { label: de ? "So einfach geht's" : "How it works", href: `/${l}/ueber-uns#so-gehts` },
    { label: de ? "Wo wir tätig sind" : "Where we operate", href: `/${l}/ueber-uns#gebiete` },
  ];
  const leistungenLabel = de ? "Leistungen" : "Services";
  const ueberLabel = de ? "Über uns" : "About";
  const portfolioLabel = "Portfolio";

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href={`/${l}`} className="text-lg font-semibold tracking-tight text-bark">
          {content.businessName}
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          <Link href={`/${l}#portfolio`} className="text-sm text-stonewarm transition-colors hover:text-clay">
            {portfolioLabel}
          </Link>

          <div className="group relative">
            <Link href={`/${l}/leistungen`} className="cursor-pointer text-sm text-stonewarm transition-colors hover:text-clay">
              {leistungenLabel}
            </Link>
            <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              <div className="min-w-48 rounded-2xl border border-line bg-cream p-2 shadow-lg">
                {leistungen.map((item) => (
                  <Link key={item.href} href={item.href} className="block rounded-xl px-3 py-2 text-sm text-stonewarm transition-colors hover:bg-sand hover:text-clay">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="group relative">
            <Link href={`/${l}/ueber-uns`} className="cursor-pointer text-sm text-stonewarm transition-colors hover:text-clay">
              {ueberLabel}
            </Link>
            <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              <div className="min-w-48 rounded-2xl border border-line bg-cream p-2 shadow-lg">
                {ueber.map((item) => (
                  <Link key={item.href} href={item.href} className="block rounded-xl px-3 py-2 text-sm text-stonewarm transition-colors hover:bg-sand hover:text-clay">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <LanguageSwitcher current={content.locale} />
          <ThemeToggle />
          <BookButton
            calLink={content.bookingCalLink}
            className="cursor-pointer rounded-full bg-clay px-5 py-2 text-sm font-medium text-cream transition-colors hover:bg-clay-dark"
          >
            {content.ui.book}
          </BookButton>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
            className="cursor-pointer rounded-full border border-line p-2 text-bark"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-line bg-cream px-6 py-4 md:hidden">
          <Link href={`/${l}#portfolio`} onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-stonewarm">
            {portfolioLabel}
          </Link>
          <p className="pt-4 text-xs font-semibold uppercase tracking-wide text-bark">{leistungenLabel}</p>
          {leistungen.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block py-2 pl-3 text-sm text-stonewarm">
              {item.label}
            </Link>
          ))}
          <p className="pt-4 text-xs font-semibold uppercase tracking-wide text-bark">{ueberLabel}</p>
          {ueber.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block py-2 pl-3 text-sm text-stonewarm">
              {item.label}
            </Link>
          ))}
          <div className="mt-4 flex items-center justify-between">
            <LanguageSwitcher current={content.locale} />
            <BookButton
              calLink={content.bookingCalLink}
              className="cursor-pointer rounded-full bg-clay px-5 py-2 text-sm font-medium text-cream transition-colors hover:bg-clay-dark"
            >
              {content.ui.book}
            </BookButton>
          </div>
        </div>
      )}
    </header>
  );
}
