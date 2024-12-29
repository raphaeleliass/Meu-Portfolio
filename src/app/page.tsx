import AboutMe from "@/components/about-me";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import ScrollToTopBtn from "@/components/scroll-to-top-btn";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Navbar />
      <Hero />
      <AboutMe />

      <ScrollToTopBtn />
    </main>
  );
}
