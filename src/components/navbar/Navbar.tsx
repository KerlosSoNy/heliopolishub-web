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
        name: "About us",
        path: "/aboutus"
    },
    {
        name: "The Lab",
        path: "/thelab",
        children: [
            {
                name: "Editions",
                path: "/editions",
                children: [
                    { name: "Ash", path: "/thelab/Ash/1" },
                    { name: "Wave", path: "/thelab/Wave/2" },
                    { name: "Leaf", path: "/thelab/Leaf/3" },
                    { name: "Slate", path: "/thelab/Slate/4" },
                    { name: "Sand", path: "/thelab/Sand/5" },
                    { name: "Air", path: "/thelab/Air/6" },
                    { name: "Salt", path: "/thelab/Salt/7" }
                ]
            },
            {
                name: "Collections",
                path: "",
                children: [
                    { name: "Spring", path: "/thelab/collections/spring" },
                    { name: "Summer", path: "/thelab/collections/summer" }
                ]
            },
            {
                name: "Furnishing",
                path: "",
                children: [
                    { name: "Chairs", path: "/thelab/furnishing/chairs" },
                    { name: "Tables", path: "/thelab/furnishing/tables" }
                ]
            },
            {
                name: "Design Studio",
                path: "/thelab/design-studio"
            },
            {
                name: "Material Selection",
                path: "/thelab/material-selection"
            }
        ]
    },
    {
        name: "Projects",
        path: "/projects"
    },
    {
        name: "Destinations",
        path: "/destinations",
        children: [
            {
                name: "Soma Bay",
                path: "/destinations/somabay"
            }
        ]
    },
    {
        name: "Community",
        path: "/community",
        children: [
            {
                name: "Design Talks",
                path: "/community?type=design-talks"
            },
            {
                name: "Cooking sessions",
                path: "/community?type=cooking-sessions"
            },
            {
                name: "Work shops",
                path: "/community?type=work-shops"
            },
            {
                name: "Talents",
                path: "/thelab/talents"
            }
        ]
    },
    {
        name: "Shop",
        path: "/shop"
    }
];

const Navbar = () => {
    const [activeTab, setActiveTab] = useState<number>(0)
    const handleActiveTab = (index: number) => {
        if (activeTab === index) return
        setActiveTab(index)
    }

    useActiveTab(handleActiveTab)


    return (
        <header
            className={"px-5 md:px-6 2xl:px-12.5 py-4 2xl:py-6 w-full bg-foundation-black-500 z-20 fixed top-0 h-fit right-0 text-white"}>
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