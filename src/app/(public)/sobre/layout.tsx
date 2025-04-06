import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Sobre - Raphael Elias",
  description:
    "Conheça um pouco mais sobre Raphael Elias e sua trajetória ate aqui.",
};

export default function SobreLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
