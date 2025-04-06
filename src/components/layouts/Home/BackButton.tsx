"use client";
import React from "react";
import { Button } from "../../ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  function handleBackHome() {
    router.replace("/");
  }

  return (
    <div className="w-full p-5">
      <Button
        aria-label="botão para voltar ao inicio"
        variant={"secondary"}
        onClick={handleBackHome}
      >
        <ChevronLeft />
        Voltar
      </Button>
    </div>
  );
}
