"use client";

/* React and Form Management */
import { useState } from "react";
import { useForm, useFormState } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

/* Firebase and Authentication */
import { setCookie } from "nookies";
import { auth } from "@/firebase/firebase-config";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";

/* Custom Hooks */
import { useToast } from "@/hooks/use-toast";

/* UI Components */
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

/* Icons */
import { Eye, EyeClosed, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

/* Form validation schema using Zod */
const formSchema = z.object({
  email: z
    .string()
    .nonempty("Este campo não pode estar vazio")
    .email("Email inválido"),
  password: z.string().nonempty("Este campo não pode estar vazio").trim(),
});

/* Type inference from the schema */
type FormSchemaProps = z.infer<typeof formSchema>;

/* Component props interface */
interface LoginProps {
  onForgotPassword: () => void;
}

export default function LoginForm({ onForgotPassword }: LoginProps) {
  /* Hooks initialization */
  const { toast } = useToast();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const router = useRouter();

  /* Form initialization with Zod schema */
  const form = useForm<FormSchemaProps>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  /* Form submission state */
  const { isSubmitting } = useFormState({ control: form.control });

  /* Password visibility toggle handler */
  function togglePasswordVisibility() {
    setIsPasswordVisible((prev) => !prev);
  }

  /* Form submission handler with Firebase authentication */
  async function submitForm(formValues: FormSchemaProps) {
    try {
      await signInWithEmailAndPassword(
        auth,
        formValues.email,
        formValues.password,
      );
      const token = await auth.currentUser?.getIdToken();
      setCookie(null, "token", token as string, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      router.push("/admin/dashboard");
      form.reset();
    } catch (err) {
      if (err instanceof FirebaseError) {
        toast({
          title: "Não foi possível realizar o login",
          description: `${err.code}`,
          variant: "destructive",
          duration: 2000,
        });
      }
    }
  }

  return (
    <Card className="relative w-full max-w-sm min-w-sm overflow-hidden md:max-w-lg md:min-w-lg">
      <CardHeader>
        <CardTitle className="title">Entrar</CardTitle>
      </CardHeader>
      <CardContent className="">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(submitForm)}
            className="flex flex-col items-center justify-center gap-5"
          >
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Email</FormLabel>

                  <FormMessage className="text-xs text-red-400" />

                  <FormControl>
                    <Input
                      placeholder="Digite seu email"
                      autoComplete="off"
                      type="email"
                      disabled={isSubmitting}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Senha</FormLabel>
                  <FormMessage className="text-xs text-red-400" />
                  <div className="relative flex flex-col items-end justify-center">
                    <FormControl className="relative">
                      <Input
                        placeholder="Digite sua senha"
                        autoComplete="off"
                        type={isPasswordVisible ? "text" : "password"}
                        disabled={isSubmitting}
                        {...field}
                      />
                    </FormControl>
                    <button
                      type="button"
                      className="absolute p-2"
                      onClick={togglePasswordVisibility}
                    >
                      {isPasswordVisible ? (
                        <EyeClosed
                          size={20}
                          className="text-muted-foreground"
                        />
                      ) : (
                        <Eye size={20} className="text-muted-foreground" />
                      )}
                    </button>
                  </div>
                </FormItem>
              )}
            />

            <div className="flex w-full flex-col gap-4">
              <Button
                variant={"secondary"}
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "Continuar"
                )}
              </Button>
              <Button
                variant={"linkBlue"}
                size={"sm"}
                className="text-xs"
                onClick={onForgotPassword}
                type="button"
              >
                esqueci minha senha
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
      {isSubmitting && <div className="bg-background/60 absolute inset-0" />}
    </Card>
  );
}
