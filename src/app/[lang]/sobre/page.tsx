import Introducing from "@/components/layouts/Sobre/Introducing";
import BackButton from "@/components/layouts/Home/BackButton";
import React from "react";

export default function Page() {
  const date = new Date().getFullYear();
  return (
    <>
      <main>
        <BackButton />
        <Introducing />
      </main>

      <footer className="custom-section w-full">
        <p className="text-muted-foreground">{date}&copy; Raphael Elias</p>
      </footer>
    </>
  );
}
