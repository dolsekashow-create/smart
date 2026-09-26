import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Domains } from "@/components/Domains";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Services />
        <Domains />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
