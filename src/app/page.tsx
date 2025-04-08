// component imports
import About from "@/components/layouts/Home/About";
import Contact from "@/components/layouts/Home/Contact";
import Footer from "@/components/layouts/Home/Footer";
import Hero from "@/components/layouts/Home/Hero";
import Logos from "@/components/layouts/Home/Logos";
import Navigation from "@/components/layouts/Home/Navbar";
import Projects from "@/components/layouts/Home/Projects";
import ScrollToTopBtn from "@/components/ui/scroll-to-top-btn";

export default function Page() {
  return (
    <>
      <main className="flex flex-col items-center justify-center" id="main">
        <Navigation />
        <Hero />
        <Logos />
        <About />
        <Projects />
        <Contact />
        <ScrollToTopBtn />

        {/* <Scene /> */}
      </main>

      <Footer />
    </>
  );
}
