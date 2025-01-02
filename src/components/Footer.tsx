import { linksData } from "@/data/linksData";
import React from "react";
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiWhatsapp,
} from "@icons-pack/react-simple-icons";

export default function Footer() {
  return (
    <footer className="relative py-32">
      <div className="flex flex-col items-center justify-center text-center">
        <h3 className="text-center font-Poppins text-2xl font-semibold md:text-3xl">
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
              {link.title === "Whatsapp" && (
                <SiWhatsapp className="transition-all hover:size-8" />
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
        <p className="mt-4 text-sm text-muted-foreground">
          Find me on social media
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
