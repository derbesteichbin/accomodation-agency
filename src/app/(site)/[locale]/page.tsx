import { getContent } from "@/lib/content";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Packages } from "@/components/Packages";
import { SingleServices } from "@/components/SingleServices";
import { Addons } from "@/components/Addons";
import { Testimonials } from "@/components/Testimonials";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const content = await getContent(locale);
  return (
    <>
      <Hero content={content} />
      <Portfolio content={content} />
      <Services content={content} />
      <Packages content={content} />
      <SingleServices content={content} />
      <Addons content={content} />
      <Testimonials content={content} />
    </>
  );
}
