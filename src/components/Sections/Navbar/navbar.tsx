"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

export default function Navbar() {
  return (
    <header className="container flex w-full justify-end px-2 py-4">
      <nav role="navigation">
        <Button>
          <a
            href="https://wa.me/5528999763920?text=Olá, ví seu portfólio. Podemos conversar?"
            target="_blank"
            rel="noreferrer noopener"
          >
            Get in touch
          </a>
          <ArrowRight />
        </Button>
      </nav>
    </header>
  );
}
