"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Download, ExternalLink } from "lucide-react";
import { myTechs } from "@/data/myTechs";
import { Badge } from "./ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export default function AboutMe() {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const divReference = divRef.current;

    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      divRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: divRef.current,
          start: "top 40%",
          end: "bottom 80%",
          once: true,
        },
      },
    );

    gsap.fromTo(
      ".article-items",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        delay: 0.3,
        stagger: 0.1,
        scrollTrigger: {
          trigger: divRef.current,
          start: "top 40%",
          end: "bottom 80%",
          once: true,
        },
      },
    );

    gsap.fromTo(
      ".badges",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        delay: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: divRef.current,
          start: "top 40%",
          end: "bottom 80%",
          once: true,
        },
      },
    );

    return () => {
      gsap.killTweensOf(divReference);
      gsap.killTweensOf(".article-items");
      gsap.killTweensOf(".badges");
    };
  }, []);

  return (
    <section className="flex min-h-dvh flex-col items-center justify-center">
      <div
        className="container flex w-auto flex-col items-center justify-between gap-6 rounded-3xl bg-neutral-900 p-6 lg:flex-row-reverse"
        ref={divRef}
      >
        <Image
          className="rounded-2xl object-cover object-center saturate-0 md:size-[36rem]"
          src={"https://github.com/raphaeleliass.png"}
          alt="Raphael's profile picture"
          width={500}
          height={500}
        />

        <article className="article-items mx-auto flex flex-col items-start justify-center gap-6 lg:pl-6">
          <h2 className="article-items font-Poppins text-2xl font-semibold md:text-3xl">
            About me
          </h2>

          <p className="article-items text-balance indent-4 text-sm md:max-w-lg">
            Student of Systems Analysis and Development, focused on front-end
            development and data analysis with Python. <br /> I have experience
            in React, TypeScript, NodeJS, and Python, as well as basic knowledge
            in SEO and UI/UX. <br /> I am looking for opportunities to improve
            my skills and start my career in the technology field, with the goal
            of becoming a full-stack developer and, in the future, exploring the
            international market.
          </p>

          <div className="article-items flex flex-row gap-2">
            <Button className="article-items" variant={"outline"}>
              Visit my Linkedin <ExternalLink />
            </Button>

            <Button className="article-items" variant={"secondary"}>
              Download my CV <Download />
            </Button>
          </div>

          <h3 className="article-items mt-6 text-xl font-semibold md:text-2xl">
            My knowledge
          </h3>
          <span className="article-items flex max-w-xl flex-row flex-wrap gap-1">
            {myTechs.map((tech) => (
              <TooltipProvider key={tech.name}>
                <Tooltip>
                  <TooltipTrigger>
                    <Badge className="badges" variant={"secondary"}>
                      {tech.name}
                    </Badge>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p className="text-sm">{tech.description}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </span>
        </article>
      </div>
    </section>
  );
}
