"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import Image from "next/image";

export function HeroHighlightCustom() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-1xl px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
      >
      <div className="flex flex-col md:flex-row items-center justify-center mx-auto max-w-4xl">
        <div className="text-center md:text-left">
          <div className="text-1xl px-4 md:text-4xl lg:text-5xl font-bold text-white leading-relaxed lg:leading-snug">
            <Highlight className="text-white text-2xl px-4 md:text-4xl lg:text-5xl font-bold leading-relaxed lg:leading-snug whitespace-nowrap">
              Hi, my name is Sam Vasserman!
            </Highlight>
          </div>
          <div className="md:text-lg lg:text-2xl text-white leading-relaxed lg:leading-snug mt-2 md:mt-4">
            A Software Engineer from Montreal 🇨🇦
          </div>
        </div>
        <div className="flex-shrink-0 mt-4 md:mt-0 md:ml-8">
          <Image
            height={100}
            width={100}
            src={"/headshot.jpg"}
            alt={"headshot"}
            className="object-cover !m-0 !p-0 object-top rounded-full h-64 w-64 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
          />
        </div>
      </div>
      
      </motion.h1>
      
    </HeroHighlight>
  );
}
