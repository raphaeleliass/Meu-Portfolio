"use client";
import gsap from "gsap";
import Image from "next/image";
import { useLayoutEffect } from "react";
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
  },
  {
    name: "nextJS",
    path: "/nextjs.svg",
  },
  {
    name: "javascript",
    path: "/javascript.svg",
  },
  {
    name: "typescript",
    path: "/typescript.svg",
  },
  {
    name: "tailwindcss",
    path: "/tailwindcss.svg",
  },
  {
    name: "python",
    path: "/python.svg",
  },
];

export default function TechsSection() {
  useLayoutEffect(() => {
    gsap.from(".size-10", {
      opacity: 0,
      y: -12,
      duration: 0.3,
      stagger: 0.1,
    });
  });

  return (
    <section className="container shadow-lg z-40 flex -translate-y-20 flex-row flex-wrap items-center justify-around rounded-b-custom bg-background px-4 pb-12 pt-28 ease-in-out">
      {techPath.map((tech) => (
        <TooltipProvider key={tech.name}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Image
                src={tech.path}
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
