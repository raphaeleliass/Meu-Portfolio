import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Portfólio - Raphael Elias",
  description:
    "Conheça o portfólio de Raphael Elias com seus principais projetos e mais recentes.",
};

export default function PageLAYOUT({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
