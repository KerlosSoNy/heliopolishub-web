'use client'
import Link from "next/link";
import React from "react";
import ArrowRight from "../../../public/Icons/ArrowRight";

type AnimatedLinkButtonBaseProps = {
    label?: string;
    className?: string;
    icon?: React.ComponentType<{ className?: string }> | React.ReactNode;
    inverted?: boolean;
    url?: string;
};

type AnimatedLinkButtonAsLink = AnimatedLinkButtonBaseProps & {
    href?: string;
    onClick?: never;
};

type AnimatedLinkButtonAsButton = AnimatedLinkButtonBaseProps & {
    href?: never;
    onClick?: () => void;
};

type AnimatedLinkButtonProps = AnimatedLinkButtonAsLink | AnimatedLinkButtonAsButton;

const sharedClassName = (className = "", inverted = false) => {
    const baseClasses = `group relative overflow-hidden text-[18px] items-center px-5 md:px-8 py-3 md:py-4 rounded-full flex gap-[14px] w-fit`;
    const borderColor = inverted ? "border-2 border-black" : "border-2 border-white";
    return `${baseClasses} ${borderColor} ${className}`;
};

const InnerContent = ({
    label,
    Icon,
    inverted = false,
    hasCustomIcon = false,
}: {
    label: string;
    Icon: React.ComponentType<{ className?: string }> | React.ReactNode;
    inverted?: boolean;
    hasCustomIcon?: boolean;
}) => {
    const textColor = inverted
        ? "text-black group-hover:text-white"
        : "text-white group-hover:text-black";

    const iconColor = inverted
        ? "fill-black group-hover:fill-white"
        : "fill-white group-hover:fill-black";

    const bgColor = inverted ? "bg-foundation-black-500" : "bg-white";

    return (
        <>
            <span className={`relative z-10 transition-colors duration-700 ${textColor}`}>
                {label}
            </span>

            {hasCustomIcon ? (
                <span className="relative z-10 w-5 h-5" style={{ perspective: "200px" }}>
                    <span className="coin-flip absolute inset-0">
                        <span className="coin-face absolute inset-0 flex items-center justify-center">
                            {typeof Icon === "function" ? (
                                <Icon className={`transition-colors duration-500 ${iconColor}`} />
                            ) : (
                                Icon
                            )}
                        </span>
                        <span
                            className="coin-face absolute inset-0 flex items-center justify-center"
                            style={{ transform: "rotateY(180deg)" }}
                        >
                            <ArrowRight className={`transition-colors duration-500 ${iconColor}`} />
                        </span>
                    </span>
                </span>
            ) : (
                typeof Icon === "function" ? (
                    <Icon className={`relative z-10 transition-colors duration-500 ${iconColor}`} />
                ) : (
                    Icon
                )
            )}

            <div className={`absolute inset-0 h-full w-0 ${bgColor} duration-500 transition-[width] group-hover:w-full`} />
        </>
    );
};

export default function AnimatedLinkButton({
    href,
    onClick,
    label = "View all",
    className = "shrink-0",
    icon: Icon = ArrowRight,
    inverted = false,
    url,
}: AnimatedLinkButtonProps) {
    const hasCustomIcon = Icon !== ArrowRight;

    if (href) {
        return (
            <Link
                href={url || href}
                className={sharedClassName(className, inverted)}
                target={url ? "_blank" : ""}
            >
                <InnerContent label={label} Icon={Icon} inverted={inverted} hasCustomIcon={hasCustomIcon} />
            </Link>
        );
    }

    return (
        <button
            title={label}
            type="button"
            onClick={onClick}
            className={sharedClassName(className, inverted)}
        >
            <InnerContent label={label} Icon={Icon} inverted={inverted} hasCustomIcon={hasCustomIcon} />
        </button>
    );
}