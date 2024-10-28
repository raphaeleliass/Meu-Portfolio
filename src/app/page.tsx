import Cards from "@/components/Cards/cards";
import Footer from "@/components/Footer/footer";
import Hero from "@/components/Hero/hero";
import TechsSection from "@/components/TechsSection/techsSection";

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center">
      <Hero />
      <TechsSection />
      <Cards />
      <Footer />
    </main>
  );
}
