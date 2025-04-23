"use client";
// component imports
import About from "@/components/layouts/Home/About";
import Contact from "@/components/layouts/Home/Contact";
import Footer from "@/components/layouts/Home/Footer";
import Hero from "@/components/layouts/Home/Hero";
import Logos from "@/components/layouts/Home/Logos";
import Navigation from "@/components/layouts/Home/Navbar";
import Projects from "@/components/layouts/Home/Projects";
import ScrollToTopBtn from "@/components/ui/scroll-to-top-btn";
import { auth } from "@/firebase/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { destroyCookie, setCookie } from "nookies";

export default function Page() {
  onAuthStateChanged(auth, async (user) => {
    if (!user) return destroyCookie(null, "token");

    setCookie(null, "token", await user.getIdToken(), {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
  });

  return (
    <>
      <main
        className="flex flex-col items-center justify-center max-sm:gap-16"
        id="main"
      >
        <Navigation />
        <Hero />
        <Logos />
        <About />
        <Projects />
        <Contact />
        <ScrollToTopBtn />

        {/* <Scene /> */}
      </main>

      <Footer />
    </>
  );
}
