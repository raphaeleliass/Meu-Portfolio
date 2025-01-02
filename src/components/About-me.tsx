"use client";
import React, { useLayoutEffect, useRef } from "react";
import { Section, SectionTitle } from "./ui/section";
import Image from "next/image";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import { bioData } from "@/data/bioData";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export default function AboutMe() {
  const aboutMeRef = useRef(null);

  useLayoutEffect(() => {
    const aboutMe = aboutMeRef.current;

    gsap.registerEffect(ScrollTrigger);
    gsap.fromTo(
      ".about-me-items",
      {
        opacity: 0,
        y: -12,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.1,
        scrollTrigger: {
          trigger: aboutMe,
          start: "top 40%",
          end: "center 60%",
        },
      },
    );

    return () => gsap.killTweensOf(".about-me-items");
  }, []);

  return (
    <Section className="about-me-items min-h-dvh gap-6 py-32" ref={aboutMeRef}>
      <div className="flex w-full flex-col items-center justify-center gap-6 md:flex-row">
        <div className="flex items-center justify-center md:w-1/3">
          <Image
            className="about-me-items w-full rounded rounded-bl-3xl rounded-tr-3xl object-cover object-center shadow-lg"
            src={"https://github.com/raphaeleliass.png"}
            alt="Raphael Elias profile picture"
            width={500}
            height={500}
          />
        </div>

        <div className="about-me-items flex w-full flex-col items-center justify-center gap-4 text-balance text-center md:w-2/3 md:indent-4">
          <SectionTitle className="about-me-items">About Me</SectionTitle>
          <span>
            <p className="indent-8">
              Hi, I&apos;m Raphael Elias, a Systems Analysis and Development
              student passionate about web development and data analysis.
            </p>
            <p className="indent-8">
              Experienced with React, TypeScript, NodeJS, and Python, with a
              basic understanding of SEO and UI/UX principles.
            </p>
            <p className="indent-8">
              Aiming to become a full-stack developer and explore international
              opportunities.
            </p>
          </span>

          <div className="about-me-items flex w-full flex-row items-center justify-center gap-2">
            <Button variant={"outline"}>
              <a
                href="https://linkedin.com/in/raphaeleliass"
                target="_blank"
                rel="noreferrer noopener"
              >
                Linkedin
              </a>
            </Button>
            <Button variant={"secondary"}>
              <a
                href="/Raphael-Elias-CV.odt"
                target="_blank"
                rel="noreferrer noopener"
              >
                Download CV
              </a>
              <Download />
            </Button>
          </div>
        </div>
      </div>

      <div className="container flex flex-col flex-wrap items-center justify-center gap-4 md:flex-row md:flex-nowrap">
        {bioData.map((bio) => (
          <div
            className="about-me-items flex aspect-square h-full w-full flex-row items-center justify-center"
            key={bio.title}
          >
            <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
              <h2 className="font-Poppins text-2xl font-semibold md:text-lg">
                {bio.title}
              </h2>
              <div className="flex flex-row flex-wrap items-center justify-center gap-1">
                {bio.skills.map((skill) => (
                  <Badge
                    className="about-me-items"
                    variant={"outline"}
                    key={skill.name}
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
            <Separator
              orientation="vertical"
              className="hidden h-1/2 md:block"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
