import { getContent } from "@/lib/content";
import { Faq } from "@/components/Faq";
import { locales } from "@/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function FaqPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const content = await getContent(locale);
  return (
    <main>
      <Faq content={content} />
    </main>
  );
}
