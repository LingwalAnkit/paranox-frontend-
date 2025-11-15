// navbar-menu.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  onClick,
  color = "#3296c2",
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  onClick?: () => void;
  color?: string;
}) => {
  const isActive = active === item;

  return (
    <div
      onMouseEnter={() => setActive(item)}
      className="relative whitespace-nowrap"
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className={`cursor-pointer ${
          isActive ? "font-bold underline" : ""
        } dark:text-white`}
        style={{
          color: isActive ? color : color, // same color, just add effects when active
        }}
      >
        {item}
      </motion.p>

      {isActive && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
            <motion.div
              transition={transition}
              layoutId="active"
              className="bg-white dark:bg-neutral-900 shadow-lg rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700"
            >
              <motion.div layout className="w-max h-full p-4">
                {children}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full  dark:bg-black dark:border-white/[0.2] shadow-input flex items-center justify-center py-4 backdrop-blur-xl  shadow-xs"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2 group max-w-sm">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div className="flex-1 min-w-0 max-w-[180px]">
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors break-words">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm dark:text-neutral-300 break-words leading-relaxed truncate">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-blue-700 dark:text-neutral-200 hover:text-neutral-500"
    >
      {children}
    </Link>
  );
};
