"use client";
import React, { useLayoutEffect } from "react";
import { projectsData } from "@/data/projectsData";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, LucideGlobe } from "lucide-react";
import { Section, SectionDescription, SectionTitle } from "./ui/section";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export default function Projects() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".project-items",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.3,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".project-items",
          start: "top 40%",
          end: "center 60%",
        },
      },
    );

    return () => gsap.killTweensOf(".project-items");
  }, []);

  return (
    <Section className="project-items py-32" id="projects">
      <SectionTitle>Spotlight Projects</SectionTitle>
      <SectionDescription>
        Discover a curated selection of projects that showcase innovation,
        creativity, and technical prowess.
      </SectionDescription>

      <div className="project-items container mt-32 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {projectsData.map((project) => (
          <Card
            className="project-items flex flex-col justify-between shadow-lg transition-all duration-300 hover:-translate-y-2"
            key={project.title}
          >
            <CardHeader>
              <Image
                className="aspect-video w-full rounded-lg object-cover object-top"
                src={project.imageSrc}
                alt={project.title}
                width={1920}
                height={1080}
              />
            </CardHeader>

            <CardContent>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription className="mt-4">
                {project.description}
              </CardDescription>
              <span className="mt-8 flex flex-wrap gap-1">
                {project.technologies.map((tech) => (
                  <Badge variant={"secondary"} key={tech.name}>
                    {tech.name}
                  </Badge>
                ))}
              </span>
            </CardContent>

            <CardFooter className="w-full flex-col justify-center gap-2 md:flex-row">
              <Button className="w-full" variant={"outline"}>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Repository
                </a>
                <ExternalLink />
              </Button>

              <Button className="w-full" variant={"secondary"}>
                <a
                  href={project.siteLink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Open Site
                </a>
                <LucideGlobe />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
