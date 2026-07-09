import { getContent } from "@/lib/content";
import { LegalPage } from "@/components/LegalPage";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { locales } from "@/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Impressum({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const content = await getContent(locale);
  return (
    <>
      <Header content={content} />
      <LegalPage title={content.ui.imprint} body={content.impressum} />
      <Footer content={content} />
    </>
  );
}
