"use client";
import React, { useLayoutEffect } from "react";
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
import { ExternalLink, Loader2, LucideGlobe } from "lucide-react";
import { Section, SectionDescription, SectionTitle } from "./ui/section";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import useProjects from "@/hooks/use-projects";

export default function Projects() {
  const { loader, project } = useProjects();

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

      {loader ? (
        <Loader2 className="mt-32 animate-spin" />
      ) : (
        <div className="project-items container mt-32 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {project.map((project) => (
            <Card
              className="project-items flex flex-col justify-between shadow-lg transition-all duration-300"
              key={project.title}
            >
              <CardHeader>
                <Image
                  className="aspect-video w-full rounded-lg object-cover object-top"
                  src={project.imagePath}
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
                  {project.tags.map((tech) => (
                    <Badge variant={"secondary"} key={tech}>
                      {tech}
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
      )}
    </Section>
  );
}
