import { Buttons } from "./button";
import { FiSun } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";

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
  return (
    <header className="flex justify-between py-[16px]">
      <div className="font-semibold text-2xl">
        {"<SS />"}
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

        <div>
          <FiSun />
        </div>
        <Buttons />
      </div>
      <div className="md:hidden text-4xl">
        <IoMenu />
      </div>
    </header>
  );
}
