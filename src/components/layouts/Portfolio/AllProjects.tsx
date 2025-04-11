//next imports
import Image from "next/image";

// component imports
import { Badge } from "@/components/ui/badge";
import LinkButtons from "@/components/ui/link-buttons";

// constants imports
import { projectsData } from "@/utils/constants";

export default function AllProjects() {
  return (
    <section className="custom-section mt-32">
      <h2 className="title">Mais Projetos</h2>
      <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {projectsData.slice(2).map((project, index) => (
          <div
            className="relative col-span-1 flex h-full flex-col justify-between gap-4"
            key={index}
          >
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
            <LinkButtons
              hrefRepo={project.repoLink}
              hrefSite={project.siteLink}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
