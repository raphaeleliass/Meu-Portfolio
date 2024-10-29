"use client";
import { Copy, Download, MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Separator } from "../ui/separator";
import SocialLinks from "../SocialLinks/socialLinks";
import { useState } from "react";
import { ModeToggle } from "../ui/mode-toggle";

export default function Navbar() {
  const [isCopy, setCopy] = useState<boolean>(false);
  function copyToClipboard() {
    navigator.clipboard.writeText("raphaeleliass@outlook.com");
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  }

  return (
    <header>
      <nav
        aria-label="menu de navegação"
        className="flex flex-row items-center justify-around"
      >
        {/* EMAIL E DOWNLOAD DE CURRICULO NO DESKTOP */}
        <div className="hidden flex-row items-center gap-4 md:flex">
          <Button
            variant={"outline"}
            className="relative text-xs disabled:opacity-100"
            onClick={copyToClipboard}
            aria-label="botão para copiar o email"
            disabled={isCopy ? true : false}
          >
            raphaeleliass@outlook.com <Copy />
            <div
              className={`absolute -bottom-4 right-2 rounded-full bg-green-500 px-2 py-px text-xs font-semibold text-white shadow-lg transition-all after:absolute after:bottom-full after:right-3 after:border-4 after:border-transparent after:border-b-green-500 ${isCopy ? "opacity-100" : "opacity-0"}`}
            >
              copiado
            </div>
          </Button>

          <Button
            aria-label="botão para baixar currículo"
            variant={"secondary"}
          >
            <Download />
            <a href="/curriculo.pdf" target="_blank" rel="noreferrer noopener">
              Baixar CV
            </a>
          </Button>
        </div>

        {/* EMAIL E DOWNLOAD DE CURRICULO NO MOBILE */}
        <div className="flex flex-row gap-2 md:hidden">
          <NavigationMenu className="md:hidden">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  aria-label="botão para abrir menu"
                  className="bg-secondary shadow-md dark:bg-background"
                >
                  <MenuIcon className="size-5" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="space-y-2 px-4 py-6">
                    <li className="text-xs">
                      <Button
                        variant={"secondary"}
                        className="relative text-xs disabled:opacity-100"
                        onClick={copyToClipboard}
                        aria-label="botão para copiar o email"
                        disabled={isCopy ? true : false}
                      >
                        raphaeleliass@outlook.com <Copy />
                        <div
                          className={`absolute -bottom-3 right-1 rounded-full bg-green-500 px-2 py-px text-xs font-semibold text-white shadow-lg transition-all after:absolute after:bottom-full after:right-4 after:border-4 after:border-transparent after:border-b-green-500 ${isCopy ? "opacity-100" : "opacity-0"}`}
                        >
                          copiado
                        </div>
                      </Button>
                    </li>
                    <li>
                      <Separator />
                    </li>
                    <li className="flex items-center justify-center">
                      <Button
                        variant={"secondary"}
                        className="w-full"
                        aria-label="botão para baixar curriculo"
                      >
                        <Download />
                        <a
                          href="/curriculo.pdf"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          Baixar CV
                        </a>
                      </Button>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <ModeToggle />
        </div>

        <div className="flex w-auto flex-row gap-2">
          <SocialLinks />
          <span className="hidden md:flex">
            <ModeToggle />
          </span>
        </div>
      </nav>
    </header>
  );
}
