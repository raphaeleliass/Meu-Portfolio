"use client";

import { ThemeProvider } from "@/components/ui/theme-provider";
import { ProgressProvider } from "@bprogress/next/app";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ProgressProvider
        height="4px"
        color="oklch(0.552 0.016 285.938)"
        options={{ showSpinner: false }}
        shallowRouting
      >
        {children}
      </ProgressProvider>
    </ThemeProvider>
  );
};

export default Providers;
