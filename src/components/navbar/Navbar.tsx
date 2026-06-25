"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useActiveTab } from '@/lib/hooks/useActiveTab';
import TransitionLink from './TransitionLink';
import NavLinks from './NavLinks';
import SideNav from './SideNav';
import LetsTalkButton from '../atoms/LetsTalkButton';


export interface link {
    name: string;
    path: string;
    children?: link[];
}

const links: link[] = [
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

const Navbar = () => {
    const [activeTab, setActiveTab] = useState<number>(0)
    const handleActiveTab = (index: number) => {
        if (activeTab === index) return
        setActiveTab(index)
    }

    useActiveTab(handleActiveTab)

    const pathname = usePathname();
    const isDashboard = pathname?.startsWith('/dashboard');

    if (isDashboard) return null;

    return (
        <header
            className={"px-5 md:px-6 2xl:px-12.5 w-full bg-black drop-shadow-md drop-shadow-white/5 z-100 fixed top-0 h-fit right-0 text-white"}>
            <nav className={" flex justify-between xl:justify-evenly items-center gap-10 2xl:gap-16 list-none w-full"}>
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
                        height={96}
                        className="w-20 lg:w-34 h-18 lg:h-32 lg:-my-4 object-cover"
                    />
                </TransitionLink>
                <div className="flex flex-row items-center gap-10">
                    <NavLinks activeTab={activeTab} links={links} />
                </div>
                <LetsTalkButton className={"hidden xl:flex "} />
                <SideNav activeTab={activeTab} links={links} />
            </nav>
        </header>
    );
}
    ;

export default Navbar;