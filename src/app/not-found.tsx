import { Button } from "@/components/ui/button";
import { House } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <section className="h-dvh place-content-center justify-items-center">
      <article className="flex max-w-sm flex-col items-start justify-center">
        <h1 className="font-inter to mx-auto bg-pink-700 bg-gradient-to-tr from-sky-700 via-indigo-500 bg-clip-text text-9xl font-black text-transparent drop-shadow-xl">
          404
        </h1>

        <p className="mx-auto mt-4 text-center text-2xl">
          Página não encontrada!
        </p>
        <p className="font-inter-tight mt-4 text-center">
          Desculpe, não conseguimos encontrar a página que você estava
          procurando. Você pode voltar para a página inicial clicando no botão
          abaixo.
        </p>

        <Link className="mx-auto mt-10" href={"/"}>
          <Button variant={"secondary"}>
            <House />
            Página Inicial
          </Button>
        </Link>
      </article>
    </section>
  );
}
