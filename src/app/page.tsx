import AboutMe from "@/components/sections/aboutMe/aboutme";
import Hero from "@/components/sections/hero/hero";
import Projects from "@/components/sections/projects/projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Hero />
      <AboutMe />
      <Projects />
    </main>
  );
}
