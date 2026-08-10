import { getContent } from "@/lib/content";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Support } from "@/components/Support";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const content = await getContent(locale);
  return (
    <>
      <Hero content={content} />
      <Portfolio content={content} />
      <Testimonials content={content} />
      <Faq content={content} />
      <Support content={content} />
    </>
  );
}
