"use client";
import React from "react";
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

const formSchema = z.object({
  name: z.string().nonempty("Name is required").trim(),
  lastname: z.string().nonempty("Last name is required").trim(),
  email: z.string().email("Invalid email address").trim(),
  subject: z.string().nonempty("Subject is required").trim(),
  message: z.string().nonempty("Message is required").trim(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
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

  function submitForm(values: FormValues) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        className="grid w-full grid-cols-2 gap-x-2 gap-y-4"
        onSubmit={form.handleSubmit(submitForm)}
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem className="col-span-1">
              <FormLabel htmlFor="name">Name</FormLabel>

              <FormControl>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  type="text"
                  autoComplete="off"
                  aria-label="Enter your full name"
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
              <FormLabel htmlFor="lastname">Last Name</FormLabel>

              <FormControl>
                <Input
                  id="lastname"
                  placeholder="Enter your last name"
                  type="text"
                  autoComplete="off"
                  aria-label="Enter your last name"
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
              <FormLabel htmlFor="email">Email</FormLabel>

              <FormControl>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  autoComplete="off"
                  aria-label="Enter your email address"
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
              <FormLabel htmlFor="subject">Subject</FormLabel>

              <FormControl>
                <Input
                  id="subject"
                  placeholder="Enter the subject"
                  type="text"
                  autoComplete="off"
                  aria-label="Enter the subject of your message"
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
              <FormLabel htmlFor="message">Message</FormLabel>

              <FormControl>
                <Textarea
                  id="message"
                  className="h-32"
                  placeholder="Enter your message"
                  autoComplete="off"
                  aria-label="Enter the content of your message"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="col-span-2" variant={"secondary"} type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
