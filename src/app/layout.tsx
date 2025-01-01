import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Providers from "@/components/Providers";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "600", "700"],
  display: "swap",
  fallback: ["sans-serif", "arial"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "600", "700"],
  display: "swap",
  fallback: ["sans-serif", "arial"],
});

export const metadata: Metadata = {
  title: "Raphael Elias",
  description:
    "Explore meu portfólio, entre em contato e descubra meus projetos mais recentes",
  openGraph: {
    title: "Raphael Elias - Portfólio",
    description:
      "Explore meu portfólio, entre em contato e descubra meus projetos mais recentes",
    type: "website",
    locale: "pt_BR",
    url: "https://raphaelelias.tech",
    images: [
      {
        url: "https://raphaelelias.tech/desktop-preview.png",
        width: 800,
        height: 600,
        alt: "Miniatura do website de Raphael Elias",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@faeleliass",
    title: "Raphael Elias - Portfólio",
    description:
      "Explore meu portfólio, entre em contato e descubra meus projetos mais recentes",
    images: ["https://raphaelelias.tech/desktop-preview.png"],
  },
  authors: [{ name: "Raphael Elias", url: "https://github.com/raphaeleliass" }],
  keywords: [
    "desenvolvedor front-end",
    "designer ui/ux",
    "portfolio digital",
    "desenvolvimento web",
    "design de interfaces",
    "experiência do usuário",
    "desenvolvimento mobile",
    "projetos digitais",
    "web design",
    "programação web",
    "design responsivo",
    "freelancer",
    "React",
    "Next.js",
    "TypeScript",
  ],
  creator: "Raphael Elias",
  category: "website",
  robots: {
    follow: true,
    index: true,
    googleBot: {
      follow: true,
      index: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.variable} ${montserrat.variable} antialiased`}
      >
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
