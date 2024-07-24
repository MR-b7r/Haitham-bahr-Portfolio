"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import Image from "next/image";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const formData = useRef();
  function onSubmit() {
    setIsLoading(true);
    emailjs
      .sendForm(`service_dchymxy`, `template_my6ks6d`, formData.current, {
        publicKey: "8Pb4WvwTSvUfp132d",
      })

      .then(() => toast.success("Message sent successfully"))
      .catch(() =>
        toast.error("An error occurred, Please try again later", {
          duration: 4000,
          position: "top-center",
          className:
            "min-w-[220px] py-3 px-5 tracking-wider text-base font-semibold text-white bg-red-600 z-50",
        })
      )
      .finally(() => setIsLoading(false));
    reset();
  }
  return (
    <motion.section
      id="contact"
      className="text-center sm:mb-0  py-20 "
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="max-w-[50rem] mx-auto">
        <div className="w-full absolute left-0 md:-bottom-52 -bottom-20 min-h-96 ">
          <img
            src="/footer-grid.svg"
            alt="grid"
            className="w-full h-full opacity-70 "
          />
        </div>
        <div className=" flex flex-col items-center justify-center mt-10 w-full">
          <div className=" z-50 flex flex-col items-center justify-center w-full">
            <h1 className="heading text-purple">Contact Me</h1>

            <p className="text-white-200 md:mt-8 my-5 text-center">
              Reach out to me today and let&apos;s discuss how I can help you
              achieve your goals.
            </p>
          </div>

          <form
            className="z-50  flex flex-col text-white tracking-wide w-full "
            onSubmit={handleSubmit(onSubmit)}
            ref={formData}
          >
            <input
              className="h-14 px-4 bg-black-200  bg-opacity-80 focus:bg-opacity-100 transition-all outline-none rounded-2xl border border-white/[0.1] font-semibold "
              name="senderEmail"
              type="email"
              required
              maxLength={200}
              placeholder="Enter your email please"
              disabled={isLoading}
              {...register("senderEmail", {
                required: "please enter your Email",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email address",
                },
              })}
            />
            <p className="text-sm text-red-500 mt-[2px]">
              {errors?.senderEmail?.message}
            </p>
            <textarea
              className="h-40 my-3 bg-black-200 p-4 bg-opacity-80 focus:bg-opacity-100 transition-all outline-none rounded-2xl border border-white/[0.1]"
              name="message"
              placeholder="What do you want to talk about?"
              required
              maxLength={1000}
              disabled={isLoading}
              {...register("message", {
                required: "please enter your Message",
              })}
            />
            <p className="text-sm text-red-500 mt-[2px]">
              {errors?.message?.message}
            </p>
            <MagicButton
              type="submit"
              variant="primary"
              title="Submit"
              icon={<FaLocationArrow />}
              position="right"
              otherClasses={"max-w-fit tracking-wider"}
              disabled={isLoading}
            />
          </form>
        </div>
      </div>
      <div className="flex w-full mt-16 md:flex-row flex-col max-md:gap-3 max-md:flex-col-reverse justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light text-white">
          Copyright © 2024 Haitham Bahr
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <Link
              target="_blank"
              href={info.link}
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image src={info.img} alt="icons" width={20} height={20} />
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
