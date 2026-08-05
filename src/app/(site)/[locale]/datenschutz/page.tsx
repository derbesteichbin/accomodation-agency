import { getContent } from "@/lib/content";
import { LegalPage } from "@/components/LegalPage";
import { locales } from "@/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Datenschutz({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const content = await getContent(locale);
  return (
    <LegalPage title={content.ui.privacy} body={content.privacy} />
  );
}
