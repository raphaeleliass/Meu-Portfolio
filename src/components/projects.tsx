import { myProjects } from "@/data/myprojects";
import React from "react";
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
import { ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section className="">
      <h2 className="text-3xl font-semibold md:text-4xl">Discover</h2>

      <div className="container mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {myProjects.map((project) => (
          <Card
            className="flex flex-col justify-between bg-neutral-900"
            key={project.title}
          >
            <CardHeader>
              <Image
                className="aspect-video w-full object-cover object-top rounded-lg"
                src={project.imageSrc}
                alt={project.title}
                width={100}
                height={100}
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
                  Check repository
                </a>
                <ExternalLink />
              </Button>

              <Button className="w-full" variant={"secondary"}>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Check site
                </a>
                <ExternalLink />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
