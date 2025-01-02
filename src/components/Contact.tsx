import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import ContactForm from "./forms/contact-form";

export default function Contact() {
  return (
    <section className="container flex items-center justify-center md:mb-20">
      <Card className="flex w-full max-w-sm flex-col items-center justify-center border-none md:max-w-2xl md:flex-row lg:max-w-4xl">
        <CardHeader className="text-center md:text-left">
          <CardTitle className="font-Poppins text-2xl">Get in Touch</CardTitle>
          <CardDescription>
            Let&apos;s create something amazing together.
          </CardDescription>
        </CardHeader>

        <CardContent className="mt-6">
          <ContactForm />
        </CardContent>
      </Card>
    </section>
  );
}
