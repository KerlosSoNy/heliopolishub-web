"use client"
import React, { FC, useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import TransitionLink from './TransitionLink';


export interface link {
    name: string;
    path: string;
    children?: link[];
}



interface Props {
    link: link;
    active: boolean;
}

const NavDropdown: FC<Props> = ({ link, active }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [expandedItems, setExpandedItems] = useState<string[]>([]);
    const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);


    useEffect(() => {
        return () => {
            if (closeTimeoutRef.current) {
                clearTimeout(closeTimeoutRef.current);
            }
        };
    }, []);


    if (!link.children || link.children.length === 0) {
        return (
            <TransitionLink link={link} active={active} />
        );
    }

    const handleMouseEnter = () => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        closeTimeoutRef.current = setTimeout(() => {
            setIsOpen(false);
            setExpandedItems([]);
        }, 250);
    };

    const toggleExpanded = (itemName: string) => {
        setExpandedItems(prev =>
            prev.includes(itemName)
                ? prev.filter(name => name !== itemName)
                : [...prev, itemName]
        );
    };

    const handleChildClick = () => {
        setIsOpen(false);
        setExpandedItems([]);
    };



    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                className={cn(
                    "transition-colors duration-300 flex flex-row text-nowrap group items-center gap-2",
                    (active || isOpen) ? "text-white font-normal" : "text-[#656261] hover:text-white"
                )}
            >
                <span className="pt-0.5">{link.name}</span>
                {link.children && link.children.length > 0 && (
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={`group-hover:fill-white transition-all duration-500 ${(active || isOpen) ? "fill-white" : "fill-[#656261]"}`} fillRule="evenodd" clipRule="evenodd" d="M6.70711 6.70711C6.31658 7.09763 5.68342 7.09763 5.29289 6.70711L0.292894 1.70711C-0.0976312 1.31658 -0.0976312 0.683417 0.292894 0.292893C0.683418 -0.0976315 1.31658 -0.0976314 1.70711 0.292893L6 4.58579L10.2929 0.292893C10.6834 -0.097631 11.3166 -0.097631 11.7071 0.292893C12.0976 0.683417 12.0976 1.31658 11.7071 1.70711L6.70711 6.70711Z" fill="#656261" />
                    </svg>
                )}
            </button>

            {/* Modal Dropdown Panel */}
            {isOpen && (
                <div className="absolute top-[190%] left-1/2 -translate-x-1/2 mt-[12px] 2xl:mt-[14px] max-h-[500px] overflow-y-scroll bg-foundation-black-500 border-t-0 border border-white px-11 pb-11 pt-8 w-[271px] z-50 animate-in fade-in duration-200">
                    <Link href={link.path || ""} className={`text-[24px] font-semibold text-white hover:underline`}>
                        {link.name}
                    </Link>
                    <div className="flex flex-col mt-3">
                        {link.children.map((child, index) => (
                            <div key={index}>
                                <div
                                    className="flex items-center justify-between cursor-pointer group"
                                    onClick={() => toggleExpanded(child.name)}
                                >
                                    {child.children && child.children.length > 0 ?
                                        (child?.path ?
                                            <Link href={child?.path} className="text-white hover:underline  text-[18px] font-normal  transition-colors">
                                                {child.name}
                                            </Link>
                                            :
                                            <span className="text-white  text-[18px] font-normal   transition-colors">
                                                {child.name}
                                            </span>
                                        ) :
                                        <Link href={child?.path} className="text-white hover:underline text-[18px] font-normal  transition-colors">
                                            {child.name}
                                        </Link>
                                    }
                                    {child.children && child.children.length > 0 && (
                                        <svg
                                            className={cn(
                                                "transition-transform duration-300 text-gray-400",
                                                expandedItems.includes(child.name) ? "rotate-180" : ""
                                            )}
                                            width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.70711 6.70711C6.31658 7.09763 5.68342 7.09763 5.29289 6.70711L0.292894 1.70711C-0.0976312 1.31658 -0.0976312 0.683417 0.292894 0.292893C0.683418 -0.0976315 1.31658 -0.0976314 1.70711 0.292893L6 4.58579L10.2929 0.292893C10.6834 -0.097631 11.3166 -0.097631 11.7071 0.292893C12.0976 0.683417 12.0976 1.31658 11.7071 1.70711L6.70711 6.70711Z" fill="#F8F5F4" />
                                        </svg>
                                    )}
                                </div>


                                {expandedItems.includes(child.name) && child.children && (
                                    <div className="flex flex-col space-y-2 mt-4">
                                        {child.children.map((grandchild, gIndex) => (
                                            <TransitionLink
                                                key={gIndex}
                                                link={grandchild}
                                            >
                                                <div
                                                    onClick={handleChildClick}
                                                    className="text-[#fefdfdcc] font-light text-[18px] hover:text-white transition-colors  border-gray-600 hover:border-white"
                                                >
                                                    {grandchild.name}
                                                </div>
                                            </TransitionLink>
                                        ))}
                                    </div>
                                )}
                                {/* Divider */}
                                {link?.children && (index !== (link?.children.length - 1)) &&
                                    <div className="border-t border-gray-600 mt-2 mb-4"></div>
                                }
                                {/* {!child.children || child.children.length === 0 ? (
                                    <TransitionLink link={child}>
                                        <div
                                            onClick={handleChildClick}
                                            className="text-gray-400 hover:text-white transition-colors py-2"
                                        >
                                        </div>
                                    </TransitionLink>
                                ) : null} */}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavDropdown;