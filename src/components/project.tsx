import React from "react";
import Image from "next/image";
import projectunderline from "@/assets/projectunderline.svg";
import GreenCard from "@/utils/green-card";
import Link from "next/link";
import Button from "@/utils/hero-button";

const projects = [
  {
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "https://picsum.photos/200/300",
  },
];
const Projects = () => {
  return (
    <div className="p-10 flex flex-col items-center">
      <h2 className="relative text-2xl my-10 ">
        Our projects
        <Image
          className="absolute "
          src={projectunderline}
          alt="project underline image"
        ></Image>
      </h2>
      <div className="projects-cards grid-cols-4 grid gap-8">
        {projects.map((project, index) => {
          return (
            <GreenCard
              key={index}
              style={{
                width: "200px",
                height: `100%`,
                background:
                  "linear-gradient(180deg, #85ADFF 0%, rgba(255, 255, 255, 0.88) 54.28%)",
              }}
            >
              <Image
                src={project.image}
                alt="new image"
                width={100}
                height={100}
                className="rounded-full aspect-square	"
              ></Image>
              <h3 className="text-xl mt-4">{project.title}</h3>
              <p className="text-sm my-4">{project.desc}</p>
              <Link href="" className="absolute bottom-4 right-4 ">
                Read More &gt; &gt;
              </Link>
            </GreenCard>
          );
        })}
      </div>
      <div className="my-4">
        <Button>View all projects</Button>
      </div>
    </div>
  );
};

export default Projects;
