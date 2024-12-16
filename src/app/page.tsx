import AboutMe from "@/components/Sections/AboutMe/Aboutme";
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
      <Footer />
    </main>
  );
}
