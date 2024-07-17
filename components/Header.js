import { Buttons } from "./button";
import { FiSun } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";
import { LuMoonStar } from "react-icons/lu";
import { Navigation } from "./navigation";

const navigations = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Testimonials",
    link: "/testimonials",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export function Header() {
  const [open, setOpen] = useState(false);
  function openMenu() {
    setOpen(true);
  }

  function closeMenu() {
    setOpen(false);
  }
  const [light, setLight] = useState(true);
  function onLight() {
    setLight(true);
    document.documentElement.classList.remove("dark");
  }
  function offLight() {
    setLight(false);
    document.documentElement.classList.add("dark");
  }

  return (
    <header className="flex justify-between py-[16px] ">
      <div className="font-semibold text-2xl">{"<SS />"}</div>

      <div>
        <div
          className={`fixed top-0 bottom-0 w-full bg-slate-500/90  transition-all 
            ${open ? "opacity-100 right-64" : "opacity-0 -right-full"}`}
          onClick={closeMenu}
        ></div>
        <div
          className={`fixed top-0 bottom-0  w-64 bg-white dark:bg-slate-800 dark:text-white shadow-lg text-black transition-all 
        ${open ? "right-0 " : "-right-full"}`}
        >
          <Navigation />
          <button onClick={closeMenu}>Close</button>
        </div>
      </div>
      <div className="text-[16] leading-6 font-medium items-center hidden md:flex md:gap-4">
        {navigations.map((nav, index) => (
          <Link
            href={nav.link}
            className="hover:text-orange-500 transition-colors duration-200"
          >
            {nav.name}
          </Link>
        ))}

        <button onClick={onLight} className={light ? "hidden" : "block"}>
          <FiSun />
        </button>
        <button onClick={offLight} className={light ? "block" : "hidden"}>
          <LuMoonStar />
        </button>
        <Buttons />
      </div>
      <button className="md:hidden text-4xl" onClick={openMenu}>
        <IoMenu />
      </button>
    </header>
  );
}
