// ui imports
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

// zod imports
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// react-hook-form import
import { useForm } from "react-hook-form";

// form schema
const formSchema = z.object({
  name: z.string().nonempty("Name is required").trim(),
  message: z.string().nonempty("Message is required").trim(),
});

// form values
type FormValues = z.infer<typeof formSchema>;

export default function WhatsappForm() {
  // form hook
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      message: "",
    },
  });

  // submit form
  function submitForm(values: FormValues) {
    window.open(
      `https://wa.me/5528999763920?text=${values.message}. att:${values.name}`,
      "_blank",
      "noopener, noreferrer",
    );
  }

  return (
    <Form {...form}>
      <form
        className="mt-6 flex w-full flex-col gap-8"
        onSubmit={form.handleSubmit(submitForm)}
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your name"
                  autoComplete="off"
                  type="text"
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
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter your message"
                  autoComplete="off"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" variant={"secondary"}>
          Enviar mensagem
        </Button>
      </form>
    </Form>
  );
}
