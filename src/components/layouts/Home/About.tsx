"use client";

// next imports
import Link from "next/link";
import Image from "next/image";

// ui imports
import { Button } from "../../ui/button";

// icons imports
import { ChevronRight } from "lucide-react";

// motion imports
import { motion } from "motion/react";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      viewport={{ once: true }}
      className="custom-section mt-32 flex h-dvh flex-col items-center justify-center lg:flex-row"
      id="sobre"
    >
      <div className="bg-secondary group relative flex h-100 w-2/3 items-center justify-center rounded-lg border drop-shadow-lg transition-all duration-300 hover:scale-105">
        <Image
          className="relative rounded-2xl object-cover object-center p-3 transition-all duration-300 group-hover:rotate-2"
          src={"https://github.com/raphaeleliass.png"}
          alt="Imagem de perfil de Raphael Elias"
          fill
          quality={100}
        />
      </div>

      <div className="flex flex-col gap-7 p-7 lg:p-10">
        <h3 className="title text-2xl font-semibold">Sobre</h3>
        <span className="font-inter text-muted-foreground w-full max-w-6xl space-y-3 text-base text-balance">
          <p>
            Muito prazer! Sou <strong>Raphael Elias</strong>.
          </p>
          <p>
            Desenvolvedor Front-End com experiência em React, Next.js e
            TypeScript. Sou apaixonado por criar interfaces de usuário
            envolventes e funcionais. Estou sempre em busca de novos desafios e
            oportunidades para aprender e crescer na área de desenvolvimento.
          </p>
        </span>
        <Link href={"/sobre"} target="_blank" rel="noopener noreferrer">
          <Button
            variant={"linkBlue"}
            aria-label="botão para ver descrição sobre completa"
          >
            Ver Mais <ChevronRight />
          </Button>
        </Link>
      </div>
    </motion.section>
  );
}
