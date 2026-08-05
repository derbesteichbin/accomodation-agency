import { getContent } from "@/lib/content";
import { Services } from "@/components/Services";
import { Packages } from "@/components/Packages";
import { SingleServices } from "@/components/SingleServices";
import { Addons } from "@/components/Addons";
import { locales } from "@/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Leistungen({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const content = await getContent(locale);
  return (
    <main>
      <Services content={content} />
      <Packages content={content} />
      <SingleServices content={content} />
      <Addons content={content} />
    </main>
  );
}
