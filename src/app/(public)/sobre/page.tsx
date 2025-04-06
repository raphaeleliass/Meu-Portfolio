import BackButton from "@/components/layouts/Home/BackButton";
import Introducing from "@/components/layouts/Sobre/Introducing";
import React from "react";
import { date } from "zod";

export default function Page() {
  const date = new Date().getFullYear();
  return (
    <>
      <main>
        <BackButton />
        <Introducing />
      </main>

      <footer className="custom-section w-full">
        <p>{date}&copy; Raphael Elias</p>
      </footer>
    </>
  );
}
