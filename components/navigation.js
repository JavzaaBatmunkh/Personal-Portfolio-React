import { Buttons } from "./button";
import { FiSun } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";
import { LuMoonStar } from "react-icons/lu";
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

export function Navigation() {
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
    <>
      <div className="font-semibold text-2xl mb-5">{"<SS />"}</div>
      <hr/>
      <div className="text-[16] leading-6 font-medium items-left flex gap-4 flex-col mt-4">
        {navigations.map((nav, index) => (
          <Link
            href={nav.link}
            className="hover:text-orange-500 transition-colors duration-200"
          >
            {nav.name}
          </Link>
        ))}
        <hr/>

        <button onClick={onLight} className={`flex justify-between  hover:text-orange-500 transition-colors duration-200 ${light ? "hidden" : "block"}`} > 
          Switch Theme
          <FiSun />
        </button>
        <button onClick={offLight} className={`flex justify-between  hover:text-orange-500 transition-colors duration-200 ${light ? "block" : "hidden"}`}>
          Switch Theme
          <LuMoonStar />
        </button>
        <Buttons />
      </div>
    </>
  );
}
