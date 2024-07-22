import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { Links } from "./social-links";

export function Hero() {
  return (
    <div className=" md:grid grid-cols-3 py-24  flex flex-col-reverse gap-[3.4%] max-w-7xl mx-auto px-[3%]">
      <div className="col-span-2 text-base">
        <h1 className="text-6xl text-gray-900 dark:text-white font-bold mb-2">
          Hi, I'm Sagar 👋
        </h1>
        I'm a full stack developer (React.js & Node.js) with a focus on creating
        (and occasionally designing) exceptional digital experiences that are
        fast, accessible, visually appealing, and responsive. Even though I have
        been creating web applications for over 7 years, I still love it as if
        it was something new.
        <div class="flex flex-row mt-12 gap-2">
          <IoLocationOutline />
          Ulaanbaatar, Mongolia
        </div>
        <div class="flex flex-row mt-1 gap-2">
          <GoDotFill className="text-green-600" />
          Available for new projects
        </div>
        <Links />
      </div>
      
      <div className="relative bg-slate-200 mx-auto w-[80%] aspect-[7/8] hidden md:block ">
        <Image
          src="/images/Sagar.jpeg"
          width={300}
          height={300}
          className=" w-full h-full object-cover relative bottom-[8%] right-[8%]"
        />  
      </div>
      <div className="relative bg-slate-200 mx-auto aspect-[1/1] md:hidden mb-16">
        <Image
          src="/images/Sagar.jpeg"
          width={300}
          height={300}
          className=" w-[84%] h-full object-cover relative bottom-[8%] right-[8%] left-[8%]"
        />
      </div>
      
      
    </div>
  );
}
