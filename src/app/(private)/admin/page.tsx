"use client";
import AdminForm from "@/components/forms/admin-form";
import { Section } from "@/components/ui/section";
import { auth } from "@/firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setLoading(true);
      if (user != null) {
        router.push("/admin/dashboard");
      } else {
        setLoading(false);
      }
    });

    return () => unsub();
  }, [router]);
  return (
    <Section className="mx-auto">
      {loading ? <Loader2 className="animate-spin" /> : <AdminForm />}
    </Section>
  );
}
