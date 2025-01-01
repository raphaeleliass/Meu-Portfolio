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

const servicesData = [
  {
    title: "Web Development",
    description: "Building responsive and high-quality websites.",
    icon: "🌐",
  },
  {
    title: "UI/UX Design",
    description: "Designing user-friendly interfaces and experiences.",
    icon: "🎨",
  },
  {
    title: "SEO Optimization",
    description: "Improving website visibility on search engines.",
    icon: "🔍",
  },
  {
    title: "Content Creation",
    description: "Producing engaging content for various platforms.",
    icon: "✍️",
  },
];

export default function Services() {
  return (
    <Section className="py-32">
      <SectionTitle>What Can I Do For You?</SectionTitle>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {servicesData.map((service) => (
          <Card
            className="flex w-full max-w-sm flex-col items-center justify-between text-center"
            key={service.title}
          >
            <CardHeader>
              <span>{service.icon}</span>
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
