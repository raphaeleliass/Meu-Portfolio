"use client";
import LoginForm from "@/components/forms/login-form";
import ResetPasswordForm from "@/components/forms/reset-password-form";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function Page() {
  const loginFormRef = useRef<HTMLDivElement>(null);
  const resetPasswordFormRef = useRef<HTMLDivElement>(null);

  const [showResetForm, setShowResetForm] = useState<boolean>(false);

  const router = useRouter();

  function handleRedirectHome() {
    router.push("/");
  }

  return (
    <main className="relative min-h-dvh w-full place-content-center justify-items-center">
      <Button
        className="absolute top-5 left-5"
        variant={"outline"}
        size={"sm"}
        onClick={handleRedirectHome}
      >
        <ChevronLeft />
        Início
      </Button>
      <section className="relative flex h-[50dvh] w-full max-w-sm flex-row items-center justify-center gap-32 overflow-hidden md:max-w-lg">
        <div
          className={`absolute transition-all duration-500 ease-in-out ${showResetForm ? "right-full opacity-0" : "right-0 opacity-100"}`}
          ref={loginFormRef}
        >
          <LoginForm onForgotPassword={() => setShowResetForm(true)} />
        </div>
        <div
          className={`absolute transition-all duration-500 ease-in-out ${showResetForm ? "left-0 opacity-100" : "left-full opacity-0"}`}
          ref={resetPasswordFormRef}
        >
          <ResetPasswordForm onClose={() => setShowResetForm(false)} />
        </div>
      </section>
    </main>
  );
}
