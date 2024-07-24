import { projects } from "@/data";
import { iconsList } from "@tabler/icons-react";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { AuroraBackground } from "./ui/aurora-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading text-purple">Recent Projects</h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((project) => (
          <AuroraBackground
            className="lg:min-h-[32rem] h-[25rem] flex items-center justify-between flex-col sm:w-[430px] w-[80vw] p-6 rounded-3xl border border-white/[0.1] group/bento bg-black-100 overflow-hidden "
            key={project.id}
          >
            <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[28vh] mb-3 px-5 rounded-3xl">
              <img
                src={project.img}
                alt="cover"
                className="z-10 absolute top-0 w-full lg:rounded-3xl rounded-3xl"
              />
            </div>
            <h1 className="font-bold  md:text-xl text-base  text-white w-full text-start">
              {project.title}
            </h1>

            <p
              className="lg:text-base lg:font-normal font-light text-sm  line-clamp-2"
              style={{
                color: "#BEC1DD",
                margin: "1vh 0",
              }}
            >
              {project.des}
            </p>

            <div className="flex items-center justify-between mt-7 mb-3 w-full gap-2 z-50">
              <div className="flex items-center ">
                <AnimatedTooltip items={project.iconLists} variant="project" />
              </div>
              <Link
                className="flex justify-center items-center z-[100]"
                target="_blank"
                href={project.link}
              >
                <p className="flex md:text-base text-sm text-purple">
                  Check Live Site
                </p>
                <FaLocationArrow className="ms-2" color="#CBACF9" />
              </Link>
            </div>
          </AuroraBackground>
        ))}
      </div>
    </div>
  );
};

export default Projects;
