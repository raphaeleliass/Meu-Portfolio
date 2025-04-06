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

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      viewport={{ once: true }}
      className="custom-section flex min-h-dvh flex-col items-center justify-center space-y-16"
      id="portfolio"
    >
      <div className="flex w-full flex-row items-center justify-between">
        <h2 className="title">Projetos Em Destaque</h2>
        <Link href="/portfolio">
          <Button variant={"linkBlue"} size={"lg"}>
            Ver Todos <ChevronRight />
          </Button>
        </Link>
      </div>

      <article className="grid grid-cols-1 gap-x-4 gap-y-10 lg:grid-cols-2">
        {Array.from({ length: 2 }, (_, index) => (
          <div className="group col-span-1 w-full space-y-7" key={index}>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src={
                  "https://images.pexels.com/photos/31416900/pexels-photo-31416900/free-photo-of-monte-yotei-nevado-sob-nuvens-dramaticas.jpeg"
                }
                alt="nuvens"
                fill
                quality={100}
                className="object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>

            <div className="space-y-3">
              <h3 className="text-xl transition-colors duration-300 ease-in-out group-hover:text-sky-500">
                Projeto
              </h3>

              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                itaque. Voluptate neque natus, sed minus delectus nobis culpa
                adipisci tempore excepturi quam incidunt distinctio placeat ab
                ipsam doloremque. Odit, est?
              </p>
              <p>Next, react, typescript</p>
            </div>

            <div className="flex flex-row gap-2">
              <Button>
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
    </motion.section>
  );
}
