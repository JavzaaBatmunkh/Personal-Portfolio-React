
import { Tag } from "./tag";
import { Links } from "./social-links";
import { MdMailOutline } from "react-icons/md";
import { FaRegCopy } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";

export function ContactMe() {
  return (
    <section id="contact">
      <div className="flex items-center justify-center">
        <Tag props="Get in touch" />
      </div>

      <div className="text-center items-center justify-center pt-5 pb-5 md:text-lg text-sm font-light">
        <p>What is next? Feel free to reach out to me if you are looking for</p>
        <p>a developer, have a query, or simply want to connect.</p>
      </div>

      <div className="flex items-center justify-center mb-2">
        <div className="inline-flex items-center gap-4 md:text-4xl text-1xl font-semibold">
        <MdMailOutline />
          <h1>reachsagarshah@gmail.com</h1>
          <FaRegCopy />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="inline-flex items-center gap-4 md:text-4xl text-1xl font-semibold">
          <FiPhoneCall />
          <h1>+91 8980500565</h1>
          <FaRegCopy />
        </div>
      </div>

      <div className="text-center items-center justify-center pt-10 pb-20 font-light text-sm">
        <p>You may also find me on these platforms!</p>
        <div className="inline-flex">
          <Links />
        </div>
      </div>
    </section>
  );
}
