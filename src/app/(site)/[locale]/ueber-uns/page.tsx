import { getContent } from "@/lib/content";
import { AboutMe } from "@/components/AboutMe";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { Coverage } from "@/components/Coverage";
import { locales } from "@/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function UeberUns({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const content = await getContent(locale);
  return (
    <main>
      <AboutMe content={content} />
      <Benefits content={content} />
      <HowItWorks content={content} />
      <Coverage content={content} />
    </main>
  );
}
