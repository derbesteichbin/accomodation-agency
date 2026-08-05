import { getContent } from "@/lib/content";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const content = await getContent(locale);
  return (
    <>
      <Hero content={content} />
      <Portfolio content={content} />
      <Testimonials content={content} />
    </>
  );
}
