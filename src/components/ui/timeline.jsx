"use client";
import { useState } from "react";
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import React, { useRef } from "react";

export const Timeline = ({ data }) => {
  const timelineHeight = 300;
const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Changelog from my journey
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          I've been working on Aceternity for the past 2 years. Here's a
          timeline of my journey.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => {
          const itemRef = useRef(null);
          const { scrollYProgress } = useScroll({
            target: itemRef,
            offset: ["start center", "end 60%"],
          });

          const heightTransform = useTransform(
            scrollYProgress,
            [1, 0],
            [timelineHeight, 0]
          );
          const heightTransformBar = useTransform(
            scrollYProgress,
            [0, 1],
            [timelineHeight, 0]
          );

          const [isScrollingUp, setIsScrollingUp] = useState(false);
          const prevY = useRef(0);

          useMotionValueEvent(scrollYProgress, "change", (latest) => {
            if (latest > 0 && latest < 1) {
              setActiveIndex(index);
            }
            if (latest < prevY.current) {
              setIsScrollingUp(true);
            } else {
              setIsScrollingUp(false);
            }
            prevY.current = latest;
          });
          return (
            <div key={index} ref={itemRef} className="relative mb-40">
              <div
                style={{ height: timelineHeight }}
                className="absolute top-[-150px] left-[50%] -translate-x-1/2 overflow-visible w-[32px]"
              >
                {activeIndex === index && (
                  <motion.div
                    style={{ y: heightTransform }}
                    className="absolute top-0 left-0"
                    animate={{ rotate: isScrollingUp ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img width="32px" height="50px" src="/mouse.svg" alt="Scroll Icon" />
                  </motion.div>
                )}
                <motion.div
                  style={{ height: heightTransformBar }}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
                />
              </div>

              <div className="flex justify-start pt-10 md:pt-40 md:gap-10">
                <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                  <div className="h-10 absolute left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                  </div>
                  <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                    {item.title}
                  </h3>
                </div>

                <div className="relative pl-20 pr-4 md:pl-4 w-full">
                  <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                    {item.title}
                  </h3>
                  {item.content}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
