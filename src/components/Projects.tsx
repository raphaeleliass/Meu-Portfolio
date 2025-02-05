import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { projectsData } from "@/data/projectsData";
export default function Projects() {
  return (
    <section id="projects" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Featured Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  className="h-full w-full object-cover object-top shadow-sm transition-transform duration-300 group-hover:scale-105"
                  src={project.imageSrc}
                  alt={project.title}
                  priority
                  width={500}
                  height={500}
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-semibold">{project.title}</h3>
                <p className="mb-4 text-secondary">{project.description}</p>
              </div>
              <div className="flex gap-4 px-6 pb-6">
                <Button variant="default" size="sm" asChild>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiGithub />
                    Code
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.siteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink />
                    Live
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
