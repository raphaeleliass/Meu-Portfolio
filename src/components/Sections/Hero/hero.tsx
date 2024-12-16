"use client";
import gsap from "gsap";
import { Button } from "../../ui/button";
import { ExternalLinkIcon } from "lucide-react";
import { useLayoutEffect, useRef } from "react";

export default function Hero() {
  const titleRef = useRef(null);
  const buttonRef = useRef(null);

  function titleAnimation() {
    const unsub = gsap.fromTo(
      titleRef.current,
      {
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
      },
    );

    return () => gsap.killTweensOf(unsub);
  }

  function buttonAnimation() {
    const unsub = gsap.fromTo(
      buttonRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.6 },
    );

    return () => gsap.killTweensOf(unsub);
  }

  useLayoutEffect(() => {
    titleAnimation();
    buttonAnimation();
  }, []);

  return (
    <section className="container flex min-h-dvh w-full flex-col items-start justify-center md:items-center">
      <div
        className="flex w-full flex-col gap-2 px-4 opacity-0 md:w-auto"
        ref={titleRef}
      >
        <h3 className="font-Montserrat text-xl">Hey, I&apos;m Raphael.</h3>
        <h1 className="w-full font-Inter text-5xl font-bold md:text-7xl">
          Data analyst, <br />
          Developer,
          <br />
          Creator. <br />
        </h1>
        <div
          className="mt-4 flex w-full flex-col items-center gap-x-2 gap-y-4 px-2 opacity-0 md:flex-row"
          ref={buttonRef}
        >
          <Button className="w-full">
            Meet my repositories <ExternalLinkIcon />{" "}
          </Button>
          <Button className="w-full" variant={"secondary"}>
            Check my projects
          </Button>
        </div>
      </div>
    </section>
  );
}
