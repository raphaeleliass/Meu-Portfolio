"use client";
import { auth } from "@/firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react";

type UserType = {
  userName: string | null;
  userEmail: string | null;
  userPhoneNumber: string | null;
  userPhoto: string | null;
  userUid: string | null;
};

export const UserContext = createContext<UserType>({
  userName: null,
  userEmail: null,
  userPhoneNumber: null,
  userPhoto: null,
  userUid: null,
});

export function UserProvider({ children }: { children?: ReactNode }) {
  const [userDetails, setUserDetails] = useState<UserType>({
    userName: null,
    userEmail: null,
    userPhoneNumber: null,
    userPhoto: null,
    userUid: null,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserDetails({
          userName: user.displayName,
          userEmail: user.email,
          userPhoneNumber: user.phoneNumber,
          userPhoto: user.photoURL,
          userUid: user.uid,
        });
      }

      return () => unsubscribe();
    });
  }, [setUserDetails]);

  return (
    <UserContext.Provider value={userDetails}>{children}</UserContext.Provider>
  );
}
