"use client";
import React from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import WhatsappForm from "./forms/whatsapp-form";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="container fixed left-0 right-0 top-0 z-50 flex w-full items-end justify-end bg-background py-6 pr-4 md:static">
      <nav role="navigation">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"ghost"}>
              Get in touch <ArrowRight />
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle className="font-Poppins">
                Get in touch with me
              </DialogTitle>
              <DialogDescription>
                Send me a message on WhatsApp and I will get back to you as soon
                as possible.
              </DialogDescription>
            </DialogHeader>

            <DialogFooter>
              <WhatsappForm />
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </nav>
    </header>
  );
}
