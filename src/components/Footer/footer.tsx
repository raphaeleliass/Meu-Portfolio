import { Handshake } from "lucide-react";
import { Button } from "../ui/button";
import { Mail } from "lucide-react";
import SocialLinks from "../SocialLinks/socialLinks";

export default function Footer() {
  return (
    <section className="container relative flex items-center justify-center rounded-t-custom bg-background pb-44 pt-32">
      <div className="flex flex-col items-center justify-center gap-10">
        <Handshake className="size-12 md:size-14" />
        <h2 className="max-w-sm text-center font-Playfair text-3xl font-bold md:max-w-xl md:text-5xl">
          Me conte sobre seu próximo projeto
        </h2>

        <div className="flex w-full max-w-xs flex-col items-center justify-center gap-4 md:max-w-min md:flex-row">
          <Button className="w-full" variant={"outline"}>
            <Mail />
            <a
              href="mailto:raphaeleliass@outlook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </Button>
          <Button className="w-full" variant={"secondary"}>
            <a
              className="h-full w-full"
              href="https://wa.me/5528999763920"
              target="_blank"
              rel="noreferrer noopener"
            >
              Whatsapp
            </a>
          </Button>
        </div>

        <span className="absolute bottom-3 flex w-full flex-col-reverse items-center justify-center md:flex-row md:justify-between md:px-20">
          <p className="text-sm text-muted-foreground">
            © 2024 Todos os direitos reservados.
          </p>

          <SocialLinks />
        </span>
      </div>
    </section>
  );
}
