"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Button } from "./ui/button";
import { ArrowDown, ArrowRight, ExternalLink } from "lucide-react";

export default function Hero() {
  const arrowDownRef = useRef(null);
  const [ArrowTimeOut, setArrowTimeOut] = useState<boolean>(false);
  const [IntervalAnimation, setIntervalAnimation] = useState<boolean>(false);

  useEffect(() => {
    gsap.fromTo(".relative", { opacity: 0 }, { opacity: 1, duration: 1 });

    gsap.fromTo(".rounded-full", { opacity: 0 }, { opacity: 1, delay: 1 });

    const interval = setInterval(() => {
      setIntervalAnimation((prev) => !prev);
    }, 1500);

    const timeOut = setTimeout(() => {
      setArrowTimeOut(true);
    }, 3000);

    function arrowHide() {
      if (window.scrollY > 0) {
        setArrowTimeOut(false);
      }
    }

    window.addEventListener("scroll", arrowHide);

    return () => {
      gsap.killTweensOf(".relative");
      gsap.killTweensOf(".rounded-full");
      clearInterval(interval);
      clearTimeout(timeOut);
      arrowHide();
    };
  }, []);

  return (
    <section className="container relative z-40 flex items-center justify-center">
      <span className="absolute z-50 px-4 py-32 backdrop-blur-2xl">
        <p className="text-sm text-muted-foreground">Hey! I&apos;m Raphael!</p>
        <h2 className="font-Poppins text-7xl font-bold text-zinc-300 drop-shadow-xl md:text-6xl">
          Web Developer, <br />
          Data Analyst, <br />
          Creator.
        </h2>
        <div className="mt-8 flex flex-col gap-4 md:flex-row">
          <Button variant={"secondary"}>
            <a
              href="https://github.com/raphaeleliass"
              target="_blank"
              rel="noreferrer noopener"
            >
              Meet my repositories
            </a>
            <ExternalLink />
          </Button>
          <Button variant={"ghost"}>
            <a href="#projects">Discover my projects</a>
            <ArrowRight />
          </Button>
        </div>
        <ArrowDown
          className={`absolute bottom-0 right-52 animate-bounce transition-all duration-1000 md:right-60 ${ArrowTimeOut ? "opacity-100" : "opacity-0"}`}
          ref={arrowDownRef}
        />
      </span>
      <div
        className={`z-10 rounded-full bg-zinc-800 duration-1000 ease-linear ${IntervalAnimation ? "size-[20rem]" : "size-[16rem]"}`}
      />
    </section>
  );
}
