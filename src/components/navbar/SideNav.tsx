"use client"
import { FC, useState } from 'react';

import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import TransitionLink from './TransitionLink';
import ChevronIcon from './ChevronIcon';
import { IconCloudSearch, IconMenu } from '@tabler/icons-react';

export interface link {
    name: string;
    path: string;
    children?: link[];
}

interface Props {
    links: link[]
    activeTab: number;
}

const SideNav: FC<Props> = ({ links, activeTab }) => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
    const [expandedItems, setExpandedItems] = useState<string[]>([]);

    const toggleNav = () => setIsNavOpen(!isNavOpen);

    const toggleExpanded = (itemName: string) => {
        setExpandedItems(prev =>
            prev.includes(itemName)
                ? prev.filter(name => name !== itemName)
                : [...prev, itemName]
        );
    };

    const handleLinkClick = () => {
        setIsNavOpen(false);
        setExpandedItems([]);
    };

    const isChildActive = (child: link, activeHref?: string): boolean => {
        if (!activeHref) return false;
        if (child.path === activeHref) return true;
        if (child.children?.some(gc => gc.path === activeHref)) return true;
        return false;
    };

    const isGrandchildActive = (grandchild: link, activeHref?: string): boolean => {
        if (!activeHref) return false;
        return grandchild.path === activeHref;
    };

    const pathname = usePathname();
    const activeHref = pathname;

    const hasActiveDescendant = (item: link): boolean => {
        if (!activeHref) return false;
        if (!item.children) return false;
        return item.children.some(child =>
            child.path === activeHref ||
            child.children?.some(gc => gc.path === activeHref)
        );
    };

    return (
        <>
            <span className={"xl:hidden"} onClick={toggleNav}>
                <IconMenu />
            </span>
            <ul className={cn(
                "xl:hidden translate-x-full absolute top-0 right-0 w-2/3 max-w-sm h-dvh bg-black flex flex-col items-center justify-start gap-6 py-8 overflow-y-auto duration-300",
                { "translate-x-0": isNavOpen }
            )}>
                <span className={"w-full flex justify-end px-8"} onClick={toggleNav}>
                    <svg className="w-6 h-6 rotate-y-180 mt-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H14M4 18H9" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </span>

                {links.map((link, index) => (
                    <li key={index} className="w-full flex flex-col items-center">
                        <TransitionLink link={link} active={activeTab === index} onclick={handleLinkClick} />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default SideNav;