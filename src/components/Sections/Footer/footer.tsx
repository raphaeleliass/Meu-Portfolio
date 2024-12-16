import myLinks from "@/data/myLinks";
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiWhatsapp,
} from "@icons-pack/react-simple-icons";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex min-h-[30dvh] flex-col items-center justify-center gap-6">
      <h2 className="font-Montserrat text-2xl font-light">My social medias</h2>
      <div className="flex flex-row gap-4">
        {myLinks.map((link) => (
          <a
            key={link.title}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.title === "Github" && <SiGithub />}
            {link.title === "Linkedin" && <SiLinkedin />}
            {link.title === "Whatsapp" && <SiWhatsapp />}
            {link.title === "Instagram" && <SiInstagram />}
          </a>
        ))}
      </div>
    </footer>
  );
}
