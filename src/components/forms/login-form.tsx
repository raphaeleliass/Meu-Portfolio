"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Eye, EyeClosed, Loader2 } from "lucide-react";
import { Input } from "../ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormState } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { auth } from "@/firebase/firebase-config";

const formSchema = z.object({
  email: z
    .string()
    .nonempty("Este campo não pode estar vazio")
    .email("Email inválido"),
  password: z.string().nonempty("Este campo não pode estar vazio").trim(),
});

type FormSchemaProps = z.infer<typeof formSchema>;

interface LoginProps {
  onForgotPassword: () => void;
}

export default function LoginForm({ onForgotPassword }: LoginProps) {
  const { toast } = useToast();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const form = useForm<FormSchemaProps>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { isSubmitting } = useFormState({ control: form.control });

  function togglePasswordVisibility() {
    setIsPasswordVisible((prev) => !prev);
  }

  async function submitForm(formValues: FormSchemaProps) {
    try {
      await signInWithEmailAndPassword(
        auth,
        formValues.email,
        formValues.password,
      );
    } catch (err) {
      if (err instanceof FirebaseError) {
        toast({
          title: "Não foi possível realizar o login",
          description: `${err.code}`,
          variant: "destructive",
          duration: 2000,
        });
      }
    } finally {
      form.reset();
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
                  <Button
                    variant={"linkBlue"}
                    size={"sm"}
                    className="mr-auto pl-0 text-xs"
                    onClick={onForgotPassword}
                    type="button"
                  >
                    esqueci minha senha
                  </Button>
                </FormItem>
              )}
            />

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
          </form>
        </Form>
      </CardContent>
      {isSubmitting && <div className="bg-background/60 absolute inset-0" />}
    </Card>
  );
}
