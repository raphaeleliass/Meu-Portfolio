import { Button } from "./button";
import { Globe } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { cn } from "@/lib/utils";

interface ButtonProps {
  hrefRepo: string;
  hrefSite: string;
  className?: string;
}

export default function LinkButtons({
  hrefRepo,
  hrefSite,
  className,
  ...props
}: ButtonProps) {
  return (
    <div
      className={cn("flex flex-row items-center gap-2", className)}
      {...props}
    >
      <Button>
        <a
          className="flex flex-row items-center gap-1"
          href={hrefSite}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Globe /> Site
        </a>
      </Button>
      <Button variant={"secondary"}>
        <a
          className="flex flex-row items-center gap-1"
          href={hrefRepo}
          target="_blank"
          rel="noreferrer noopener"
        >
          <SiGithub /> Repositório
        </a>
      </Button>
    </div>
  );
}
