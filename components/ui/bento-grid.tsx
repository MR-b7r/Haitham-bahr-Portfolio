"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import animationData from "@/data/confetti.json";
import { useState } from "react";
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { BackgroundBeams } from "./background-beams";
import Image from "next/image";
import { AnimatedTooltip } from "./animated-tooltip";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-4 gap-4 lg:gap-8 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const progLang = [
    { id: 1, name: "Tailwind", designation: "", image: "/tail.svg" },
    { id: 2, name: "Javascript", designation: "", image: "/javascript.svg" },
    { id: 3, name: "Typescript", designation: "", image: "/ts.svg" },
    { id: 4, name: "React", designation: "", image: "/react.svg" },
    { id: 5, name: "Redux", designation: "", image: "/redux.svg" },
    { id: 6, name: "next", designation: "", image: "/next.svg" },
    { id: 7, name: "Zod", designation: "", image: "/zod.svg" },
    { id: 8, name: "Supabase", designation: "", image: "/supabase-icon.svg" },
    { id: 9, name: "Appwrite", designation: "", image: "/app.svg" },
    { id: 10, name: "mongodb", designation: "", image: "/mongodb-icon.svg" },
    { id: 11, name: "Nodejs", designation: "", image: "/nodejs-icon.svg" },
    { id: 12, name: "git", designation: "", image: "/git-icon.svg" },
  ];
  const leftItems = ["ReactJS", "NextJs", "Typescript"];
  const rightItems = ["Tailwind", "Supabase", "MongoDB"];
  const [copied, setCopied] = useState(false);
  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "haithamb74@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3500);
  };
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 2 && "flex justify-center "} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 2 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}
        {id === 1 && (
          <BackgroundBeams>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundBeams>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div
            className={`font-sans z-10 text-white ${
              id === 1
                ? "max-w-full text-base lg:text-2xl font-semibold"
                : "max-w-96 text-lg lg:text-3xl font-bold"
            }`}
          >
            {title}
          </div>

          {id === 1 && (
            <div className="flex flex-col items-center justify-center gap-2 mt-5">
              <span className="text-lg lg:text-3xl tracking-wider font-bold text-white-100">
                My Skills
              </span>
              <div className="flex gap-2 justify-center w-full items-center flex-wrap border-t-black-300">
                <AnimatedTooltip items={progLang} variant="grid" />
              </div>
            </div>
          )}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftItems.map((item, i) => (
                  <span
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 text-white
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {rightItems.map((item, i) => (
                  <span
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 text-white
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 2 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>
              <MagicButton
                variant="primary"
                icon={<IoCopyOutline />}
                title={copied ? "Email copied" : "Copy my email"}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
