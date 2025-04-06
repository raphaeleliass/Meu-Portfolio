// next imports

import Link from "next/link";

// ui imports
import { Button } from "../../ui/button";

// utils imports
import { socialLinks } from "@/utils/constants";

export default function Footer() {
  // get the current year
  const date = new Date().getFullYear();

  return (
    <footer className="bg-secondary mt-32 flex flex-col-reverse items-center justify-between p-10 lg:flex-row">
      <p className="description">{date} &copy; Raphael Elias </p>

      <div className="flex flex-row items-center">
        {socialLinks.map((link, index) => (
          <Link
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
            key={index}
          >
            <Button variant={"link"} size={"sm"}>
              {link.title}
            </Button>
          </Link>
        ))}
      </div>
    </footer>
  );
}
