import HeroParallaxDemo from "@/components/hero-parallax-demo";
// import WavyBackgroundDemo from "@/components/wavy-background-demo";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh)]  w-full h-full overflow-x-hidden relative">
      <div className="pb-4">
        <HeroParallaxDemo />
      </div>
    </main>
  );
}