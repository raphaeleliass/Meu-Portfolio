"use client";

// react imports
import { useEffect, useState } from "react";

// next imports
import Link from "next/link";

// ui imports
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";

// icon imports
import { ChevronRight, MenuIcon } from "lucide-react";

// utils imports
import { navItems } from "@/utils/constants";

// motion imports
import { motion } from "motion/react";

export default function Navbar() {
  // state for the menu
  // isOpen: boolean - if the menu is open or closed
  // isVisible: boolean - if the menu is visible or not
  // prevScrollPos: number - previous scroll position
  // activeItem: number - the active item in the menu
  const [menuState, setMenuState] = useState({
    isOpen: false,
    isVisible: true,
    prevScrollPos: 0,
    activeItem: 0,
  });

  // function to toggle the menu open and closed
  function toggleMenu() {
    // set the menu state to the opposite of what it is currently
    setMenuState((prev) => ({ ...prev, isOpen: !prev.isOpen }));
  }

  // function to handle the item click
  function handleItemClick({ index }: { index: number }) {
    // set the active item to the index of the clicked item
    setMenuState((prev) => ({ ...prev, activeItem: index, isOpen: false }));
  }

  // useEffect to handle the menu visibility on scroll
  useEffect(() => {
    // function to handle the menu visibility on scroll
    function handleMenuVisibility() {
      // if the menu is open, do not change the visibility
      const currScrollPosition = window.pageYOffset;
      // if the current scroll position is greater than the previous scroll position and greater than 50, set the menu to not visible
      const scrollingDown =
        currScrollPosition > menuState.prevScrollPos && currScrollPosition > 50;

      // if the menu is open, set the menu to not visible
      if (!menuState.isOpen)
        setMenuState((prev) => ({
          ...prev,
          isVisible: !scrollingDown,
          prevScrollPos: currScrollPosition,
        }));
    }

    window.addEventListener("scroll", handleMenuVisibility);
    return () => window.removeEventListener("scroll", handleMenuVisibility);
  }, [menuState.prevScrollPos, menuState.isOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`bg-background fixed top-0 right-0 left-0 z-50 flex w-full items-center justify-center border-b p-3 transition-all ${menuState.isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div
          className={`container flex flex-col items-center justify-between overflow-hidden transition-all lg:h-auto lg:flex-row ${menuState.isOpen ? "h-68" : "h-10"}`}
        >
          <div className="flex w-full flex-row items-center justify-between lg:w-auto">
            <Link
              href={"/"}
              className="flex h-full flex-row items-center justify-center font-semibold"
            >
              <p>Raphael Elias</p>
            </Link>
            <div className="flex flex-row items-center justify-center gap-1 lg:hidden">
              <Link href={"#contato"}>
                <Button
                  aria-label="botão para entrar em contato"
                  className="lg:hidden"
                >
                  Fale Comigo <ChevronRight />
                </Button>
              </Link>
              <ModeToggle />
              <Button
                aria-expanded={menuState.isOpen}
                aria-label="botão para abrir o menu"
                variant={"outline"}
                onClick={toggleMenu}
              >
                <MenuIcon />
              </Button>
            </div>
          </div>
          <nav
            className="mt-7 w-full rounded-lg lg:mt-0 lg:w-auto"
            role="navigation"
          >
            <ul className="flex flex-col gap-3 lg:flex-row">
              {navItems.map((item, index) => (
                <li
                  className="w-full"
                  key={index}
                  onClick={() => {
                    toggleMenu();
                    handleItemClick({ index });
                  }}
                >
                  <Link
                    href={`#${item.title === "Início" ? "" : item.title.toLowerCase()}`}
                    className={`hover:bg-secondary font-inter-tight flex rounded-sm p-2 text-lg font-normal lg:px-6 lg:py-2 lg:text-base ${menuState.activeItem === index ? "bg-secondary" : ""}`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden flex-row-reverse items-center justify-center gap-2 lg:flex">
            <Link href={"#contato"}>
              <Button
                aria-label="botão para entrar em contato"
                className="hidden lg:flex"
              >
                Fale Comigo <ChevronRight />
              </Button>
            </Link>
            <ModeToggle />
          </div>
        </div>
      </motion.header>

      {menuState.isOpen && (
        <div
          aria-label="area para fechar o menu"
          className="fixed top-[calc(3.5rem+1px)] right-0 bottom-0 left-0 z-40 bg-black/30 backdrop-blur lg:hidden"
          onClick={toggleMenu}
        />
      )}
    </>
  );
}
