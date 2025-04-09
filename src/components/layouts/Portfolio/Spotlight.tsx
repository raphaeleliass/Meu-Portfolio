// ui imports
import LinkButtons from "@/components/ui/link-buttons";
import { projectsData } from "@/utils/constants";

import Image from "next/image";

export default function Spotlight() {
  return (
    <section className="custom-section">
      <article className="flex flex-col gap-7">
        {projectsData.slice(0, 2).map((project, index) => (
          <div className="group w-full rounded-2xl" key={index}>
            <div className="relative aspect-video overflow-hidden rounded-2xl shadow-lg">
              <Image
                className="object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
                src={project.imageSrc}
                alt={`imagem do projeto ${project.title}`}
                fill
                quality={100}
                priority
              />
            </div>
            <div className="mt-5 flex w-full flex-row items-center justify-between">
              <h3 className="text-xl">{project.title}</h3>{" "}
              <LinkButtons
                hrefSite={project.siteLink}
                hrefRepo={project.repoLink}
              />
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
