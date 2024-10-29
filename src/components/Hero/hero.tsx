"use client";
import { ExternalLink } from "lucide-react";
import Navbar from "../Navbar/navbar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { useLayoutEffect } from "react";
import gsap from "gsap";

export default function Hero() {
  useLayoutEffect(() => {
    gsap.from(".opacity-100", {
      opacity: 0,
      duration: 0.3,
      stagger: 0.2,
      y: 32,
    });
  });

  return (
    <section className="container z-50 flex flex-col justify-center rounded-b-custom bg-secondary pt-8 shadow-lg ring-1 ring-background dark:bg-background">
      <Navbar />

      <div className="mx-auto my-28 flex w-full max-w-sm flex-col items-center justify-center gap-4 opacity-100 md:max-w-2xl">
        <Avatar className="size-20 opacity-100 shadow-xl ring-4 ring-background md:size-32">
          <AvatarImage src="https://github.com/raphaeleliass.png" />
          <AvatarFallback>
            <Skeleton className="h-full w-full" />
          </AvatarFallback>
        </Avatar>
        <h2 className="text-balance text-center font-Playfair text-3xl font-bold opacity-100 md:text-5xl">
          Construindo produtos digitais, marcas e experiências.
        </h2>

        <Button
          className="mt-4 p-6 opacity-100"
          aria-label="botão que leva até os projetos mais recentes de Raphael"
        >
          <a
            href="https://github.com/raphaeleliass?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            Últimos Projetos
          </a>{" "}
          <ExternalLink />
        </Button>
      </div>
    </section>
  );
}
