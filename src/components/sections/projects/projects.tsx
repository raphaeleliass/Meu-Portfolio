"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";

export default function Projects() {
  const titleRef = useRef(null);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const unsub = gsap.to(titleRef.current, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "10% center",
        end: "40% center",
        scrub: true,
        once: true,
      },
    });

    return () => gsap.killTweensOf(unsub);
  }, []);

  return (
    <section
      className="flex min-h-dvh flex-col items-center justify-center"
      ref={sectionRef}
    >
      <h2
        className="max-w-sm -translate-y-96 gap-12 text-center font-Montserrat text-2xl font-semibold opacity-0 md:max-w-2xl md:text-4xl"
        ref={titleRef}
      >
        Discover My Highlighted Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        
      </div>
    </section>
  );
}
