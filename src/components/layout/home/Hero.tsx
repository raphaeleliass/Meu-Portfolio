"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="flex min-h-screen items-center justify-center px-4">
      <div className="animate-fade-up mx-auto max-w-4xl text-center">
        <h1 className="font-poppins mb-6 text-4xl font-bold md:text-6xl">
          Front-End Developer
          <span className="font-poppins mt-2 block text-accent">
            Building Modern Web Experiences
          </span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-secondary md:text-xl">
          I create responsive and intuitive interfaces that help businesses
          connect with their users.
        </p>
        <Button onClick={scrollToContact} className="group">
          Let&apos;s work together
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
}
