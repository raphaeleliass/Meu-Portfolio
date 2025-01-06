"use client";
import AdminForm from "@/components/forms/admin-form";
import { Section } from "@/components/ui/section";
import { useRequireAuth } from "@/hooks/use-require-auth";
import { Loader2 } from "lucide-react";
import React from "react";

export default function Page() {
  const { Loading } = useRequireAuth({
    redirectUserLogged: "/dashboard",
    redirectUserNotlogged: "",
  });

  return (
    <Section className="mx-auto">
      {Loading ? <Loader2 className="animate-spin" /> : <AdminForm />}
    </Section>
  );
}
