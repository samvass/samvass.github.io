import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog"


export interface Item {
  title: string
  subtitle: string
  imgSrc: string
  description: string
  date: string
  imgSecondarySrc: string
}

export const HoverEffect = ({
  items,
  className,
  handleCardClick
}: {
  items: Item[];
  className?: string;
  handleCardClick: (item: Item) => void;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block rounded-3xl"
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

          <Dialog>
          <DialogTrigger>
            <Card
              onClick={() => handleCardClick(item)}
            >
              <Image
              height={100}
              width={100}
              src={item.imgSrc}
              alt={"logo"}
              className="object-cover object-top rounded-full h-20 w-20 mb-10"
              />          
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.subtitle}</CardDescription>
            </Card>
          </DialogTrigger>
          <DialogContent>
          <DialogHeader>
              <DialogTitle>
                {item.title}
                <br/>
                <br/>
                {item.date}  
              </DialogTitle>
              <DialogDescription>
                {item.description}
                {<Image
                height={400}
                width={700}
                src={item.imgSecondarySrc}
                alt={"secondaryImg"}
                className="object-cover object-center rounded-md h-30 w-700 my-20"
                />}   
              </DialogDescription>
          </DialogHeader>
          </DialogContent>
          </Dialog>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  onClick: () => void
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
      onClick={onClick}
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
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};