"use client";
import Thumb from "@/public/focus-0.svg";
import Image from "next/image";

export default function Focus() {
  return (
    <div className="w-full relative  py-24 sm:py-32">
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:gap-x-10 justify-center">
          <Image src={Thumb} alt="alt" />
        </div>
      </div>
    </div>
  );
}
