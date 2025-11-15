"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "../../../lib/utils";

// Card Component
export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <a
      href={card.link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-full h-full block"
    >
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          " relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-80 md:h-[32rem] lg:h-[38rem] w-full transition-all duration-300 ease-out cursor-pointer"
        )}
      >
        <Image
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute inset-0"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Overlay that appears on hover */}
        <div
          className={cn(
            "absolute inset-0 bg-black/50 flex items-end transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0"
          )}
        >
          <div
            className={cn(
              "w-full p-6 pb-20 transition-transform duration-300 ease-out",
              hovered === index
                ? "transform translate-y-0"
                : "transform translate-y-full"
            )}
          >
            <div className="text-center">
              <div className="text-xl md:text-4xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
                {card.title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
);

Card.displayName = "Card";

// FocusCards Component
type Card = {
  title: string;
  src: string;
  link: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-full mx-auto py-8">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
