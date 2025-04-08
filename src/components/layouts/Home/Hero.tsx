"use client";

// next imports
import Link from "next/link";

// ui imports
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

// icon imports
import { ChevronRight, Download } from "lucide-react";

// utils imports
import { socialLinks } from "@/utils/constants";

// motion imports
import { motion } from "motion/react";

// component imports
import { FlipWords } from "@/components/ui/flip-words";
import Scene from "@/components/models/Scene";

const words = ["desafios", "criatividade", "inovação", "aprendizado"];

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", bounce: 0.6 }}
      className="custom-section mt-20 flex min-h-[80dvh] w-full flex-col items-start justify-center lg:mt-4 lg:flex-row lg:items-center lg:justify-between"
    >
      <article className="font-inter-tight w-full lg:w-1/2">
        <p className="font-light">
          Prazer, sou <strong>Raphael</strong> 🤠
        </p>

        <h1 className="text-5xl font-light tracking-tight text-balance lg:text-6xl">
          Desenvolvedor Frontend <br /> movido por <br />
          <FlipWords className="px-0 font-medium" words={words} />.
        </h1>

        <div className="mt-5 flex flex-col flex-wrap gap-2">
          <div className="mt-6 flex flex-row gap-2">
            <Button variant="default">
              <Link
                href="/portfolio"
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-row items-center gap-2"
              >
                Ver Portfólio <ChevronRight />
              </Link>
            </Button>
            <Button variant="link">
              <Link
                href={"/Curriculo_Raphael_Elias.pdf"}
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-row items-center gap-2"
              >
                Baixar Currículo <Download />
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-4 flex flex-row gap-4">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;

            return (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Link
                    aria-label="botão para abrir de rede social"
                    role="button"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="py-2 pr-2"
                  >
                    <Icon />
                  </Link>
                </TooltipTrigger>

                <TooltipContent>
                  <p>{link.title}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </article>

      <article className="relative mx-auto h-72 w-1/2 lg:h-100">
        <Scene />
      </article>
    </motion.section>
  );
}
