"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function WavyBackgroundDemo() {
  return (
    <WavyBackground className="mx-auto w-full h-full my-auto">
      <div className="flex flex-col items-center justify-center w-full h-full pb-10" >
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold  text-center">
          Heliopolis Hub
        </p>
        <p className="text-sm md:text-base mt-2 text-neutral-200 font-light  text-center max-w-xl mx-auto">
          Egypt`s premier marketplace to buy, sell, and trade premium scale models. From timeless classics to modern supercars, find your next grail piece here.
        </p>
      </div >
    </WavyBackground >
  );
}
