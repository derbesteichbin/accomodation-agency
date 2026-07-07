import { getContent } from "@/lib/content";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default async function Home() {
  const content = await getContent();
  return (
    <>
      <Header content={content} />
      <Hero content={content} />
      <Portfolio content={content} />
      <Services content={content} />
      <Testimonials content={content} />
      <About content={content} />
      <Footer content={content} />
    </>
  );
}
