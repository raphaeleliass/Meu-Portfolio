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
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().nonempty("Nome é obrigatório").trim(),
  lastname: z.string().nonempty("Sobrenome é obrigatório").trim(),
  email: z.string().email("Email inválido").trim(),
  subject: z.string().nonempty("Assunto é obrigatório").trim(),
  message: z.string().nonempty("Mensagem é obrigatória").trim(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      lastname: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function showSuccessToast() {
    toast({
      title: "Message sent!",
      description: "Your message was sent successfully.",
    });
  }

  function showErrorToast() {
    toast({
      title: "Error!",
      description: "An error occurred while sending the message.",
    });
  }

  function sendEmail({ name, lastname, email, subject, message }: FormValues) {
    emailjs.send(
      "service_o7ny5en",
      "template_61vytqt",
      {
        to_name: "Raphael",
        from_name: name + lastname,
        subject: subject,
        message: message,
        reply_to: email,
      },
      "jJ5XwOIfS14pAp0R3",
    );
  }

  function submitForm(values: FormValues) {
    setIsSubmitting(true);
    try {
      sendEmail({
        email: values.email,
        name: values.name,
        lastname: values.lastname,
        subject: values.subject,
        message: values.message,
      });
      showSuccessToast();
      form.reset();
      setIsSubmitting(false);
    } catch {
      showErrorToast();
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        className="relative grid w-full grid-cols-2 gap-x-2 gap-y-4"
        onSubmit={form.handleSubmit(submitForm)}
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem className="col-span-1">
              <FormLabel>Nome</FormLabel>

              <FormControl>
                <Input
                  placeholder="Enter your name"
                  type="text"
                  autoComplete="off"
                  aria-label="Enter your full name"
                  disabled={isSubmitting}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="lastname"
          control={form.control}
          render={({ field }) => (
            <FormItem className="col-span-1">
              <FormLabel>Sobrenome</FormLabel>

              <FormControl>
                <Input
                  placeholder="Enter your last name"
                  type="text"
                  autoComplete="off"
                  aria-label="Enter your last name"
                  disabled={isSubmitting}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Email</FormLabel>

              <FormControl>
                <Input
                  placeholder="Enter your email"
                  type="email"
                  autoComplete="off"
                  aria-label="Enter your email address"
                  disabled={isSubmitting}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="subject"
          control={form.control}
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Assunto</FormLabel>

              <FormControl>
                <Input
                  placeholder="Enter the subject"
                  type="text"
                  autoComplete="off"
                  aria-label="Enter the subject of your message"
                  disabled={isSubmitting}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="message"
          control={form.control}
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Mensagem</FormLabel>

              <FormControl>
                <Textarea
                  className="h-32"
                  placeholder="Enter your message"
                  autoComplete="off"
                  aria-label="Enter the content of your message"
                  disabled={isSubmitting}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className="col-span-2"
          variant={"default"}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? <Loader2 className="animate-spin" /> : "Enviar"}
        </Button>
      </form>
    </Form>
  );
}
