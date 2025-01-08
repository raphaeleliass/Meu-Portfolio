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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  title: z.string().nonempty("This field can't be empty.").trim(),
  description: z.string().nonempty("This field can't be empty.").trim(),
  tags: z
    .string()
    .nonempty("This field can't be empty.")
    .transform((val) => val.split(/\s+/)),
  imagePath: z.string().nonempty("This field can't be empty.").trim(),
  repoLink: z
    .string()
    .nonempty("This field can't be empty.")
    .trim()
    .transform((val) => {
      if (!val.startsWith("https://")) {
        return `https://${val}`;
      }
      return val;
    }),
  siteLink: z
    .string()
    .nonempty("This field can't be empty.")
    .trim()
    .transform((val) => {
      if (!val.startsWith("https://")) {
        return `https://${val}`;
      }
      return val;
    }),
});

type FormValues = z.infer<typeof formSchema>;

export default function AddProjectForm() {
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      tags: [],
      imagePath: "",
      repoLink: "",
      siteLink: "",
    },
  });

  async function submitForm(value: FormValues) {
    try {
      await addDoc(collection(db, "projects"), {
        title: value.title,
        imagePath: value.imagePath,
        repoLink: value.repoLink,
        siteLink: value.siteLink,
        tags: value.tags,
        description: value.description,
      });
      form.reset();
      toast({
        title: "Success",
        description: "Project added successfully!",
      });
    } catch (err) {
      toast({
        title: "Error",
        description: `${err}`,
      });
    }
  }

  return (
    <Form {...form}>
      <form
        className="grid grid-cols-2 gap-x-2 gap-y-4"
        onSubmit={form.handleSubmit(submitForm)}
      >
        <FormField
          name="title"
          control={form.control}
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter the title"
                  autoComplete="off"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="imagePath"
          control={form.control}
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Image Path</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter the image path"
                  autoComplete="off"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="repoLink"
          control={form.control}
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Repository Link</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter the repository link"
                  autoComplete="off"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="siteLink"
          control={form.control}
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Site Link</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter the site link"
                  autoComplete="off"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="tags"
          control={form.control}
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Tags</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter the tags"
                  autoComplete="off"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="description"
          control={form.control}
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter the description"
                  autoComplete="off"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="col-span-2" variant={"secondary"} type="submit">
          Add
        </Button>
      </form>
    </Form>
  );
}
