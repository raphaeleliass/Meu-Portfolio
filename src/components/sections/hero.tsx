"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { Button } from "../ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function Hero() {
  const [IntervalAnimation, setIntervalAnimation] = useState<boolean>(false);

  useEffect(() => {
    gsap.fromTo(".relative", { opacity: 0 }, { opacity: 1, duration: 1 });

    gsap.fromTo(".rounded-full", { opacity: 0 }, { opacity: 1, delay: 1 });

    const interval = setInterval(() => {
      setIntervalAnimation((prev) => !prev);
    }, 1500);

    return () => {
      gsap.killTweensOf(".relative");
      gsap.killTweensOf(".rounded-full");
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative flex items-center justify-center">
      <span className="absolute z-50 mx-auto my-auto px-4 py-32 backdrop-blur-2xl">
        <p className="text-sm text-muted-foreground">
          Hey! I&apos;m Raphael 🤠
        </p>
        <h2 className="text-7xl font-bold text-zinc-300 drop-shadow-xl md:text-6xl">
          Web Developer, <br />
          Data Analyst, <br />
          Creator.
        </h2>
        <div className="mt-8 flex flex-col gap-4 md:flex-row">
          <Button variant={"secondary"}>
            <a href="">Meet my repositories</a>
            <ExternalLink />
          </Button>
          <Button variant={"outline"}>
            <a href="">Discover my projects</a>
            <ArrowRight />
          </Button>
        </div>
      </span>
      <div
        className={`z-10 rounded-full bg-zinc-800 duration-1000 ease-linear ${IntervalAnimation ? "size-[20rem]" : "size-[16rem]"}`}
      />
    </section>
  );
}
