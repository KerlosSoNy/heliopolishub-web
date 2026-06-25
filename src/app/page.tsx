import { LogoCloud } from '@/components/atoms/logo-cloud';
import Hero from './../components/hero';
import { DiecastHeroSection } from '@/components/BrowseSections';

export default function Home() {
  return (
    <main className="min-h-[calc(100vh)]  w-full h-full overflow-x-hidden relative">
      <Hero />
      <div className=" w-full place-content-center py-20 px-4">
        <section className="relative">
          <h2 className="mb-14 text-center text-white font-bold uppercase text-[32px] ">
            Companies we{" "}
            <span className="font-semibold text-secondary">collaborate</span> with.
          </h2>
          <div className="relative mx-auto max-w-6xl *:border-y-0">
            <div className="pointer-events-none absolute -top-px left-1/2 h-px w-screen -translate-x-1/2 bg-border" />
            <LogoCloud />
            <div className="pointer-events-none absolute -bottom-px left-1/2 h-px w-screen -translate-x-1/2 bg-border" />
          </div>
        </section>
      </div>
      <DiecastHeroSection />
    </main>
  );
}