"use client";
import { Sidebar, SidebarBody, SidebarItem } from "@/components/ui/sidebar";
import { auth } from "@/firebase/firebase-config";
import {
  IconPlus,
  IconBrandTabler,
  IconEdit,
  IconLogout,
} from "@tabler/icons-react";
import { signOut } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FirebaseError } from "firebase/app";
import { useToast } from "@/hooks/use-toast";

const links = [
  {
    label: "Dashboard",
    href: "#",
    icon: (
      <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
  {
    label: "Add Project",
    href: "#",
    icon: (
      <IconPlus className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
  {
    label: "Edit Project",
    href: "#",
    icon: (
      <IconEdit className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
];

interface MenuProps {
  options: "Dashboard" | "Add Project" | "Edit Project";
}

export default function SidebarApp({
  onMenuChange,
}: {
  onMenuChange: (menu: MenuProps["options"]) => void;
}) {
  const [open, setOpen] = useState<boolean>(false);

  const router = useRouter();
  const { toast } = useToast();

  const handleMenuChange = (option: MenuProps["options"]) => {
    onMenuChange(option);
  };

  async function handleLogOutUser() {
    try {
      await signOut(auth);
      router.refresh();
    } catch (err) {
      if (err instanceof FirebaseError) {
        toast({
          title: "Ação não concluída",
          description: err.cause as string,
          variant: "destructive",
        });
      }
    }
  }

  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
          <div className="flex flex-col gap-2">
            {links.map((link, idx) => (
              <SidebarItem
                key={idx}
                link={link}
                onClick={() => {
                  handleMenuChange(link.label as MenuProps["options"]);
                }}
              />
            ))}
            <SidebarItem
              link={{
                label: "Sair",
                icon: (
                  <IconLogout className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
                ),
              }}
              onClick={handleLogOutUser}
            />
          </div>
        </div>
        <div>
          <SidebarItem
            link={{
              label: auth.currentUser?.email as string,
              icon: (
                <Image
                  src="https://github.com/raphaeleliass.png"
                  className="h-7 w-7 shrink-0 rounded-full"
                  width={50}
                  height={50}
                  alt="Avatar"
                />
              ),
            }}
          />
        </div>
      </SidebarBody>
    </Sidebar>
  );
}
