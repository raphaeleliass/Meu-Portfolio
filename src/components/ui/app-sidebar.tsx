"use client";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
} from "./sidebar";

import { auth } from "@/firebase/firebaseConfig";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { Avatar, AvatarImage } from "./avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Button } from "./button";
import Image from "next/image";

export default function AppSidebar() {
  const user = auth.currentUser;

  async function signoutUser() {
    try {
      signOut(auth);
    } catch (err) {
      console.log(err);
    }
  }

  async function add() {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
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
          <SidebarMenuButton>
            <span>
              {user?.photoURL ? (
                <Image
                  className="size-6 rounded-full"
                  src={user.photoURL}
                  alt={`Profile pic of ${user.displayName}`}
                  width={100}
                  height={100}
                />
              ) : (
                ""
              )}
            </span>
            <p className="text-xs">{user?.displayName}</p>
          </SidebarMenuButton>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
