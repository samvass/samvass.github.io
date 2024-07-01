"use client";

import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";


export interface EducationItem {
  school: string
  title: string
  date: string
  gpa: string
  imgSrc: string
  courses: string[]
}

export const HoverEffect = ({
  items,
  className,
}: {
  items: EducationItem[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <div
      className={cn(
        "flex flex-direction-horizontal py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-indigo-500/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
            <Card>
              <Image
              height={100}
              width={100}
              src={item.imgSrc}
              alt={"logo"}
              className="object-cover object-top rounded-full h-20 w-20 mb-10"
              />          
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>
                <div>
                  {item.school}
                  <br />
                  GPA: {item.gpa}
                  <br />
                  <br />
                  {item.date}
                  <br />
                  <br />
                  <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3">
                  {item.courses.map((course, idx) => {
                    return (
                      <span key={idx} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-indigo-900 text-indigo-300 mr-2 my-2">{course}</span>
                    )
                  })}
                  </div>
                </div>
              </CardDescription>
            </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl p-4 overflow-hidden bg-neutral-950 border-4 border-transparent border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
      style={{ width: "550px", height: "375px" }}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-2 text-zinc-400 tracking-wide leading-relaxed text-sm flex flex-direction-vertical",
        className
      )}
    >
      {children}
    </p>
  );
};
