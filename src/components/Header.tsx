import type { SiteContent } from "@/content/types";

export function Header({ content }: { content: SiteContent }) {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-lg font-semibold tracking-tight text-bark">
          {content.businessName}
        </a>
        <ul className="flex gap-6 text-sm">
          {content.nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-stonewarm transition-colors hover:text-clay">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
