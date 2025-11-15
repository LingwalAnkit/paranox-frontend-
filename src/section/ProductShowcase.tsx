"use client"
import React, { useRef } from 'react';
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Tabs } from '../component/ui/tabs';
import { cn } from "../../lib/utils";

import feature1Image from "../../public/assets/product-image.png";
import feature2Image from "../../public/assets/product-image.png";
import feature3Image from "../../public/assets/product-image.png";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const tabs = [
    {
      title: "Parent",
      value: "feature1",
      content: (
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src={feature1Image}
            alt="Feature 1"
            width={800}
            height={800}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      ),
    },
    {
      title: "Student",
      value: "feature2",
      content: (
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src={feature2Image}
            alt="Feature 2"
            width={800}
            height={800}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      ),
    },
    {
      title: "Teacher",
      value: "feature3",
      content: (
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src={feature3Image}
            alt="Feature 3"
            width={800}
            height={800}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-white dark:bg-black pt-8 py-96 overflow-hidden"
    >
      <div className="container mx-auto mt-0 pt-8 pb-84 py-96 px-2">
        <div className="relative mb-10">
          <Tabs 
            tabs={tabs}
            containerClassName="justify-center mb-8"
            tabClassName="text-2xl font-medium transition-colors px-4 py-2 rounded-full"
            activeTabClassName="bg-gray-200 text-black shadow-md"
            contentClassName="h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};