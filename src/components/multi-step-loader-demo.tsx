"use client";

import { MultiStepLoader } from "./multi-step-loader";

const loadingStates = [
  {
    text: "Scouting the Heliopolis streets for rare finds",
  },
  {
    text: "Inspecting the 1/64 scale details",
  },
  {
    text: "Negotiating the best deal in Cairo",
  },
  {
    text: "Polishing the diecast finish",
  },
  {
    text: "Securing the premium mint-condition box",
  },
  {
    text: "Revving up the delivery engine",
  },
  {
    text: "Clearing space on your display shelf",
  },
  {
    text: "Welcome to Heliopolis Hub",
  },
];

export default function MultiStepLoaderDemo({ isLoading }: { isLoading: boolean }) {
  return (
    <div className="w-screen h-screen max-w-screen max-h-screen bg-transparent overflow-hidden z-120 fixed flex items-center justify-center">
      <MultiStepLoader loadingStates={loadingStates} loading={isLoading} duration={1000} />
    </div>
  );
}
