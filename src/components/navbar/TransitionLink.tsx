"use client"
import React, { FC } from 'react';
import Link from "next/link";
import { usePageTransition } from '@/lib/hooks/usePageTransition';
import { cn } from '@/lib/utils';

export interface link {
    name: string;
    path: string;
    children?: link[];
}

interface Props {
    active?: boolean,
    link: link
    image?: boolean
    children?: React.ReactNode
    onclick?: () => void;
}

const TransitionLink: FC<Props> = ({ active, link, children, onclick }) => {
    const transition = usePageTransition()

    const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        await transition(href)
    };

    return (
        <Link aria-label={link.name} onClick={async (e) => {
            if (onclick) {
                onclick()
            }
            await handleTransition(e, link.path)
        }} href={link.path}
            className={cn("text-nowrap text-white/50 hover:text-foundation-grey-50 font-normal lg:text-[12px] xl:text-[14px] 2xl:text-[18px] 3xl:text-[18px]", {
                "text-white": active
            })}
        >{children ? children : link.name}</Link>
    );
};

export default TransitionLink;