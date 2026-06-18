import React, { FC } from 'react';
import Link from "next/link";
import { cn } from '@/lib/utils';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    variant?: "white" | "black";
}

const Button: FC<ButtonProps> = ({ children, variant = "white", className, href, ...props }) => {
    return (
        <Link href={href ?? "#"} {...props} className={cn(`button w-fit group ${className} px-4 2xl:px-6 py-1.5 2xl:py-3 gap-2 rounded-full`, {
            "hover:bg-black border  hover:text-white hover:fill-white border-foundation-black-500 text-black": variant === "black",
            "fill-white border hover:fill-foundation-black-500 hover:text-foundation-black-500  hover:bg-white": variant === "white",
        })}>
            {children}
        </Link>
    );
};

export default Button;