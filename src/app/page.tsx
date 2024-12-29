import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Navbar />
      <Hero />
    </main>
  );
}
