"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const AnimatedTooltip = ({
  variant,
  items,
}: {
  variant: string;
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(useTransform(x, [-50, 50], [-45, 45]), springConfig);
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-50, 50], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      {items.map((item, idx) => (
        <div
          className="-mr-4  relative group"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 30,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 15, scale: 0.8 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                <div className="font-bold text-white relative z-30 text-base">
                  {item.name}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          {variant === "project" && (
            <Image
              onMouseMove={handleMouseMove}
              height={36}
              width={36}
              src={item.image}
              alt={item.name}
              className="object-cover !m-1 !p-0 object-top group-hover:scale-105 group-hover:z-30 relative transition duration-300
            border border-white/[.2] rounded-full bg-black-200  w-7 h-7 md:w-9 md:h-9 flex justify-center items-center"
            />
          )}
          {variant === "grid" && (
            <Image
              onMouseMove={handleMouseMove}
              height={55}
              width={55}
              src={item.image}
              alt={item.name}
              className="!m-2 !p-0 group-hover:scale-105 group-hover:z-30 relative transition duration-300
             border-white/[.2] bg-black-200 flex justify-center items-center md:h-[55px] md:w-[55px] h-[45px] w-[45px] rounded-full object-contain border-[0.15rem]  shadow-lg"
            />
          )}
        </div>
      ))}
    </>
  );
};
