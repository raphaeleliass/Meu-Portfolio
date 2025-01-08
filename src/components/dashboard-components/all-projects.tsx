import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ExternalLink, Loader2, LucideGlobe } from "lucide-react";
import useProjects from "@/hooks/use-projects";

export default function AllProjects() {
  const { loader, project } = useProjects();
  return (
    <div>
      {loader ? (
        <Loader2 className="size-10 animate-spin" />
      ) : (
        <div className="container flex flex-col items-center justify-center gap-12 py-20">
          <h2 className="font-Poppins text-xl font-semibold">All Projects</h2>

          <div className="container flex flex-row flex-wrap justify-center gap-2">
            {project.map((project) => (
              <Card
                className="project-items flex max-w-xs flex-col justify-between shadow-lg transition-all duration-300"
                key={project.id}
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
        </div>
      )}
    </div>
  );
}
