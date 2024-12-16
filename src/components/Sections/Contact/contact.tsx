"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/firebase/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import React from "react";

export default function Contact() {
  async function adddocument() {
    try {
      await addDoc(collection(db, "test"), {
        teste: "olá mundo",
        purge: 321321,
      });
      alert("sucesso");
    } catch (err) {
      alert(err);
    }
  }

  return <Button onClick={adddocument}>test</Button>;
}
