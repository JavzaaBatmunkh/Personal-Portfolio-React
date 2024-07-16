import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    imagePath: "/images/GitHub-Icon.png",
    link: "/github",
  },
  {
    imagePath: ("/images/Twitter Icon.png"),
    link: "/twitter",
  },
  {
    imagePath: ("/images/Figma-Icon.png"),
    link: "/figma",
  },
];
export function Links() {
  return (
    <div className="flex mt-10">
      {socialLinks.map((social, index) => (
        <Link key={index} href={social.link}>
          <Image src={social.imagePath} width={30} height={30} />
        </Link>
      ))}
    </div>
  );
}
