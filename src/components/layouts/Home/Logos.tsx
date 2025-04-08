"use client";

// next imports
import Link from "next/link";

// ui imports
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { logos } from "@/utils/constants";

// icon imports
import { ExternalLink } from "lucide-react";

// motion imports
import { motion } from "motion/react";

export default function Logos() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      viewport={{ once: true }}
      className="custom-section flex h-[10dvh] items-center justify-center"
    >
      <article className="mx-auto flex w-[90%] flex-row items-center justify-around gap-5 lg:w-[50%] lg:gap-10">
        {logos.map((logo, index) => {
          const Icon = logo.icon;
          return (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <div className="flex flex-row items-center gap-1 text-zinc-500">
                  <Icon size={40} />
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 space-y-4 text-sm">
                <h3 className="text-base font-semibold">{logo.title}</h3>
                <p>{logo.description}</p>
                <Link
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="link" className="text-sky-600">
                    Saiba Mais <ExternalLink />
                  </Button>
                </Link>
              </HoverCardContent>
            </HoverCard>
          );
        })}
      </article>
    </motion.section>
  );
}
