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

export default function Navbar() {
  return (
    <header>
      <nav
        aria-label="menu de navegação"
        className="flex flex-row items-center justify-around"
      >
        {/* EMAIL E DOWNLOAD DE CURRICULO NO DESKTOP */}
        <div className="hidden flex-row items-center gap-4 md:flex">
          <p className="text-xs font-light">raphaeleliass@outlook.com</p>
          <Button variant={"secondary"} aria-label="Botão para copiar e-mail">
            copiar <Copy />
          </Button>

          <Button aria-label="botão para baixar currículo">
            CV <Download />
          </Button>
        </div>

        {/* EMAIL E DOWNLOAD DE CURRICULO NO MOBILE */}
        <NavigationMenu className="md:hidden">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger aria-label="botão para abrir menu">
                <MenuIcon className="size-5" />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="space-y-2 px-4 py-6">
                  <li className="text-xs">
                    <span className="flex flex-row items-center gap-2">
                      raphaeleliass@outlook.com
                      <Button
                        variant={"ghost"}
                        className="px-2 py-0"
                        aria-label="botão para copiar e-mail"
                      >
                        <Copy />
                      </Button>
                    </span>
                  </li>
                  <li>
                    <Separator />
                  </li>
                  <li className="flex items-center justify-center">
                    <Button
                      className="w-full"
                      aria-label="botão para baixar curriculo"
                    >
                      Baixar CV <Download />
                    </Button>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <SocialLinks />
      </nav>
    </header>
  );
}
