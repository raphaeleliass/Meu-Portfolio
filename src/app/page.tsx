import Navigation from "@/components/layout/home/Navbar";
import Hero from "@/components/layout/home/Hero";
import AboutMe from "@/components/layout/home/About-me";
import Projects from "@/components/layout/home/Projects";
import WhyMe from "@/components/layout/home/why-me";
import Contact from "@/components/layout/home/Contact";
import ScrollToTopBtn from "@/components/ui/scroll-to-top-btn";
import Footer from "@/components/layout/home/Footer";

export default function Page() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <AboutMe />
        <Projects />
        <WhyMe />
        <Contact />
        <ScrollToTopBtn />
      </main>

      <Footer />
    </>
  );
}
