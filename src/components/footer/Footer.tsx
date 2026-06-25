import Link from "next/link";
import TransitionLink, { link } from '../navbar/TransitionLink';
import SocialMedia from "./SocialMedia";
import Image from "next/image";

const footerLinks: link[] = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Products",
        path: "/products"
    },
    {
        name: "Brands",
        path: "/brands"
    },
    {
        name: "About us",
        path: "/aboutus"
    },
];


const Footer = () => {
    return (
        <footer
            className="bg-black relative z-30 text-white overflow-x-hidden"
            style={{ boxShadow: '0 -2px 24px rgba(255, 255, 255, 0.1)' }}
        >
            <span
                data-aos-delay={"200"}
                data-aos="slide-left"
                className={"block w-[80px] lg:w-[420px] 2xl:w-[502px] h-[225px] lg:h-[131px] absolute -top-2.5 right-0 [box-shadow:-2px_2px_8px_rgba(255,255,255,0.1)]"}
            />
            <div data-aos={"fade"} data-aos-delay={"400"} className={"container grid gap-[47px] px-6 pt-[70px] lg:pb-[80px] lg:px-[50px]"}>
                <TransitionLink
                    link={{
                        path: "/",
                        name: "Home",
                    }}
                    image>
                    <Image
                        priority
                        quality={50}
                        src={'/images/withShadow.png'}
                        alt="Heliopolis Hub Logo"
                        width={224}
                        height={156}
                        className="w-54 h-42 -mb-5 shrink-0"
                    />
                </TransitionLink>
                <div className={"flex gap-10 lg:flex-nowrap flex-wrap justify-between items-center"}>
                    <div className={"flex flex-wrap w-1/2 lg:w-full gap-8 "}>
                        {footerLinks.map((link, index) => (
                            <Link data-aos={"fade-right"} data-aos-delay={`${index * 150}`} className={"text-[16px] font-300"} href={link.path} key={link.path}>{link.name}</Link>
                        ))}
                    </div>
                    <SocialMedia />
                </div>
                <p className={"text-[14px] font-[300]"}>All rights reserved. &nbsp; © 2026 Heliopolis Hub</p>
            </div>
        </footer>
    );
};

export default Footer;