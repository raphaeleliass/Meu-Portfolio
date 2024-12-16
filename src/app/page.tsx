import AboutMe from "@/components/Sections/AboutMe/aboutme";
import Contact from "@/components/Sections/Contact/contact";
import Footer from "@/components/Sections/Footer/footer";
import Hero from "@/components/Sections/Hero/hero";
import Navbar from "@/components/Sections/Navbar/navbar";
import Projects from "@/components/Sections/Projects/projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
