import { Buttons } from "./button";
import { FiSun } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";

export function Header() {
  return (
    <header className="flex justify-between py-[16px]">
      <div>SS</div>
      <div className=" text-gray-600 text-[16] leading-6 font-medium items-center hidden md:flex md:gap-4">
        <div>About</div>
        <div>Work</div>
        <div>Testimonials</div>
        <div>Contact</div>
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
