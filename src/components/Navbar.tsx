"use client";

// ui imports
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";

// icon imports
import { ArrowRight } from "lucide-react";

// form component imports
import WhatsappForm from "./forms/whatsapp-form";
import { ModeToggle } from "./ui/mode-toggle";

export default function Navbar() {
  return (
    <header className="container fixed left-0 right-0 top-0 z-50 mx-auto flex w-full items-center justify-center bg-background px-4 py-6">
      <nav role="navigation" className="flex w-full flex-row justify-between">
        <ModeToggle variant="outline" />

        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"secondary"}>
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
