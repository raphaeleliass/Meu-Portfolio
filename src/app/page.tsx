import AboutMe from "@/components/about-me";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import ScrollToTopBtn from "@/components/scroll-to-top-btn";
import React from "react";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex flex-col items-center">
        <Hero />
        <AboutMe />
        <Projects />

        <ScrollToTopBtn />
      </main>

      <Footer />
    </>
  );
}
