"use client";
import AddProject from "@/components/dashboard-components/add-project";
import AllProjects from "@/components/dashboard-components/all-projects";
import AppSidebar from "@/components/ui/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useRequireAuth } from "@/hooks/use-require-auth";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";

export default function Page() {
  const [ActiveView, setActiveView] = useState("add-new-project");

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
          <AppSidebar onSelectView={setActiveView} />
          <SidebarTrigger />
          <section className="flex min-h-dvh w-full items-center justify-center">
            {ActiveView === "overview" && <div>Overview</div>}
            {ActiveView === "all-projects" && <AllProjects />}
            {ActiveView === "add-new-project" && <AddProject />}
          </section>
        </SidebarProvider>
      )}
    </>
  );
}
