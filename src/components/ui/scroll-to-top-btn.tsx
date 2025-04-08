"use client";

// react imports
import { useEffect, useState } from "react";
// ui imports
import { ArrowUp } from "lucide-react";

export default function ScrollToTopBtn() {
  // state to manage button visibility
  const [buttonActive, setButtonActive] = useState(false);

  // function to handle scroll to top
  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // effect to handle scroll event and update button visibility
  useEffect(() => {
    function toggleButtonOnScroll() {
      if (window.scrollY > 150) {
        setButtonActive(true);
      } else {
        setButtonActive(false);
      }
    }

    window.addEventListener("scroll", toggleButtonOnScroll);
    return () => window.removeEventListener("scroll", toggleButtonOnScroll);
  }, []);

  return (
    <div
      className={`fixed right-0 z-50 flex items-center justify-center p-6 transition-all ${buttonActive ? "bottom-15" : "-bottom-20"}`}
    >
      <div className="flex flex-col gap-4">
        <button
          className="bg-background text-muted-foreground rounded-full border-1 p-4 shadow-lg"
          onClick={handleScrollToTop}
          aria-label="Voltar para o topo"
        >
          <ArrowUp />
        </button>
      </div>
    </div>
  );
}
