import { Button } from "@/components/ui/button";
import { House } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Locale } from "../i18n-config";
import { getDictionary } from "@/dictionaries";

export default async function NotFound({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  return (
    <section className="h-dvh place-content-center justify-items-center">
      <article className="flex max-w-sm flex-col items-start justify-center">
        <h1 className="font-inter to mx-auto bg-pink-700 bg-gradient-to-tr from-sky-700 via-indigo-500 bg-clip-text text-9xl font-black text-transparent drop-shadow-xl">
          404
        </h1>

        <p className="mx-auto mt-4 text-center text-2xl">
          {dict.notFound.title}
        </p>
        <p className="font-inter-tight mt-4 text-center">
          {dict.notFound.description}
        </p>

        <Link className="mx-auto mt-10" href={`/${lang}`}>
          <Button variant={"secondary"}>
            <House />
            {dict.notFound.button}
          </Button>
        </Link>
      </article>
    </section>
  );
}
