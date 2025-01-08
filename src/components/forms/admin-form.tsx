"use client";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";
import { Eye, EyeOff, Loader2 } from "lucide-react";

const formSchema = z.object({
  email: z.string().email().nonempty("Email is required").trim(),
  password: z.string().nonempty("Password is required").trim(),
});

type FormValues = z.infer<typeof formSchema>;

export default function AdminForm() {
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function signUser({ email, password }: FormValues) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      if (err instanceof FirebaseError) {
        if (err.code === "auth/invalid-credential") {
          form.setError("email", { message: "Invalid email or password" });
          form.setError("password", { message: "Invalid email or password" });
        }
      }
    }
  }

  function submitForm(values: FormValues) {
    setLoading(true);
    try {
      signUser({ email: values.email, password: values.password });
      form.reset();
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  function togglePasswordVisibility() {
    setPasswordVisible((prev) => !prev);
  }

  return (
    <Form {...form}>
      <form
        className="flex w-full max-w-xs flex-col gap-4"
        onSubmit={form.handleSubmit(submitForm)}
      >
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email"
                  type="email"
                  autoComplete="off"
                  disabled={loading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl className="relative flex items-center justify-end">
                <div className="relative flex items-center justify-end">
                  <Input
                    placeholder="Enter your password"
                    type={passwordVisible ? "text" : "password"}
                    autoComplete="off"
                    disabled={loading}
                    {...field}
                  />
                  <button
                    className="absolute right-2"
                    type="button"
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button variant={"secondary"} type="submit" disabled={loading}>
          {loading ? <Loader2 /> : "Sign In"}
        </Button>

        <p className="mx-auto text-xs text-muted-foreground">or</p>
      </form>
    </Form>
  );
}
