"use client";
import AppSidebar from "@/components/ui/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useRequireAuth } from "@/hooks/use-require-auth";
import { Loader2 } from "lucide-react";
import React from "react";

export default function Page() {
  const { Loading } = useRequireAuth({
    redirectUserLogged: "",
    redirectUserNotlogged: "/admin",
  });

  return (
    <>
      {Loading ? (
        <section className="flex min-h-dvh items-center justify-center">
          <Loader2 className="size-10 animate-spin" />
        </section>
      ) : (
        <SidebarProvider>
          <AppSidebar />
          <SidebarTrigger />
          <section className="mx-auto flex min-h-dvh items-center justify-center">
            <div>DASHBOARD</div>
          </section>
        </SidebarProvider>
      )}
    </>
  );
}
