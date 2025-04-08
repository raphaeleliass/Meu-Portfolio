// ui imports
import { Button } from "@/components/ui/button";
import { projectsData } from "@/utils/constants";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Globe } from "lucide-react";
import Image from "next/image";

export default function Spotlight() {
  return (
    <section className="custom-section">
      <article className="flex flex-col gap-7">
        {projectsData.slice(0, 2).map((project, index) => (
          <div
            className="group relative aspect-video overflow-hidden rounded-2xl border shadow-lg"
            key={index}
          >
            <Image
              src={project.imageSrc}
              alt="imagem do projeto"
              fill
              className="object-cover object-center"
            />
            <div className="bg-foreground/30 absolute inset-0 flex items-center justify-center opacity-0 backdrop-blur-lg transition-all group-hover:opacity-100 gap-2">
              <Button variant={"default"}>
                <Globe />
                Site
              </Button>
              <Button variant={"secondary"}>
                <SiGithub />
                Repositório
              </Button>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
