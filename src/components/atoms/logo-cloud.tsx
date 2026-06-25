import { cn } from "@/lib/utils";
import { DecorIcon } from "./decor-icon";
import Image from "next/image";

type Logo = {
    src: string;
    alt: string;
};

export function LogoCloud() {
    return (
        <div className="grid grid-cols-2 border md:grid-cols-4">
            <LogoCard
                data-aos="fade-right"
                data-aos-duration="1000"
                className="relative border-r border-b bg-white! "
                logo={{
                    src: "/images/logos/miniGt.png",
                    alt: "Mini GT",
                }}
            >
                <DecorIcon className="z-10" position="bottom-right" />
            </LogoCard>

            <LogoCard
                data-aos="fade-right"
                data-aos-duration="1200"
                className="border-b md:border-r bg-black!"
                logo={{
                    src: "/images/logos/kaidoHouse.png",
                    alt: "KaidoHouse",
                }}
            />

            <LogoCard
                data-aos="fade-right"
                data-aos-duration="1400"
                className="relative border-r border-b bg-white! "
                logo={{
                    src: "/images/logos/inno64.png",
                    alt: "Inno64",
                }}
            >
                <DecorIcon className="z-10" position="bottom-right" />
                <DecorIcon className="z-10 hidden md:block" position="bottom-left" />
            </LogoCard>

            <LogoCard
                data-aos="fade-right"
                data-aos-duration="1600"
                className="relative border-b  bg-black! "
                logo={{
                    src: "/images/logos/hotWheels.png",
                    alt: "Hot Wheels Logo",
                }}
            />

            <LogoCard
                data-aos="fade-left"
                data-aos-duration="1000"
                className="relative border-r border-b bg-black!"
                logo={{
                    src: "/images/logos/tarmacWorks.png",
                    alt: "Tarmac Works Logo",
                }}
            >
                <DecorIcon className="z-10 md:hidden" position="bottom-right" />
            </LogoCard>

            <LogoCard
                data-aos="fade-left"
                data-aos-duration="1200"
                className="border-b  md:border-r bg-white!"
                logo={{
                    src: "/images/logos/poprace.webp",
                    alt: "Pop Race Logo",
                }}
            />

            <LogoCard
                data-aos="fade-left"
                data-aos-duration="1400"
                className="border-r bg-black!"
                logo={{
                    src: "/images/logos/tomica.png",
                    alt: "Tomica AI Logo",
                }}
            />

            <LogoCard
                data-aos="fade-left"
                data-aos-duration="1600"
                className="bg-white!"
                logo={{
                    src: "/images/logos/microturbo.png",
                    alt: "Micro Turbo Logo",
                }}
            />
        </div>
    );
}

type LogoCardProps = React.ComponentProps<"div"> & {
    logo: Logo;
};

function LogoCard({ logo, className, children, ...props }: LogoCardProps) {
    return (
        <div
            className={cn(
                "flex items-center justify-center bg-background px-4 py-8 md:p-10",
                className
            )}
            {...props}
        >
            <Image
                alt={logo.alt}
                className="pointer-events-none select-none w-auto! h-10 dark:brightness-0 dark:invert"
                height="100"
                src={logo.src}
                width="250"
            />
            {children}
        </div>
    );
}
