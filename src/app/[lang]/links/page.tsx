// next imports
import Image from "next/image";
import Link from "next/link";

// component imports
import { WavyBackground } from "@/components/ui/wavy-background";

// icon imports
import { BriefcaseBusiness } from "lucide-react";

// utils imports
import { socialLinks } from "@/utils/constants";

export default function Page() {
  return (
    <main className="w-full bg-black font-light text-zinc-300">
      <WavyBackground
        className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center"
        speed="fast"
        colors={[
          "oklch(0.585 0.233 277.117)",
          "oklch(0.645 0.246 16.439)",
          "#fff",
        ]}
      >
        <div className="group w-full max-w-xs rounded-xl bg-black/40 backdrop-blur-2xl">
          <div className="relative aspect-square overflow-hidden rounded-t-2xl after:absolute after:inset-0 after:bg-gradient-to-t after:from-black after:via-transparent after:to-transparent">
            <Image
              src={"https://github.com/raphaeleliass.png"}
              alt="foto de raphael elias"
              fill
              quality={100}
              priority
              className="object-cover object-top brightness-75 transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>

          <div className="space-y-4 p-4">
            <h1 className="title">Raphael Elias</h1>
            <p className="text-sm">
              Desenvolvedor Front-End com experiência em React, Next.js e
              TypeScript. Sou apaixonado por criar interfaces de usuário
              funcionais. Estou sempre em busca de novos desafios e
              oportunidades para aprender e crescer na área de desenvolvimento.
            </p>
            <ul className="flex flex-row gap-3">
              <li>
                <Link
                  href={"https://raphaelelias.tech"}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="transition-colors duration-300 ease-in-out hover:text-cyan-600"
                >
                  <BriefcaseBusiness size={22} />
                </Link>
              </li>
              {socialLinks.map((link, index) => {
                const Icon = link.icon;

                return (
                  <li key={index}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="transition-colors duration-300 ease-in-out hover:text-cyan-600"
                    >
                      <Icon size={20} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </WavyBackground>
    </main>
  );
}
