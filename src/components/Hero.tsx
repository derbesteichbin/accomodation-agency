import type { SiteContent } from "@/content/types";
import { BookButton } from "@/components/BookButton";

export function Hero({ content }: { content: SiteContent }) {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 py-28">
      <p className="text-sm font-medium uppercase tracking-widest text-clay">
        {content.tagline}
      </p>
      <h1 className="mt-5 max-w-2xl text-5xl font-semibold leading-tight sm:text-6xl">
        {content.hero.heading}
      </h1>
      <p className="mt-6 max-w-xl text-lg text-stonewarm">
        {content.hero.subheading}
      </p>
      <BookButton
        calLink={content.bookingCalLink}
        className="mt-9 inline-block cursor-pointer rounded-full bg-clay px-7 py-3 text-sm font-medium text-cream transition-colors hover:bg-clay-dark"
      >
        Book now
      </BookButton>
    </section>
  );
}
