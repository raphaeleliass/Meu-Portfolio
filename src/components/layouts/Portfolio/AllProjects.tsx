// ui imports
import { Button } from "@/components/ui/button";

// icon imports
import { Globe } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

export default function AllProjects() {
  return (
    <section className="custom-section mt-32">
      <h2 className="title">Mais Projetos</h2>
      <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {Array.from({ length: 3 }, (_, index) => (
          <div className="col-span-1 space-y-4" key={index}>
            <div className="aspect-video rounded-2xl bg-zinc-300" />
            <h3 className="title">Project</h3>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <Button>
              <Globe />
              Site
            </Button>
            <Button variant={"secondary"}>
              <SiGithub />
              Repositório
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
