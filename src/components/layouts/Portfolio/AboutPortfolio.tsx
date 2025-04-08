// next imports
import Link from "next/link";

// utils imports
import { socialLinks } from "@/utils/constants";

export default function AboutPortfolio() {
  return (
    <section className="custom-section my-32 flex flex-col items-center justify-center gap-y-6 lg:flex-row">
      <article className="flex w-full max-w-md flex-col">
        <h4 className="title">Sobre</h4>
        <p className="description text-balance">
          Essa área é destinada à apresentar meus projetos mais relevantes e
          mostrar minhas habilidades como desenvolvedor através de casos reais
          de aplicação.
        </p>
      </article>

      <article className="w-full max-w-xs max-sm:mr-auto">
        <ul className="mr-auto">
          <li className="font-semibold">Contato</li>
          {socialLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link
                  aria-label={`link para ${link.title}`}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="cursor-pointer hover:underline"
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
}
