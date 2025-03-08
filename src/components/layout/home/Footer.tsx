"use client";
import { linksData } from "@/data/linksData";
import React, { useState } from "react";
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
} from "@icons-pack/react-simple-icons";
import { Copy } from "lucide-react";

export default function Footer() {
  const [isEmailCopied, setEmailCopied] = useState<boolean>(false);

  function copyToClipboard() {
    navigator.clipboard.writeText("raphaeleliass@outlook.com");
    setEmailCopied(true);
    setTimeout(() => {
      setEmailCopied(false);
    }, 3000);
  }

  return (
    <footer className="relative py-32">
      <div className="flex flex-col items-center justify-center text-center">
        <h3 className="text-center font-poppins text-2xl font-semibold md:text-3xl">
          Let&apos;s connect!
        </h3>
        <span className="mt-4 flex flex-row gap-2">
          {linksData.map((link) => (
            <a
              className="p-2"
              role="button"
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              {link.title === "Github" && (
                <SiGithub className="transition-all hover:size-8" />
              )}
              {link.title === "Instagram" && (
                <SiInstagram className="transition-all hover:size-8" />
              )}
              {link.title === "Linkedin" && (
                <SiLinkedin className="transition-all hover:size-8" />
              )}
            </a>
          ))}
        </span>
        <p
          className={`relative mt-4 flex cursor-pointer flex-row items-center gap-2 text-sm text-muted-foreground`}
          onClick={copyToClipboard}
        >
          raphaeleliass@outlook.com <Copy size={16} />
          {isEmailCopied && (
            <span className="absolute -right-12 rounded-md bg-green-400 px-2 py-1 shadow-lg">
              Copied!
            </span>
          )}
        </p>
      </div>

      <p className="absolute bottom-2 left-0 right-0 w-full text-center text-xs text-muted-foreground">
        &copy; Created by{" "}
        <a
          className="hover:text-cyan-300 hover:underline hover:underline-offset-2"
          href="https://github.com/raphaeleliass"
          target="_blank"
          rel="noreferrer noopener"
        >
          Raphael Elias
        </a>
      </p>
    </footer>
  );
}
