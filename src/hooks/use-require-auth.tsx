"use client";
import { auth } from "@/firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function useRequireAuth({
  redirectUserNotlogged,
  redirectUserLogged,
}: {
  redirectUserNotlogged: string;
  redirectUserLogged: string;
}) {
  const [Loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (!user) {
        setLoading(false);
        router.push(redirectUserNotlogged);
      } else {
        setLoading(false);
        router.push(redirectUserLogged);
      }
    });
  }, [router, redirectUserLogged, redirectUserNotlogged]);

  return { Loading };
}
