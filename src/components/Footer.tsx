import type { SiteContent } from "@/content/types";

export function Footer({ content }: { content: SiteContent }) {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 text-sm text-stonewarm">
        <p>{content.businessName}</p>
        <a href={`mailto:${content.contactEmail}`} className="transition-colors hover:text-clay">
          {content.contactEmail}
        </a>
        <div className="mt-2 flex gap-4">
          <a href={`/${content.locale}/impressum`} className="transition-colors hover:text-clay">{content.ui.imprint}</a>
          <a href={`/${content.locale}/datenschutz`} className="transition-colors hover:text-clay">{content.ui.privacy}</a>
        </div>
      </div>
    </footer>
  );
}
