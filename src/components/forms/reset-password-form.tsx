import { useForm, useFormState } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../ui/button";
import { ChevronLeft, Loader2 } from "lucide-react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/firebase/firebase-config";
import { useToast } from "@/hooks/use-toast";
import { FirebaseError } from "firebase/app";

const formSchema = z.object({
  email: z.string().nonempty("Campo obrigatório").email("Email inválido"),
});

type FormTypes = z.infer<typeof formSchema>;

interface ResetFormProps {
  onClose: () => void;
}

export default function ResetPasswordForm({ onClose }: ResetFormProps) {
  const { toast } = useToast();

  const form = useForm<FormTypes>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const { isSubmitting, isSubmitSuccessful } = useFormState({
    control: form.control,
  });

  async function submitForm(formValues: FormTypes) {
    try {
      await sendPasswordResetEmail(auth, formValues.email);
    } catch (err) {
      if (err instanceof FirebaseError) {
        toast({
          title: "Não foi possível enviar o email",
          description: `${err}`,
        });
      }
    }
  }

  return (
    <Card
      className={`relative w-full max-w-sm min-w-sm overflow-hidden transition-all duration-500 ease-in-out md:max-w-lg md:min-w-lg ${isSubmitSuccessful ? "h-52" : "h-94"}`}
    >
      <CardHeader className="bg-card z-50 px-2">
        <Button className="mr-auto" variant={"link"} onClick={onClose}>
          <ChevronLeft /> Voltar
        </Button>
      </CardHeader>

      <div className="relative flex h-68 w-full flex-col justify-between overflow-hidden">
        <div
          className={`absolute left-0 z-30 space-y-5 transition-all duration-500 ease-in-out ${isSubmitSuccessful ? "-top-full opacity-0" : "top-2 opacity-100"}`}
        >
          <CardHeader>
            <CardTitle className="title">Recuperar senha</CardTitle>
            <CardDescription>
              Insira seu email cadastrado para receber instruções de redefinição
              de senha. Você receberá um link para criar uma nova senha.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(submitForm)}>
                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormMessage className="text-xs text-red-400" />
                      <FormControl>
                        <Input
                          placeholder="Insira seu email"
                          autoComplete="off"
                          type="email"
                          disabled={isSubmitting}
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button
                  className="mt-5 w-full"
                  variant={"secondary"}
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    "Enviar instruções de recuperação"
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </div>
        <div
          className={`absolute transition-all duration-500 ease-in-out ${isSubmitSuccessful ? "top-0 opacity-100" : "-top-full opacity-0"}`}
        >
          <CardContent className="space-y-4">
            <CardTitle className="title">Email enviado com sucesso!</CardTitle>
            <CardDescription>
              Por favor, verifique sua caixa de entrada e também a pasta de
              spam. Siga as instruções enviadas para redefinir sua senha e
              depois faça login novamente.
            </CardDescription>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
