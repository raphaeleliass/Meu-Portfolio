import Navigation from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/About-me";
import Projects from "@/components/Projects";
import WhyMe from "@/components/why-me";
import Contact from "@/components/Contact";
import ScrollToTopBtn from "@/components/ui/scroll-to-top-btn";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutMe />
      <Projects />
      <WhyMe />
      <Contact />
      <ScrollToTopBtn />
      <Footer/>
    </div>
  );
};

export default Index;
