"use client";
import React, { useLayoutEffect } from "react";
import { Section } from "./ui/section";
import Image from "next/image";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipProvider } from "./ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import {
  SiGithub,
  SiLinkedin,
  SiWhatsapp,
} from "@icons-pack/react-simple-icons";
import gsap from "gsap";

export default function Hero() {
  useLayoutEffect(() => {
    gsap.fromTo(
      ".hero-item",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.1,
      },
    );
  }, []);

  return (
    <Section className="hero-item flex-row">
      <div className="hero-item flex flex-col justify-center md:w-1/2 lg:items-start">
        <span>
          <h3 className="hero-item text-sm font-light">
            Hey, I&apos;m Raphael
          </h3>
          <h2 className="hero-item mt-2 font-Poppins text-5xl font-bold md:text-7xl">
            Web Developer, <br /> Data Analyst, <br />{" "}
            <strong className="text-muted-foreground">Creator.</strong>
          </h2>
        </span>

        <span className="hero-item mt-6">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="hero-item rounded-full"
                  variant={"ghost"}
                  aria-label="button with linkedin icon"
                >
                  <a
                    href="https://linkedin.com/in/raphaeleliass"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <SiLinkedin />
                  </a>
                </Button>
              </TooltipTrigger>

              <TooltipContent>
                <p>Linkedin</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="hero-item rounded-full"
                  variant={"ghost"}
                  aria-label="button with github icon"
                >
                  <a
                    href="https://github.com/raphaeleliass"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <SiGithub />
                  </a>
                </Button>
              </TooltipTrigger>

              <TooltipContent>
                <p>GitHub</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="hero-item rounded-full"
                  variant={"ghost"}
                  aria-label="button with whatsapp icon"
                >
                  <a
                    href="https://wa.me/5528999763920"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <SiWhatsapp />
                  </a>
                </Button>
              </TooltipTrigger>

              <TooltipContent>
                <p>Resume</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </span>
      </div>
      <div className="hero-item relative hidden items-center justify-end md:w-1/2 lg:flex">
        <Image
          className="z-50 size-96 rounded rounded-br-2xl rounded-tl-2xl drop-shadow-xl saturate-0"
          src={"https://github.com/raphaeleliass.png"}
          alt="Raphael's profile picture"
          width={200}
          height={200}
        />

        <div className="absolute size-96 -translate-x-6 -translate-y-6 rounded rounded-tl-3xl outline outline-1 outline-muted-foreground" />
      </div>
    </Section>
  );
}
