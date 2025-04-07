import type { Metadata } from "next";
import "../globals.css";
import { Inter, Inter_Tight } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Providers from "@/components/ui/Providers";
import { Toaster } from "@/components/ui/toaster";
import { i18n } from "../i18n-config";
import { Locale } from "../i18n-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

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
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang === "pt" ? "pt-BR" : params.lang}>
      <body className={`${inter.variable} ${interTight.variable} antialiased`}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
