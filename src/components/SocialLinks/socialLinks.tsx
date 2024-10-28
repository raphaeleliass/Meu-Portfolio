import { Button } from "../ui/button";

export default function SocialLinks() {
  return (
    <div className="flex flex-row items-center justify-center text-xs">
      <Button
        variant={"link"}
        className="text-xs"
        aria-label="botão que redireciona para o site linkedin"
      >
        <a
          rel="noreferrer noopener"
          target="_blank"
          href="https://linkedin.com/in/raphaeleliass"
        >
          Linkedin
        </a>
      </Button>
      /
      <Button
        variant={"link"}
        className="text-xs"
        aria-label="botão que redireciona para o site github"
      >
        <a
          rel="noreferrer noopener"
          target="_blank"
          href="https://github.com/raphaeleliass"
        >
          Github
        </a>
      </Button>
      /
      <Button
        variant={"link"}
        className="text-xs"
        aria-label="botão que redireciona para o site instagram"
      >
        <a
          rel="noreferrer noopener"
          target="_blank"
          href="https://instagram.com/raphaeleliass"
        >
          Instagram
        </a>
      </Button>
    </div>
  );
}
