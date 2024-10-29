"use client";
import gsap from "gsap";
import Image from "next/image";
import { useLayoutEffect, useState, useEffect } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const techPath = [
  {
    name: "reactJS",
    path: "/react.svg",
    dark_mode: false,
  },
  {
    name: "nextJS",
    path: "/nextjs.svg",
    dark_mode: false,
  },
  {
    name: "javascript",
    path: "/javascript-light-mode.svg",
    darkmode_path: "/javascript-dark-mode.svg",
    dark_mode: true,
  },
  {
    name: "typescript",
    path: "/typescript.svg",
    dark_mode: false,
  },
  {
    name: "tailwindcss",
    path: "/tailwindcss.svg",
    dark_mode: false,
  },
  {
    name: "python",
    path: "/python.svg",
    dark_mode: false,
  },
];

export default function TechsSection() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useLayoutEffect(() => {
    gsap.from(".size-10", {
      opacity: 0,
      y: -12,
      duration: 0.3,
      stagger: 0.1,
    });

    return () => gsap.killTweensOf(".size-10");
  }, []);

  return (
    <section className="container z-40 flex -translate-y-20 flex-row flex-wrap items-center justify-around rounded-b-custom bg-background px-4 pb-12 pt-28 shadow-lg ease-in-out dark:bg-zinc-900">
      {techPath.map((tech) => (
        <TooltipProvider key={tech.name}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Image
                src={
                  tech.dark_mode && isDarkMode
                    ? tech.darkmode_path || tech.path
                    : tech.path
                }
                alt={`Logo da tecnologia ${tech.name}`}
                width={200}
                height={200}
                className="size-10 translate-y-0 opacity-100 md:size-20"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p className="capitalize">{tech.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </section>
  );
}
