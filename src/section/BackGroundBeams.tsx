import React from "react";
import Image from "next/image";
import FlipWords from "../component/acertinity/FlipWords";
import BackgroundImage from "../../public/logo/download.jpg"; // background image

export default function BackgroundBeamsDemo() {
  return (
    <div className="relative w-full h-[800px]">
      {/* Background Image */}
      <Image
        src={BackgroundImage}
        alt="NavShiksha Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay (dark layer for readability, optional) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text Content */}
      <div className="absolute top-1/3 left-10 z-10 text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          NavShiksha
        </h1>
        <h2 className="text-6xl  font-bold text-white mt-4">
          Rural Roots,{" "}
          <FlipWords
            className="!text-[#3296c2] font-extrabold"
            words={[
              "United Goals",
              "Inspire Hope",
              "Stronger Ties",
              "Dreams Aglow",
            ]}
          />
        </h2>
        <h3 className="text-6xl  font-bold text-white mt-4">
          Education For Everyone
        </h3>
        <p className="text-lg md:text-xl text-gray-200 max-w-md mt-4">
          Welcome to NavShiksha, a better way of connecting rural education with
          interactive websites, training for teachers, and parents also.
        </p>
      </div>
    </div>
  );
}
