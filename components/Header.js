import { Buttons } from "./button";
import { FiSun } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import Link from 'next/link';


export function Header() {
  return (
    <header className="flex justify-between py-[16px]">
      <div className="font-semibold text-2xl">
        <p>

          {"<SS />"}
        </p></div>
      <div className=" text-gray-600 text-[16] leading-6 font-medium items-center hidden md:flex md:gap-4">
        <div className="hover:text-orange-500 transition-colors duration-200">
          <Link href="#about">
            About
          </Link>
        </div>

        <div className="hover:text-orange-500 transition-colors duration-200">
          <Link href="#work">
            Work
          </Link>
        </div>

        <div>Testimonials</div>
        
        
        <div className="hover:text-orange-500 transition-colors duration-200">
          <Link href="#contact">
          Contact
          </Link>
        </div>
        
        
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
