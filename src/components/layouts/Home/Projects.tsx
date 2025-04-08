"use client";

// next imports
import Link from "next/link";
import Image from "next/image";

// ui imports
import { Button } from "../../ui/button";

// icon imports
import { SiGithub } from "@icons-pack/react-simple-icons";
import { ChevronRight, Globe } from "lucide-react";

// motion imports
import { motion } from "motion/react";

import { projectsData } from "@/utils/constants";
import { Badge } from "@/components/ui/badge";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function Projects() {
  return (
    <section
      className="custom-section flex min-h-dvh flex-col items-center justify-center space-y-16"
      id="portfolio"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex w-full flex-row items-center justify-between"
      >
        <h2 className="title">Projetos Em Destaque</h2>
        <Link href="/portfolio">
          <Button variant={"linkBlue"} size={"lg"}>
            Ver Todos <ChevronRight />
          </Button>
        </Link>
      </motion.div>

      <article className="grid grid-cols-1 gap-x-4 gap-y-10 lg:grid-cols-2">
        {projectsData.slice(0, 2).map((project, index) => (
          <div
            className="group rounded-2.5xl relative col-span-1 flex h-full w-full flex-col justify-between gap-7 border p-2 md:rounded-3xl md:p-3"
            key={index}
          >
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="relative aspect-video overflow-hidden rounded-xl border p-2 shadow-lg">
              <Image
                src={project.imageSrc}
                alt={project.title}
                fill
                quality={100}
                className="object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>

            <div className="space-y-3">
              <h3 className="text-xl transition-colors duration-300 ease-in-out group-hover:text-sky-500">
                {project.title}
              </h3>

              <p className="text-muted-foreground">{project.description}</p>
              <div className="flex flex-row gap-1">
                {project.technologies.map((tech, index) => (
                  <Badge variant={"secondary"} key={index}>
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-row gap-2">
              <Button>
                <a
                  href={project.siteLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-row items-center gap-2"
                >
                  <Globe />
                  Site
                </a>
              </Button>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-row items-center gap-2"
              >
                <Button variant={"secondary"}>
                  <SiGithub />
                  Repositório
                </Button>
              </a>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
