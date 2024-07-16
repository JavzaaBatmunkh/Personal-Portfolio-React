import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { Links } from "./social-links";

export function Hero() {
  return (
    <div class=" md:grid grid-cols-3 py-24  flex flex-col-reverse gap-[3.4%]">
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

      <Image src="/images/Sagar.jpeg" width={280} height={280} />
    </div>
  );
}
