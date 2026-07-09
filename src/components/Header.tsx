import type { SiteContent } from "@/content/types";
import { BookButton } from "@/components/BookButton";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Header({ content }: { content: SiteContent }) {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href={`/${content.locale}#top`} className="text-lg font-semibold tracking-tight text-bark">
          {content.businessName}
        </a>
        <div className="flex items-center gap-6">
          <ul className="hidden gap-6 text-sm sm:flex">
            {content.nav.map((item) => (
              <li key={item.href}>
                <a href={`/${content.locale}${item.href}`} className="text-stonewarm transition-colors hover:text-clay">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitcher current={content.locale} />
          <BookButton
            calLink={content.bookingCalLink}
            className="cursor-pointer rounded-full bg-clay px-5 py-2 text-sm font-medium text-cream transition-colors hover:bg-clay-dark"
          >
            {content.ui.book}
          </BookButton>
        </div>
      </nav>
    </header>
  );
}
