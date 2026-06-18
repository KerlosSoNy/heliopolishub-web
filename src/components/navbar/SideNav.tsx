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
                "xl:hidden translate-x-full absolute top-0 right-0 w-2/3 max-w-sm h-dvh bg-foundation-black-500 flex flex-col items-center justify-start gap-6 py-8 overflow-y-auto duration-300",
                { "translate-x-0": isNavOpen }
            )}>
                <span className={"w-full flex justify-end px-8"} onClick={toggleNav}>
                    X
                </span>

                {links.map((link, index) => (
                    <li key={index} className="w-full flex flex-col items-center">
                        {link.children && link.children.length > 0 ? (
                            <>
                                <div className="flex flex-row items-center gap-3">
                                    {link.path ? (
                                        <>
                                            <TransitionLink link={link} active={activeTab === index} onclick={handleLinkClick}>
                                                <span className={cn(
                                                    "text-nowrap font-[400] lg:text-[12px] xl:text-[14px] 2xl:text-[18px]",
                                                    expandedItems.includes(link.name) || activeTab === index || hasActiveDescendant(link) ? "text-[#ffffff]" : "text-[#656261]"
                                                )}>
                                                    {link.name}
                                                </span>
                                            </TransitionLink>
                                            <button onClick={() => toggleExpanded(link.name)}>
                                                <ChevronIcon
                                                    isOpen={expandedItems.includes(link.name)}
                                                    color={expandedItems.includes(link.name) || activeTab === index ? "#ffffff" : "#656261"}
                                                />
                                            </button>
                                        </>
                                    ) : (
                                        <button
                                            onClick={() => toggleExpanded(link.name)}
                                            className="text-nowrap flex flex-row items-center gap-3 font-[400] lg:text-[12px] xl:text-[14px] 2xl:text-[18px]"
                                        >
                                            <span className={expandedItems.includes(link.name) || hasActiveDescendant(link) ? "text-[#ffffff]" : "text-[#656261]"}>
                                                {link.name}
                                            </span>
                                            <ChevronIcon
                                                isOpen={expandedItems.includes(link.name)}
                                                color={expandedItems.includes(link.name) ? "#ffffff" : "#656261"}
                                            />
                                        </button>
                                    )}
                                </div>

                                {expandedItems.includes(link.name) && (
                                    <div className="flex flex-col items-center gap-2 mt-3 w-full">
                                        {link.children.map((child, cIndex) => {
                                            const childActive = isChildActive(child, activeHref);
                                            return (
                                                <div key={cIndex} className="w-full flex flex-col items-center">
                                                    {child.children && child.children.length > 0 ? (
                                                        <>
                                                            <div className="flex flex-row items-center gap-2">
                                                                {child.path ? (
                                                                    <>
                                                                        <TransitionLink link={child} active={childActive} onclick={handleLinkClick}>
                                                                            <span className={cn(
                                                                                "text-sm font-[400]",
                                                                                childActive ? "text-[#ffffff]" : "text-[#656261]"
                                                                            )}>
                                                                                {child.name}
                                                                            </span>
                                                                        </TransitionLink>
                                                                        <button onClick={() => toggleExpanded(child.name)}>
                                                                            <ChevronIcon
                                                                                isOpen={expandedItems.includes(child.name)}
                                                                                color={expandedItems.includes(child.name) || childActive ? "#ffffff" : "#656261"}
                                                                            />
                                                                        </button>
                                                                    </>
                                                                ) : (
                                                                    <button
                                                                        onClick={() => toggleExpanded(child.name)}
                                                                        className="flex items-center gap-2 text-sm font-[400]"
                                                                    >
                                                                        <span className={
                                                                            expandedItems.includes(child.name) || childActive
                                                                                ? "text-[#ffffff]"
                                                                                : "text-[#656261]"
                                                                        }>
                                                                            {child.name}
                                                                        </span>
                                                                        <ChevronIcon
                                                                            isOpen={expandedItems.includes(child.name)}
                                                                            color={expandedItems.includes(child.name) || childActive ? "#ffffff" : "#656261"}
                                                                        />
                                                                    </button>
                                                                )}
                                                            </div>

                                                            {expandedItems.includes(child.name) && (
                                                                <div className="flex flex-col items-center gap-2 mt-2 w-full">
                                                                    {child.children.map((grandchild, gIndex) => {
                                                                        const grandchildActive = isGrandchildActive(grandchild, activeHref);
                                                                        return (
                                                                            <TransitionLink
                                                                                key={gIndex}
                                                                                link={grandchild}
                                                                                active={grandchildActive}
                                                                                onclick={handleLinkClick}
                                                                            >
                                                                                <span className={cn(
                                                                                    "text-xs font-[400]",
                                                                                    grandchildActive ? "text-[#ffffff]" : "text-[#656261]"
                                                                                )}>
                                                                                    {grandchild.name}
                                                                                </span>
                                                                            </TransitionLink>
                                                                        );
                                                                    })}
                                                                </div>
                                                            )}
                                                        </>
                                                    ) : (
                                                        <TransitionLink
                                                            link={child}
                                                            active={childActive}
                                                            onclick={handleLinkClick}
                                                        >
                                                            <span className={cn(
                                                                "text-sm font-[400]",
                                                                childActive ? "text-[#ffffff]" : "text-[#656261]"
                                                            )}>
                                                                {child.name}
                                                            </span>
                                                        </TransitionLink>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </>
                        ) : (
                            <TransitionLink link={link} active={activeTab === index} onclick={handleLinkClick} />
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default SideNav;