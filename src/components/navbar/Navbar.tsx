"use client"
import React, { useState } from 'react';
import Image from 'next/image';
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

    console.log(activeTab)
    return (
        <header
            className={"px-5 md:px-6 2xl:px-12.5 py-4 2xl:py-6 w-full bg-foundation-black-500 drop-shadow-2xl drop-shadow-white/10 z-20 fixed top-0 h-fit right-0 text-white"}>
            <nav className={" flex justify-between lg:justify-evenly items-center gap-10 2xl:gap-16 list-none w-full"}>
                <TransitionLink
                    link={{
                        path: "/",
                        name: "Home",
                    }}
                    image>
                    <Image src={'/images/heliopolisWords.png'} alt="Heliopolis Hub Logo" width={200} height={200} className={"w-28 3xl:w-34 h-12 3xl:h-14"} />
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