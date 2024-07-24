import React from "react";
import { Spotlight } from "./ui/Spotlight";
import Image from "next/image";
import haithamBahr from "@/public/haithamBahr.jpeg";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaDownload, FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="pb-20 pt-40">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Grid and Dot Backgrounds  */}
      <div
        className="h-screen w-full bg-black-100  bg-grid-white/[0.05] 
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100
         [mask-image:radial-gradient(ellipse_at_center,transparent_80%,black)]"
        />
      </div>

      <div className="flex items-center justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <Image
            src={haithamBahr}
            alt="Haitham Bahr"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="md:h-24 md:w-24 w-20 h-20 rounded-full object-cover border-[0.30rem] border-white shadow-xl"
          />
          <TextGenerateEffect
            words="Transforming Design into Website with Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white">
            Hey I&apos;m Haitham,{" "}
            <span className="text-blue-300">Front end Developer</span> with
            Next.js
          </p>

          <div className="flex items-center justify-center gap-4 md:mt-10 w-full flex-wrap mx-auto">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Link href="#about">
                <MagicButton
                  variant="primary"
                  title="Show my work"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </Link>
              <Link
                href="https://drive.google.com/file/d/12jSr96In0enTyVmBU8yeFzUaJneekDgT/view"
                download={true}
              >
                <MagicButton
                  variant="primary"
                  title="Download CV"
                  icon={<FaDownload />}
                  position="right"
                />
              </Link>
            </div>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Link
                href="https://www.linkedin.com/in/haitham-bahr-b33b1224b/"
                target="_blank"
              >
                <MagicButton
                  variant="secondary"
                  icon={<BsLinkedin />}
                  otherClasses="bg-black-200 rounded-lg border border-black-300 hover:text-white hover:border-white"
                />
              </Link>

              <Link href="https://github.com/MR-b7r" target="_blank">
                <MagicButton
                  variant="secondary"
                  icon={<FaGithubSquare />}
                  otherClasses="bg-black-200 rounded-lg border border-black-300 hover:text-white hover:border-white"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
