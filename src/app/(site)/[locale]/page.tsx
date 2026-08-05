import { getContent } from "@/lib/content";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Packages } from "@/components/Packages";
import { SingleServices } from "@/components/SingleServices";
import { Addons } from "@/components/Addons";
import { Testimonials } from "@/components/Testimonials";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const content = await getContent(locale);
  return (
    <>
      <Header content={content} />
      <Hero content={content} />
      <Portfolio content={content} />
      <Services content={content} />
      <Packages content={content} />
      <SingleServices content={content} />
      <Addons content={content} />
      <Testimonials content={content} />
      <About content={content} />
      <Footer content={content} />
    </>
  );
}
