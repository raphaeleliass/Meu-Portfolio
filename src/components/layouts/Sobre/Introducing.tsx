import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/ui/timeline";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React, { useMemo } from "react";

export default function Introducing() {
  const certificates = useMemo(
    () => [
      {
        title: "Gestão de Projetos",
        href: "/certificados/softskill/GESTAO_DE_PROJETOS.pdf",
      },
      {
        title: "Análise de Dados com Python",
        href: "/certificados/python/analise_dados_python.pdf",
      },
      {
        title: "Argumentação e Análise de Discurso",
        href: "/certificados/softskill/ARGUMENTACAO_E_ANALISE_DE_DISCURSO.pdf",
      },
      {
        title: "Comunicação em Negócios e Mídias Sociais",
        href: "/certificados/softskill/COMUNICACAO_EM_NEGOCIOS_E_MIDIAS_SOCIAIS.pdf",
      },
      {
        title: "Tecnologia, Direito Digital e Propriedade Intelectual",
        href: "/certificados/softskill/TECNOLOGIA_DIREITO_DIGITAL_E_PROPRIEDADE_INTELECTUAL.pdf",
      },
    ],
    [],
  );

  const data = useMemo(
    () => [
      {
        title: "2022 — Início",
        content: (
          <div>
            <h2 className="title">Primeiros Passos</h2>
            <p className="description">
              Em janeiro de 2022 iniciei minha trajetória no desenvolvimento
              web, começando pelos fundamentos: HTML, CSS e JavaScript.
            </p>
            <p className="description">
              Nos meses seguintes, mergulhei em cursos online para consolidar
              essa base e compreender o ecossistema da web moderna.
            </p>
            <p className="description">
              Ainda em 2022, ingressei no curso de Análise e Desenvolvimento de
              Sistemas, expandindo meus conhecimentos técnicos de forma
              estruturada.
            </p>
          </div>
        ),
      },
      {
        title: "2023 — Avanço",
        content: (
          <div>
            <h2 className="title">Evolução e Primeiros Projetos</h2>
            <p className="description">
              Com a base sólida em mãos, avancei para tecnologias amplamente
              utilizadas no mercado como React, Next.js, TypeScript e
              TailwindCSS.
            </p>
            <p className="description">
              Paralelamente, comecei a atuar como freelancer, desenvolvendo
              páginas web modernas e funcionais, aplicando boas práticas e
              padrões de código.
            </p>

            <h3 className="mt-7">Certificados</h3>
            <ul className="">
              {certificates.map((certificate, index) => (
                <li key={index}>
                  <Link href={certificate.href}>
                    <Button variant={"linkBlue"} size={"sm"}>
                      {certificate.title} <ExternalLink />
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ),
      },
      {
        title: "2024 — Transição",
        content: (
          <div>
            <h2 className="title">Vivência no Setor Público e Transição</h2>
            <p className="description">
              No segundo semestre de 2024, iniciei minha atuação no Procon
              municipal da minha cidade. Após três meses de experiência valiosa
              no setor público, optei por seguir um novo caminho, decidindo
              empreender e focar na minha microempresa.
            </p>

            <h3 className="mt-7">Certificados</h3>
            <ul>
              <li>
                <Link href={"/certificados/procon/PROCON.pdf"}>
                  <Button variant={"linkBlue"} size={"sm"}>
                    Certificado de participação no Encontro de Procons Capixabas{" "}
                    <ExternalLink />
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: "2025 — Presente",
        content: (
          <div>
            <h2 className="title">Atuação Profissional</h2>
            <p className="description">
              Em 2025, oficializei minha jornada empreendedora com a abertura da
              minha microempresa. Atualmente, atuo como desenvolvedor
              freelancer, aplicando as tecnologias que domino em projetos reais
              e desafiadores.
            </p>
          </div>
        ),
      },
    ],
    [certificates],
  );
  return (
    <section className="custom-section relative">
      <Timeline data={data} />

      <article className="custom-section flex h-[50dvh] flex-col items-start justify-center">
        <h2 className="text-5xl font-semibold">Vamos nos conectar</h2>
        <Link
          className="text-5xl text-zinc-500 hover:underline"
          href={"/#contato"}
        >
          Entre em contato agora
        </Link>
      </article>
    </section>
  );
}
