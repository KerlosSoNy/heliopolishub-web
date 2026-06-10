"use client";
import React from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import Image from "next/image";

export default function BackgroundRippleEffectDemo() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
      <BackgroundRippleEffect />
      <div className="my-auto w-full">
        <Image src="/images/heliopolisWords.png" alt="Heliopolis Hub Logo" width={500} height={500} className="mx-auto w-100 h-50" />
      </div>
    </div>
  );
}
