import AboutMe from "@/components/Sections/aboutMe/aboutme";
import Hero from "@/components/Sections/hero/hero";
import Footer from "@/components/Sections/Footer/footer";
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
