"use client";

import Marquee from "react-fast-marquee";

const stats = [
  { emoji: "🏁", label: "PREMIUM DIECAST BRANDS", value: "MINI GT • INNO64 • KAIDO HOUSE" },
  { emoji: "📦", label: "CONDITION GUARANTEED", value: "100% MINT BOXES" },
  { emoji: "🇪🇬", label: "EGYPT'S COLLECTOR COMMUNITY", value: "HELIOPOLIS HUB" },
  { emoji: "🔥", label: "SCALED TO PERFECTION", value: "1:64 • 1:43 • 1:32" },
];

function StatsMarquee() {
  return (
    <Marquee
      className="border-white/10 border-y bg-black/30 py-2 backdrop-blur-sm [--duration:30s] [--gap:2rem]"
      pauseOnHover
    >
      {stats.map((stat) => (
        <div
          className="flex items-center gap-3 whitespace-nowrap"
          key={stat.label}
        >
          <span className="font-bold font-mono text-secondary text-sm tracking-wide">
            {stat.value}
          </span>
          <span className="font-medium font-mono text-sm text-white/70 uppercase tracking-[0.15em]">
            {stat.label}
          </span>
          <span className="text-base">{stat.emoji}</span>
        </div>
      ))}
    </Marquee>
  );
}

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full flex-col items-start justify-end">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('/images/hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 w-full max-w-4xl px-4 text-white sm:px-8 lg:px-16">
        <div className="space-y-4">
          <StatsMarquee />
        </div>
      </div>
      <div className="relative z-10 w-full px-4 pb-16 sm:px-8 sm:pb-24 lg:px-16 lg:pb-32">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end">
          <div className="w-full space-y-4 ">
            <h1 className="font-medium text-4xl text-white leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Curating <span className="text-foundation-black-500">Details</span>,
              fueling <span className="text-foundation-black-500">Passion</span>.
              <br />
              <span className="text-white">Scale armor for your shelves</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}