"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import myProjects from "@/data/myprojects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";

export default function Projects() {
  const titleRef = useRef(null);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const unsub = gsap.to(titleRef.current, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "10% center",
        end: "40% center",
        scrub: true,
        once: true,
      },
    });

    return () => gsap.killTweensOf(unsub);
  }, []);

  return (
    <section
      className="flex min-h-dvh flex-col items-center justify-center gap-12"
      ref={sectionRef}
    >
      <h2
        className="max-w-sm -translate-y-96 gap-12 text-center font-Montserrat text-3xl font-semibold opacity-0 md:max-w-2xl md:text-4xl"
        ref={titleRef}
      >
        Discover My Highlighted Projects
      </h2>
      <div className="container grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {myProjects.map((project) => (
          <Card
            className="flex w-full max-w-2xl flex-col justify-between"
            key={project.title}
          >
            <CardHeader>
              <Image
                className="aspect-video w-full object-cover object-top shadow-md"
                src={project.imageSrc}
                alt={`picture of ${project.title} project`}
                width={200}
                height={100}
              />
            </CardHeader>

            <CardContent className="flex flex-col items-center gap-4 text-center">
              <CardTitle className="font-Montserrat">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
              <span>
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant={"secondary"}>
                    {tech}
                  </Badge>
                ))}
              </span>
            </CardContent>

            <CardFooter className="items-center justify-center gap-2">
              <Button>
                <a
                  href={project.siteLink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Visit site
                </a>
                <ExternalLinkIcon />
              </Button>

              <Button variant={"secondary"}>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Check repository
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
