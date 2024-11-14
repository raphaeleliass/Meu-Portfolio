"use client";

import { ComponentProps, useState } from "react";
import { Button } from "./button";
import { Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface buttonProps extends ComponentProps<"button"> {
  classCopy?: string;
  className?: string;
}

export default function ButtonClipboard({
  classCopy,
  className,
  ...props
}: buttonProps) {
  const [isCopy, setCopy] = useState<boolean>(false);
  function copyToClipboard() {
    navigator.clipboard.writeText("raphaeleliass@outlook.com");
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  }

  return (
    <Button
      variant={"outline"}
      className={cn(
        "relative flex flex-row text-xs disabled:opacity-100",
        className,
      )}
      onClick={copyToClipboard}
      aria-label="botão para copiar o email"
      disabled={isCopy ? true : false}
      {...props}
    >
      raphaeleliass@outlook.com <Copy />
      <div
        className={cn(
          `absolute -bottom-4 right-2 rounded-full bg-green-500 px-2 py-1 text-xs font-semibold text-white shadow-lg transition-all after:absolute after:bottom-full after:right-3 after:border-4 after:border-transparent after:border-b-green-500 ${isCopy ? "opacity-100" : "opacity-0"}`,
          classCopy,
        )}
      >
        copiado
      </div>
    </Button>
  );
}
