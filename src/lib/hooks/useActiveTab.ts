import { useEffect } from "react";
import { usePathname } from "next/navigation";

const pathToTabIndex: Record<string, number> = {
    "/": 0,
    "/products": 1,
    "/brands": 2,
    "/aboutus": 3,
    "/contactus": 4,
    // "/destinations/somabay": 4,
};

const prefixToTabIndex: [string, number][] = [
    ["/products/", 2],
];

export function useActiveTab(handleActiveTab: (index: number) => void) {
    const pathname = usePathname();

    useEffect(() => {
        const exactMatch = pathToTabIndex[pathname];

        if (exactMatch !== undefined) {
            handleActiveTab(exactMatch);
            return;
        }

        const prefixMatch = prefixToTabIndex.find(([prefix]) =>
            pathname.startsWith(prefix)
        );

        handleActiveTab(prefixMatch ? prefixMatch[1] : 0);
    }, [pathname, handleActiveTab]);
}