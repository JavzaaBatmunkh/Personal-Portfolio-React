import Image from "next/image";
import Link from "next/link";
import { Tag } from "./tag";
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
    link: "/",
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
    link: "/",
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
    link: "/",
  },
];

export function CardProject() {
  return (
    <div className="flex flex-col gap-10 ">
      {projects.map((project, index) => (
        <div className="flex justify-center items-center dark:bg-[#1F2937]" key={index}>
          <div className="md:grid md:gap-x-12 md:grid-cols-2 justify-center rounded-xl shadow-xl">
            <div className="light:bg-gray-50 rounded-lg items-center justify-center pl-5 pr-5 pb-10 pt-10">
              <Image src={project.imagePath} width={600} height={600} />
            </div>

            <div className="light:bg-white items-center justify-center">
              <div className="pb-10">
                <strong>{project.title}</strong>
              </div>
              <div className="pr-10">{project.description}</div>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tagName, index) => (
                  <Tag key={index} props={tagName} />
                ))}
              </div>

              <div className="pt-10 pb-20">
                <Image
                  src="/images/Icon Button.png"
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
