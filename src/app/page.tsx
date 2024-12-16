import AboutMe from "@/components/Sections/AboutMe/AboutMe";
import Footer from "@/components/Sections/Footer/footer";
import Hero from "@/components/Sections/Hero/hero";
import Navbar from "@/components/Sections/Navbar/navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Navbar />
      <Hero />
      <AboutMe />
      <Footer />
    </main>
  );
}
