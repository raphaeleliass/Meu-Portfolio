import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Raphael Elias - Links",
  description:
    "Descubra os principais links das redes sociais de Raphael Elias.",
};

export default function LinksLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
