// next imports
import Link from "next/link";

// components imports
import ContactForm from "../../forms/contact-form";

// utils imports
import { socialLinks } from "@/utils/constants";

export default function Contact() {
  return (
    <section
      id="contato"
      className="custom-section flex min-h-dvh flex-col items-center justify-center lg:flex-row"
    >
      <article className="flex flex-col items-start justify-center text-center max-sm:max-w-xs lg:w-1/2 lg:items-center lg:text-left">
        <div className="w-full space-y-2">
          <h2 className="title">Vamos nos conectar!</h2>
          <p className="description max-w-md text-balance">
            Me envie uma mensagem ou entre em contato pelas redes sociais.
          </p>
        </div>
        <div className="mt-7 flex w-auto flex-col gap-5 lg:w-full">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <Link
                aria-label={`Link para rede social ${link.title} `}
                key={index}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-row gap-3 transition-colors duration-200 hover:text-sky-600"
              >
                <Icon /> {link.title}
              </Link>
            );
          })}
        </div>

        <div className="mt-10 flex w-auto flex-row items-center gap-2 lg:w-full">
          <span className="size-2 animate-pulse rounded-full bg-green-500" />
          <p className="description">Disponível para novos projetos</p>
        </div>
      </article>

      <article className="mt-12 flex w-full flex-col justify-center max-sm:max-w-xs lg:w-1/2 lg:px-5">
        <ContactForm />
      </article>
    </section>
  );
}
