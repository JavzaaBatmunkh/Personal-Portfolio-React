import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

export function Hero() {
  return (
    <div class=" md:grid grid-cols-3 py-24 gap-32 flex flex-col-reverse">
      <div className="col-span-2 text-base text-gray-600">
        <h1 className="text-6xl text-gray-900 font-bold mb-2">
          Hi, I'm Sagar 👋
        </h1>
        I'm a full stack developer (React.js & Node.js) with a focus on creating
        (and occasionally designing) exceptional digital experiences that are
        fast, accessible, visually appealing, and responsive. Even though I have
        been creating web applications for over 7 years, I still love it as if
        it was something new.
        <div class="flex flex-row mt-12 gap-2">
        <IoLocationOutline />
          Ulaanbaatar, Mongolia</div>
          <div class="flex flex-row mt-1 gap-2">
          <GoDotFill  className="text-green-600"/>
          Available for new projects
          </div>
          <div className='flex inline-flex mt-10'>
        <div><Image src="/images/GitHub-Icon.png" alt="gitHub" width={30} height={30}/></div>
        <div><Image src="/images/Twitter Icon.png" alt="twitter" width={30} height={30}/></div>
        <div><Image src="/images/Figma-Icon.png" alt="figma" width={30} height={30}/></div>
      </div>
      </div>

      <div className="relative z-30">
        <div className="relative z-50"><Image src="/images/Sagar.jpeg" width={280} height={280} z-index={50} /></div>
        <div className="bg-gray-200 w-64 h-72 absolute top-7 left-20 z-40"></div>

      </div>
    </div>
  );
}
