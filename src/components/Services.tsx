"use client";
import React, { useLayoutEffect } from "react";
import { Section, SectionDescription, SectionTitle } from "./ui/section";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { servicesData } from "@/data/servicesData";
import { CodeXmlIcon, PenTool, ThumbsUp, TrendingUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Services() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".services-items",
      {
        opacity: 0,
        y: -12,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".services-items",
          start: "top 40%",
          end: "center 60%",
        },
      },
    );

    return () => gsap.killTweensOf(".services-items");
  }, []);

  return (
    <Section className="services-items">
      <SectionTitle>What Can I Do For You?</SectionTitle>
      <SectionDescription>
        A variety of professional services tailored to meet your needs
      </SectionDescription>

      <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {servicesData.map((service) => (
          <Card
            className="services-items flex w-full max-w-sm flex-col items-center justify-between text-center"
            key={service.title}
          >
            <CardHeader>
              <span>
                {service.title === "Web Development" && <CodeXmlIcon />}
                {service.title === "UI/UX Design" && <PenTool />}
                {service.title === "SEO Optimization" && <TrendingUp />}
                {service.title === "Content Creation" && <ThumbsUp />}
              </span>
            </CardHeader>

            <CardContent>
              <CardTitle>{service.title}</CardTitle>
            </CardContent>

            <CardFooter>
              <CardDescription>{service.description}</CardDescription>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
