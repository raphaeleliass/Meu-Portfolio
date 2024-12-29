import Image from "next/image";
import React from "react";

export default function AboutMe() {
  return (
    <section className="flex min-h-dvh flex-col items-center justify-center">
      <div className="container flex flex-col md:flex-row-reverse">
        <Image
          className="rounded-2xl h-96 w-56 object-cover object-center"
          src={"https://github.com/raphaeleliass.png"}
          alt="Raphael's profile picture"
          width={500}
          height={500}
        />
      </div>
      {/* <h2 className="text-3xl font-bold">About Me</h2>
      <p className="text-lg text-center max-w-prose mt-4">
        I am a software engineer who loves to build web applications. I have
        experience in building web applications using React, Next.js, and
        Tailwind CSS. I am passionate about learning new things and sharing my
        knowledge with others.
      </p> */}
    </section>
  );
}
