import React from "react";
import { Section, SectionTitle } from "./ui/section";
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

export default function Services() {
  return (
    <Section className="py-32">
      <SectionTitle>What Can I Do For You?</SectionTitle>
      <p className="max-w-xs text-center text-sm text-muted-foreground md:max-w-sm">
        A variety of professional services tailored to meet your needs
      </p>

      <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {servicesData.map((service) => (
          <Card
            className="flex w-full max-w-sm flex-col items-center justify-between text-center"
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
