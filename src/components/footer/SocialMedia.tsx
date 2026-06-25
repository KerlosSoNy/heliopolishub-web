import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";


const SocialMedia = ({ inverted }: { inverted?: boolean }) => {

    return (
        <div className={"flex flex-col gap-2 w-full md:w-fit"}>
            <div className={cn("flex gap-4 lg:gap-6", {
                "invert": inverted
            })}>
                <Link
                    href="https://www.facebook.com/profile.php?id=61585831016511"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:w-8 md:h-8 sm:w-6 w-5 sm:h-6 h-5   rounded-lg flex items-center justify-center  cursor-pointer"
                >
                    <Image src="https://pro-section.ui-layouts.com/facebook.svg" alt="fb" width={24} height={24} />
                </Link>
                <Link
                    href="https://www.instagram.com/heliopolishub/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:w-8 md:h-8 sm:w-6 w-5 sm:h-6 h-5 rounded-lg flex items-center justify-center  cursor-pointer"
                >
                    <Image src="https://pro-section.ui-layouts.com/instagram.svg" alt="insta" width={24} height={24} />
                </Link>
            </div>
        </div>
    );
};

export default SocialMedia;