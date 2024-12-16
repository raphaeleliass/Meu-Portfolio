"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";

export default function AboutMe() {
  const pictureRef = useRef(null);
  const sectionRef = useRef(null);
  const fragmentRef01 = useRef(null);
  const fragmentRef02 = useRef(null);
  const fragmentRef03 = useRef(null);
  const fragmentRef04 = useRef(null);
  const fragmentRef05 = useRef(null);
  const fragmentRef06 = useRef(null);

  function pictureAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const unsub = gsap.to(pictureRef.current, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "40% bottom",
        end: "40% center",
        scrub: true,
        once: true,
      },
    });

    return () => gsap.killTweensOf(unsub);
  }

  function fragmentAnimation(item: null[], position: number) {
    gsap.registerEffect(ScrollTrigger);

    const unsub = gsap.fromTo(
      item,
      {
        x: position,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "20% center",
          end: "40% cemter",
          once: true,
        },
      },
    );
    return () => gsap.killTweensOf(unsub);
  }

  useLayoutEffect(() => {
    const fragment01 = fragmentRef01.current;
    const fragment02 = fragmentRef02.current;
    const fragment03 = fragmentRef03.current;
    const fragment04 = fragmentRef04.current;
    const fragment05 = fragmentRef05.current;
    const fragment06 = fragmentRef06.current;

    const leftFragments = [fragment01, fragment02, fragment03];
    const rightFragments = [fragment04, fragment05, fragment06];

    pictureAnimation();
    fragmentAnimation(rightFragments, -50);
    fragmentAnimation(leftFragments, 50);
  }, []);

  return (
    <section
      className="flex min-h-dvh flex-col items-center justify-center gap-12"
      ref={sectionRef}
    >
      <div className="relative flex items-center justify-center">
        <Image
          className="z-40 w-44 -translate-y-96 rounded-xl object-cover object-center opacity-0 shadow-lg saturate-0 md:w-56"
          src={"/profile-pic.jpg"}
          alt="Raphael's profile pic"
          width={100}
          height={200}
          ref={pictureRef}
        />

        <span
          ref={fragmentRef01}
          className="absolute -top-8 left-6 z-30 size-10 rounded-xl bg-zinc-300 opacity-0 shadow-lg"
        />
        <span
          ref={fragmentRef02}
          className="absolute -left-4 top-16 size-10 rounded-xl bg-zinc-200 opacity-0 shadow-lg md:-left-16"
        />
        <span
          ref={fragmentRef03}
          className="absolute -bottom-4 -left-4 z-30 size-10 rounded-xl bg-zinc-400 opacity-0 shadow-lg"
        />
        <span
          ref={fragmentRef04}
          className="absolute -right-10 -top-12 size-10 rounded-xl bg-zinc-500 opacity-0 shadow-lg"
        />
        <span
          ref={fragmentRef05}
          className="absolute -right-14 bottom-16 size-10 rounded-xl bg-zinc-300 opacity-0 shadow-lg"
        />
        <span
          ref={fragmentRef06}
          className="absolute -bottom-7 -right-4 z-50 size-10 rounded-xl bg-zinc-300 opacity-0 shadow-lg"
        />
      </div>

      <div className="container flex w-full flex-col items-center justify-center">
        <h2 className="font-Montserrat text-2xl font-light md:text-3xl">
          About me
        </h2>
        <p className="mt-4 w-full max-w-sm text-center font-Inter text-muted-foreground md:max-w-lg">
          Hi, I&apos;m <strong>Raphael</strong>, a{" "}
          <strong>front-end developer</strong>
          passionate about technology and programming. I&apos;m currently
          pursuing a degree in Systems Analysis and Development, where I&apos;m
          in my fourth semester. My main focus is on learning and working with
          technologies such as <strong>JavaScript</strong>,{" "}
          <strong>TypeScript</strong>, <strong>React</strong>,{" "}
          <strong>Node.js</strong>, <strong>Python</strong>, and{" "}
          <strong>Next.js</strong>.
          <br />I enjoy creating <strong>web applications</strong> with clean
          and <strong>responsive designs</strong>, combining functionality with
          user-friendly experiences.
          <br />
          <strong>
            In addition to web development, I&apos;m working on improving my
            English
          </strong>
          and expanding my knowledge of <strong>backend technologies</strong>,
          aiming to become a <strong>full-stack developer</strong>. My long-term
          goal is to build a solid career in tech and eventually explore
          international opportunities.
        </p>
      </div>
    </section>
  );
}
