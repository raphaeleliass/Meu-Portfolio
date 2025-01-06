import React, { useContext } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { UserContext } from "@/contexts/UserContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { ChevronsUpDown, LogOut } from "lucide-react";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";

export default function AppSidebar() {
  const { userName, userEmail, userPhoto } = useContext(UserContext);

  function logoutUser() {
    try {
      signOut(auth);
    } catch (err) {
      alert(err);
    }
  }

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Options</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenuButton>Overview</SidebarMenuButton>
            <SidebarMenuButton>All projects</SidebarMenuButton>
            <SidebarMenuButton>Add new project</SidebarMenuButton>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <SidebarMenuButton asChild>
                <div className="flex flex-row items-center gap-2">
                  <Avatar className="size-6">
                    <AvatarImage src={`${userPhoto}`} />

                    <AvatarFallback>
                      {userEmail?.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-start justify-center">
                    <p className="text-xs">{userName}</p>
                    <p className="text-xs text-muted-foreground">{userEmail}</p>
                  </div>
                  <ChevronsUpDown className="ml-auto" />
                </div>
              </SidebarMenuButton>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuItem className="w-[--radix-popper-anchor-width]">
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={logoutUser}>
                      Logout <LogOut className="ml-auto" />
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
