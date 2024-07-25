import Image from "next/image";
import Link from "next/link";
import { Tag } from "./tag";
import { GrShare } from "react-icons/gr";
const projects = [
  {
    imagePath: "/images/Project-pic.png",
    title: "Fiskil",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! ",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
    link: "https://snake-game-xi-ashen.vercel.app/",
  },
  {
    imagePath: "/images/Project-pic.png",
    title: "Fiskil",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! ",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
    link: "https://to-do-list-six-blue.vercel.app/",
  },
  {
    imagePath: "/images/Project-pic.png",
    title: "Fiskil",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! ",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
    link: "https://go-go-mn-homepage.vercel.app",
  },
];

export function CardProject() {
  return (
    <div className="flex flex-col gap-10 ">
      {projects.map((project, index) => (
        <div
          className={`md:flex justify-center rounded-xl shadow-xl 
        ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          key={project.title}
        >
          <div className="bg-gray-50 dark:bg-[#111827] rounded-lg items-center justify-center md:p-12 p-8 md:flex-1">
            <Image src={project.imagePath} width={600} height={600} />
          </div>

          <div className="light:bg-white  md:p-12 p-8 md:flex-1 flex flex-col gap-6">
            <div >
              <strong>{project.title}</strong>
            </div>
            <div >{project.description}</div>

            <div className="flex flex-wrap gap-2 ">
              {project.tags.map((tagName, index) => (
                <Tag key={index} props={tagName} />
              ))}
            </div>

            <Link href={project.link}>
            <GrShare />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
