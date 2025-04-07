// component imports
import About from "@/components/layouts/Home/About";
import Contact from "@/components/layouts/Home/Contact";
import Footer from "@/components/layouts/Home/Footer";
import Hero from "@/components/layouts/Home/Hero";
import Logos from "@/components/layouts/Home/Logos";
import Navigation from "@/components/layouts/Home/Navbar";
import Projects from "@/components/layouts/Home/Projects";
import ScrollToTopBtn from "@/components/ui/scroll-to-top-btn";
import { Locale } from "../i18n-config";
import { getDictionary } from "@/dictionaries";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  return (
    <>
      <main
        className="z-50 flex flex-col items-center justify-center"
        id="main"
      >
        <Navigation lang={lang} dict={dict} />
        <Hero lang={lang} dict={dict} />
        <Logos />
        <About lang={lang} dict={dict} />
        <Projects lang={lang} dict={dict} />
        <Contact lang={lang} dict={dict} />
        <ScrollToTopBtn />

        {/* <Scene /> */}
      </main>

      <Footer />
      {/* <Scene /> */}
    </>
  );
}
