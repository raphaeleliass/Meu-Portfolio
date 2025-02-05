"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopBtn() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <Button
      className="fixed bottom-4 right-4 z-50 size-12 rounded-full"
      variant={"default"}
      onClick={scrollToTop}
    >
      <ArrowUp />
    </Button>
  );
}
