import Image from "next/image";
import Link from "next/link";

export default function Cta() {
  return (
    <div className="cta-container">
      <Image
        src="/images/cars/1.JPG"
        width={500}
        height={300}
        alt="summer collection" className="cta-banner max-h-110!"
      />

      <div className="absolute top-0 left-0 bg-white/20 backdrop-blur-xs h-full w-full flex flex-col items-center! justify-center! text-center p-4">
        <p className="text-lg font-bold text-white">25% Discount</p>

        <h2 className="text-white text-3xl font-bold">Summer collection</h2>

        <p className="text-green-500 text-md font-medium">Starting at 1000EGP</p>

        <Link href="/" className="text-[#fff] text-xl font-bold mt-4 underline! uppercase">Shop now</Link>
      </div>
    </div>
  );
}
