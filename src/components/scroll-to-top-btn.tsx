"use client";
import React from "react";
import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopBtn() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <Button
      className="fixed bottom-4 right-4 rounded-full"
      variant={"secondary"}
      onClick={scrollToTop}
    >
      <ArrowUp />
    </Button>
  );
}
