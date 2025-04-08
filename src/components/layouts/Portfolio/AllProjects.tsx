// ui imports
import { Button } from "@/components/ui/button";

// icon imports
import { Globe } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { projectsData } from "@/utils/constants";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function AllProjects() {
  return (
    <section className="custom-section mt-32">
      <h2 className="title">Mais Projetos</h2>
      <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {projectsData.slice(2).map((project, index) => (
          <div
            className="rounded-2.5xl relative col-span-1 flex h-full flex-col justify-between gap-4 border p-2 md:rounded-3xl md:p-3"
            key={index}
          >
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />

            <div className="relative aspect-video overflow-hidden rounded-2xl border shadow-lg">
              <Image
                src={project.imageSrc}
                alt={project.title}
                fill
                quality={100}
                className="object-cover object-center"
              />
            </div>
            <h3 className="title">{project.title}</h3>
            <p className="description">{project.description}</p>
            <div className="flex flex-row gap-1">
              {project.technologies.map((tech, index) => (
                <Badge variant={"secondary"} key={index}>
                  {tech.name}
                </Badge>
              ))}
            </div>
            <div className="flex flex-row items-center gap-2">
              <Button asChild>
                <a
                  href={project.siteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe />
                  Site
                </a>
              </Button>
              <Button variant={"secondary"} asChild>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGithub />
                  Repositório
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
